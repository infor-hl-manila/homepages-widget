import { CommonModule } from "@angular/common";
import { Component, Input, NgModule, NgZone, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SohoAccordionModule, SohoButtonModule, SohoLabelModule, SohoRadioButtonModule } from "@infor/sohoxi-angular";
import { IDevice, IGetNetworkResult, IGetSensorsResult, IMapCoordinates, IMediaSource, IWidgetComponent, IWidgetContext2, IWidgetInstance2 } from "lime";
import { Observable, Observer, Subject } from "rxjs";
import { map, scan, switchMap } from "rxjs/operators";

export interface ILogEntry {
	message: string;
	isError?: boolean;
}

@Component({
	template: `
		<soho-accordion>
			<soho-accordion-header>Location</soho-accordion-header>
			<soho-accordion-pane>
				<div class="accordion-content">
					<button soho-button="primary" (click)="getLocation()">Get location</button>
					<p *ngIf="location$ | async as location">
						latitude: <b>{{location.latitude}}</b>,
						longitude: <b>{{location.longitude}}</b>
					</p>
				</div>
			</soho-accordion-pane>

			<soho-accordion-header>QR Reader</soho-accordion-header>
			<soho-accordion-pane>
				<div class="accordion-content">
					<button soho-button="primary" (click)="readQR()">Start QR Reader</button>
					<p *ngIf="qr$ | async as qr">{{qr}}</p>
				</div>
			</soho-accordion-pane>

			<soho-accordion-header>Network</soho-accordion-header>
			<soho-accordion-pane>
				<div class="accordion-content">
					<button soho-button="primary" (click)="getNetwork()">Get network</button>
					<p *ngIf="network$ | async as network">
						connectionState: <b>{{network.connectionState}}</b>,
						connectionType: <b>{{network.connectionType}}</b>
					</p>
				</div>
			</soho-accordion-pane>

			<soho-accordion-header>Links</soho-accordion-header>
			<soho-accordion-pane>
				<div class="accordion-content">
					<input #url type="text" value="https://example.com">
					<button soho-button="primary" (click)="launchMobileLink(url.value)">Mobile Launch</button>
					<button soho-button="tertiary" (click)="launchLink(url.value)">Context Launch</button>
				</div>
			</soho-accordion-pane>

			<soho-accordion-header>Motion sensors</soho-accordion-header>
			<soho-accordion-pane>
				<div class="accordion-content">
					<button soho-button="primary" (click)="getSensors()">Get sensors</button>
					<p *ngIf="sensors$ | async as sensors">
						acceleration: <b>{{sensors.acceleration}}</b>,
						gyroscope: <b>{{sensors.gyroscope}}</b>
					</p>
				</div>
			</soho-accordion-pane>

			<soho-accordion-header>Maps</soho-accordion-header>
			<soho-accordion-pane>
				<div class="accordion-content">
					<button soho-button="tertiary" (click)="showMapLocation()">Open map with a location</button>
					<br/>
					<button soho-button="tertiary" (click)="showMapMarkers()">Open map with markers</button>
					<br/>
					<button soho-button="tertiary" (click)="showMapNavigation()">Open map with navigation</button>
				</div>
			</soho-accordion-pane>

			<soho-accordion-header>Image</soho-accordion-header>
			<soho-accordion-pane>
				<div class="accordion-content">
					<input soho-radiobutton type="radio" id="i-source-all" name="i-source-all" value="all" [(ngModel)]="imageSource">
					<label soho-label [forRadioButton]="true" for="i-source-all">Both</label>
					<br/>
					<input soho-radiobutton type="radio" id="i-source-camera" name="i-source-camera" value="camera" [(ngModel)]="imageSource">
					<label soho-label [forRadioButton]="true" for="i-source-camera">Camera</label>
					<br/>
					<input soho-radiobutton type="radio" id="i-source-library" name="i-source-library" value="library" [(ngModel)]="imageSource">
					<label soho-label [forRadioButton]="true" for="i-source-library">Library</label>
					<br/>
					<button soho-button="primary" (click)="getImage(imageSource)">Get Image</button>
					<img *ngIf="image$ | async as imageUrl" [src]="imageUrl">
				</div>
			</soho-accordion-pane>

			<soho-accordion-header>Video</soho-accordion-header>
			<soho-accordion-pane>
				<div class="accordion-content">
					<input soho-radiobutton type="radio" id="v-source-all" name="v-source-all" value="all" [(ngModel)]="videoSource">
					<label soho-label [forRadioButton]="true" for="v-source-all">Both</label>
					<br/>
					<input soho-radiobutton type="radio" id="v-source-camera" name="v-source-camera" value="camera" [(ngModel)]="videoSource">
					<label soho-label [forRadioButton]="true" for="v-source-camera">Camera</label>
					<br/>
					<input soho-radiobutton type="radio" id="v-source-library" name="v-source-library" value="library" [(ngModel)]="videoSource">
					<label soho-label [forRadioButton]="true" for="v-source-library">Library</label>
					<br/>
					<button soho-button="primary" (click)="getVideo(videoSource)">Get Video</button>
					<video *ngIf="video$ | async as videoUrl" [src]="videoUrl" controls></video>
				</div>
			</soho-accordion-pane>

			<soho-accordion-header>Audio</soho-accordion-header>
			<soho-accordion-pane>
				<div class="accordion-content">
					<button soho-button="primary" (click)="getAudio()">Get Audio</button>
					<audio *ngIf="audio$ | async as audioUrl" controls>
						<source [src]="audioUrl" type="audio/mp3">
					</audio>
				</div>
			</soho-accordion-pane>

			<soho-accordion-header>Logs</soho-accordion-header>
			<soho-accordion-pane>
				<div class="accordion-content">
					<button soho-button="tertiary" (click)="initLogging()">Clear</button>
					<div class="log-container">
						<p *ngFor="let logEntry of logs$ | async" [class.error-msg]="logEntry.isError">{{logEntry.message}}</p>
					</div>
				</div>
			</soho-accordion-pane>
		</soho-accordion>
	`,
	styles: [`
		.log-container > p {
			font-size: 12px;
			line-height: 12px;
			margin: 0;
			padding: 1px;
			border: 1px solid lightgray;
		}
		.error-msg {
			color: red;
		}
	`]
})
export class MobileWidgetComponent implements IWidgetComponent, OnInit {
	@Input() widgetContext: IWidgetContext2;
	@Input() widgetInstance: IWidgetInstance2;

