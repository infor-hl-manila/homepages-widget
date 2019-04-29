import { Component, Input } from "@angular/core";
import { checkboxColumn, lookupColumns, lookupDataset } from "../data";
import { ComponentBase } from "./base.component";

@Component({
	selector: "ids-dataset-lookup",
	template: `
		<div class="field">
			<label soho-label
					[required]="true"
					[attr.data-lm-tst-smp]="testId + '-lbl'">
				Lookup ({{labelInfo}})
				<br/>
				ngModel: {{model}}
			</label>
			<input soho-lookup
					[attr.data-lm-tst-smp]="testId + '-ipt'"
					[(ngModel)]="model"
					[columns]="columns"
					[dataset]="dataset"
					(beforeopen)="beforeOpen()"
					data-validate="required"
					[multiselect]="isMulti"
					field="productId"
					[attr.disabled]="disabled ? '' : null"/>
		</div>`
})
export class LookupDatasetComponent extends ComponentBase {
	@Input() isMulti: boolean;
	@Input() isAsync: boolean;
	@Input() testId: string;

	columns: SohoDataGridColumn[] = [...lookupColumns];
	dataset: {}[];
	labelInfo: string;

	ngOnInit() {
		this.model = this.setDefaultValue ? this.isMulti ? ["first", "second"] : "first" : undefined;
		if (!this.isAsync) {
			this.dataset = [...lookupDataset];
		}

		if (this.isMulti) {
			this.columns.unshift(checkboxColumn);
		}

		this.labelInfo = (this.isAsync ? "async " : "") + "dataset " + (this.isMulti ? "multi" : "single") + " select";
	}

	beforeOpen() {
		if (!this.isAsync) { return; }
		setTimeout(() => {
			this.dataset = [...lookupDataset];
		}, 1000);
	}
}