	imageSource: IMediaSource = "all";
	videoSource: IMediaSource = "all";

	sensors$ = new Subject<IGetSensorsResult>();
	qr$ = new Subject<string>();
	audio$ = new Subject<string>();
	video$ = new Subject<string>();
	image$ = new Subject<string>();
	network$ = new Subject<IGetNetworkResult>();
	location$ = new Subject<IMapCoordinates>();
	logs$: Observable<ILogEntry[]>;

	private device$: Observable<IDevice>;

	constructor(private zone: NgZone) {
		this.initLogging();
	}

	ngOnInit() {
		this.device$ = this.widgetContext.getDevice();
	}

	launchLink(url: string) {
		this.widgetContext.launch({ url });
	}

	launchMobileLink(url: string) {
		this.device$.pipe(
			switchMap(device => device.openExternalLink({ url })),
		).subscribe();
	}

	getImage(source: IMediaSource) {
		this.device$.pipe(
			switchMap(device => device.getImage({ source })),
			map(result => result.data),
		).subscribe(imageData => this.image$.next(imageData));
	}

	getVideo(source: IMediaSource) {
		this.device$.pipe(
			switchMap(device => device.getVideo({ source })),
			map(result => result.data),
		).subscribe(videoData => this.video$.next(videoData));
	}

	getAudio() {
		this.device$.pipe(
			switchMap(device => device.getAudio()),
			map(result => result.data),
		).subscribe(audioData => this.audio$.next(audioData));
	}

	showMapLocation() {
		this.device$.pipe(
			switchMap(device => device.showMap({
				mapType: "location",
				coordinates: { latitude: 0, longitude: 0 },
			})),
		).subscribe();
	}

	showMapMarkers() {
		this.device$.pipe(
			switchMap(device => device.showMap({
				mapType: "marker",
				markers: [
					{
						coordinates: {latitude: 0, longitude: 0},
						label: "Marker 1",
					},
					{
						coordinates: {latitude: 0, longitude: 0.1},
						label: "Marker 2",
					},
					{
						coordinates: {latitude: 0, longitude: 0.2},
						label: "Marker 3",
					},
				],
			})),
		).subscribe();
	}

	showMapNavigation() {
		this.device$.pipe(
			switchMap(device => device.showMap({
				mapType: "navigation",
				start: { latitude: 0, longitude: 0 },
				destination: { latitude: 1, longitude: 1 },
			})),
		).subscribe();
	}

	getLocation() {
		this.device$.pipe(
			switchMap(device => device.getLocation()),
		).subscribe(location => this.location$.next(location));
	}

	readQR() {
		this.device$.pipe(
			switchMap(device => device.readQRCode()),
			map(result => result.text),
		).subscribe(value => this.qr$.next(value));
	}

	getNetwork() {
		this.device$.pipe(
			switchMap(device => device.getNetwork()),
		).subscribe(data => this.network$.next(data));
	}

	getSensors() {
		this.device$.pipe(
			switchMap(device => device.getSensors()),
		).subscribe(sensorData => this.sensors$.next(sensorData));
	}

	/**
	 * NOTE: This method will override console.log and console.error.
	 * This should never ever ever ever be done in a production environment,
	 * and it is quite dangerous to do even in development.
	 */
	initLogging() {
		const consoleLogs$: Observable<ILogEntry> = Observable.create((observer: Observer<ILogEntry>) => {
			const oldConsoleLog = console.log;
			const oldConsoleError = console.error;
			console.log = (...args: {}[]) => {
				const message = args.map(s => JSON.stringify(s)).join(" ");
				this.zone.run(() => observer.next({ message }));
				oldConsoleLog(...args);
			};
			console.error = (...args: {}[]) => {
				const message = args.map(s => JSON.stringify(s)).join(" ");
				this.zone.run(() => observer.next({ message, isError: true }));
				oldConsoleError(...args);
			};
		});
		this.logs$ = consoleLogs$.pipe(
			scan<ILogEntry, ILogEntry[]>((entries, entry) => [entry, ...entries], []),
		);
	}
}

@NgModule({
	declarations: [MobileWidgetComponent],
	entryComponents: [MobileWidgetComponent],
	imports: [
		CommonModule,
		FormsModule,
		SohoAccordionModule,
		SohoButtonModule,
		SohoRadioButtonModule,
		SohoLabelModule,
	],
})
export class MobileWidgetModule { }
