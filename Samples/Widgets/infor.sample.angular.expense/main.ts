import { CommonModule } from "@angular/common";
import { Component, Input, NgModule, OnInit, Injectable } from "@angular/core";
import {
	DialogService,
	ILanguage,
	IWidgetAction,
	IWidgetComponent,
	IWidgetContext2,
	IWidgetInstance2,
	Log
} from "lime";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { SohoListViewModule } from "@infor/sohoxi-angular";

class ExpenseItem {
	date: Date;
	hasVendor: boolean;
	vendorName: string;
	hasExpenseType: boolean;
	expenseType: string;
	amount: string;
	currency: string;
	currencyAmount: string;

	constructor(item: any) {
		this.date = item.date;
		this.hasVendor = item.hasVendor;
		this.vendorName = item.vendorName;
		this.hasExpenseType = item.hasExpenseType;
		this.expenseType = item.expenseType;
		this.amount = item.amount;
		this.currency = item.currency;
		this.currencyAmount = item.currencyAmount;
	}
}

interface TokenData {
	token: string;
}

interface IMyLanguage extends ILanguage {
	widgetText?: string;
}

@Component({
	template: `
		<div>
			<div class='expense-download'>
				Manage your expenses easily, use <a href='https://itunes.apple.com/us/app/infor-expense/id1401347288?mt=8'>
			Infor Expense Mobile</a>
			</div>
		<div>
		<div class='expense-ob-container'>
			<div [ngClass]='{\"expense-ob\": true,\"expense-ob-clear\":isExpenseClear}'>
				<span>{{ outstandingBalance }}</span>
				<br />
				<span class='text-small text-strong text-muted'>{{currencyCode}}</span>
			</div>
			<div [ngClass]='{\"expense-ob-label\":true,\"expense-ob-label-clear\":isExpenseClear,\"text-secondary\":true}'>
				Outstanding Balance
			</div>
		</div>
		<div class='expense-list'>
			<soho-listview>
				<li soho-listview-item *ngFor=\"let item of expenseData\">
					<div class='expense-panel-left'>
						<div class='expense-date nobreak text-base'>
							{{ item.date }}
						</div>
						<div [ngClass]='{\"nobreak\":true,\"expense-vendor\":true,\"expense-vendor-empty\":!item.hasVendor, \"text-primary\": true}'>
							{{item.vendorName}}
						</div>
						<div [ngClass]='{\"nobreak\":true,\"expense-expense-type\":true,\"expense-expense-type-empty\":!item.hasExpenseType,\"text-secondary\":true}'>
							{{item.expenseType}}
						</div>
					</div>
					<div class='expense-panel-right nobreak data-large' [attr.title]='item.currencyAmount'>
						<span class='expense-amount'>{{item.currencyAmount}}</span>
					</div>
				</li>
			</soho-listview>
		</div>`,
	styles: [`
		.expense-download {
			text-align: left;
			padding: 9px;
			background-color: black;
			color: white;
		}
		
		.expense-download > a {
			color:white;
		}
		
		.expense-ob-container {
			text-align: center;
			width: 343px;
			display: inline-block;
			margin-top:30px;
		}
		
		.expense-ob {
			display: inline-block;
			margin-top: 20px;
			margin-bottom: 10px;
			padding-top: 50px;
			border: 2px solid black;
			height: 150px;
			width: 150px;
			-webkit-border-radius: 150px;
			-moz-border-radius: 150px;
			border-radius: 150px;
			font-family: HelveticaNeue;
			font-size: 28px;
			color: #1A1A1A;
			letter-spacing: 0;
			text-align:center;
		}
		
		.expense-ob-clear {
			border-color:#7ED321;
		}
		
		.expense-currency-code {
			color:#BDBDBD;
			font-weight:bold;
		}

		.expense-ob-label {
			font-family: HelveticaNeue-Bold;
			color: #1A1A1A;
			letter-spacing: 0;
			text-align: center;
		}
		
		.expense-ob-label-clear {
			color: #7ED321;
		}
		
		.expense-list {
			width: 380px;
			display: inline-block;
			float: right;
		}
		
		.expense-panel-left {
			display: inline-block;
			height: 68px;
			width: 49%;
		}
		
		.expense-date {
			font-family: HelveticaNeue;
			color: #999999;
			letter-spacing: 0;
			margin-bottom: 10px;
		}
		
		.expense-vendor {
			font-family: HelveticaNeue;
			color: #1A1A1A;
			letter-spacing: 0;
		}
		
		.expense-vendor-empty {
			color:#BDBDBD
		}
		
		.expense-expense-type {
			font-family: HelveticaNeue;
			color: #454545;
			letter-spacing:0;
		}
		
		.expense-expense-type-empty {
			color: #BDBDBD
		}
		
		.expense-panel-right {
			display: inline-block;
			height: 68px;
			width: 49%;
			line-height: 68px;
			text-align: right;
		}
		
		.expense-amount {
			font-family: HelveticaNeue;
			color: #1A1A1A;
			letter-spacing: 0;
			text-align: right;
		}
		
		.nobreak {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		
		li:last-child {
			border-bottom: 0;
		}`]
})
@Injectable()
export class ExpenseComponent implements OnInit, IWidgetComponent {
	@Input()
	widgetContext: IWidgetContext2;
	@Input()
	widgetInstance: IWidgetInstance2;
	language: IMyLanguage;

	objectKeys = Object.keys;

	expenseData: ExpenseItem[] = [];
	isExpenseClear: boolean = true;
	outstandingBalance: string = '0.00';
	currencyCode: string = '';
	serverAddress: string = 'https://xm10.xm.awsdev.infor.com:443/xm-api/v1/application';
	userId: string = 'XMQA_AX1.jsmith';
	password: string = 'InforExpense';

	constructor(private _http: HttpClient) { 
		this._http = _http;
	}

	ngOnInit() {
		this.language = this.widgetContext.getLanguage();

		// this.getToken();
		this.getdummyData();

		this.recomputeSize(this.widgetContext.getElement());
	}

	recomputeSize(element: any) {
		const leftPanel = element[0].children[0].children[0].children[1].children[0];
		const rightPanel = element[0].children[0].children[0].children[1].children[1];
		const containerWidth = element[0].offsetWidth;
		const containerHeight = element[0].offsetHeight - 30; //deduct height of banner
		
		if (containerWidth > 400 && containerHeight > 400) {
			leftPanel.setAttribute('style', 'margin-top:200px');
		} else {
			if (containerWidth > 400) {
				leftPanel.setAttribute('style', 'margin-top:30px');
			} else {
				leftPanel.setAttribute('style', 'margin-top:20px');
			}
		}
		
		if (containerWidth > 800) {
			rightPanel.setAttribute('style','height:' + containerHeight + 'px;overflow-y:scroll;width:775px;border-left:1px solid #BDBDBD;');
		} else if (containerWidth > 400) {
			rightPanel.setAttribute('style','height:' + containerHeight + 'px;overflow-y:scroll;width:380px;border-left:1px solid #BDBDBD;');
		} else {
			rightPanel.setAttribute('style','height:auto;overflow-y:hidden;width:100%;border-left:0;');
		}
	};

	getToken() {
		const _this = this;
		_this._http.post(_this.serverAddress + '/Token', { 'xmenv': 'true', 'userId': _this.userId, 'password': _this.password })
		.subscribe(data => {
			console.log(data); //map first

			const tokenData = data as TokenData;
			_this.getExpenseData(tokenData.token);
		});
	};

	getExpenseData(token: string) {
		console.log(token);
		const _this = this;
		_this._http.get(_this.serverAddress + '/ExpenseLineItem?xmenv=true&userId=' + _this.userId + '&unattachedCCT=true&reference=true&token=' + token)
		.subscribe(dataObj => {
			let outstandingBalance = 0;
			let currencyCode = '';
			_this.expenseData = [];

			const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
			const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
			const getFormatDate = function (d: Date) {
				const dateToday = new Date();
				const oldDate = new Date(d);
				const timeDiff = dateToday.getTime() - oldDate.getTime();
				const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
				const dayText = diffDays === -1 ? 'Yesterday' : diffDays === 0 ? 'Today' : null;

				const formatDate = monthNames[oldDate.getMonth()] + ' ' + oldDate.getDate() + ', ' + oldDate.getFullYear() + ' (' + (dayText || dayNames[oldDate.getDay()]) + ')';

				return formatDate;
			}

			function formatAmount(x: any) {
				return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}

			const dataset = dataObj as any[];
			dataset.forEach(function(item) {
				_this.expenseData.push(new ExpenseItem({
					date: getFormatDate(item.date),
					hasVendor: item['-vendorName'],
					vendorName: item['-vendorName'] ? item['-vendorName'] : 'No Vendor',
					hasExpenseType: item['-reference'][item.expenseType],
					expenseType: item['-reference'][item.expenseType] ? item['-reference'][item.expenseType]['-displayName'] : 'No Expense Type',
					amount: formatAmount(parseFloat((item.expenseItemAmtPaid).split(' ')[1]).toFixed(2)),
					currency: item.expenseItemAmtPaid.split(' ')[0],
					currencyAmount: item.expenseItemAmtPaid.split(' ')[0] + ' ' + formatAmount(parseFloat((item.expenseItemAmtPaid).split(' ')[1]).toFixed(2))
				}));

				outstandingBalance += parseFloat((item.expenseItemAmtPaid).split(' ')[1]);
				currencyCode = item.expenseItemAmtPaid.split(' ')[0];
			});

			_this.outstandingBalance = _this.shortenAmountString(outstandingBalance);
			_this.currencyCode = currencyCode;
			_this.isExpenseClear = outstandingBalance === 0;
		});
	};
	
	shortenAmountString = function(amount: number) {
		let newAmount = amount.toString();

		function formatAmount(x: any) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		}

		if (amount >= 100000) {
			if (amount >= 1000000000000) { // T
				newAmount = (amount/1000000000000).toFixed(2) + 'T';
			} else if (amount >= 1000000000) { // B
				newAmount = (amount/1000000000).toFixed(2) + 'B';
			} else if (amount >= 1000000) { // M
				newAmount = (amount/1000000).toFixed(2) + 'M';
			} else { // K
				newAmount = (amount/1000).toFixed(2) + 'K';
			}
		} else {
			newAmount = formatAmount(amount % 1 != 0 ? amount.toFixed(2) : amount);
		}

		return newAmount.toString();
	};
	
	getdummyData() {
		const _this = this;
		const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
		const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		const getFormatDate = function (d: Date) {
			const dateToday = new Date();
			const oldDate = new Date(d);
			const timeDiff = dateToday.getTime() - oldDate.getTime();
			const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
			const dayText = diffDays === -1 ? 'Yesterday' : diffDays === 0 ? 'Today' : null;

			const formatDate = monthNames[oldDate.getMonth()] + ' ' + oldDate.getDate() + ', ' + oldDate.getFullYear() + ' (' + (dayText || dayNames[oldDate.getDay()]) + ')';

			return formatDate;
		}
		
		this.expenseData = [
			new ExpenseItem({
				date: getFormatDate(new Date()),
				hasVendor: true,
				vendorName: 'Hotel 1',
				hasExpenseType: true,
				expenseType: 'Hotel',
				amount: '123456.00',
				currency: 'USD',
				currencyAmount: 'USD 12,345.00'
			}),
			new ExpenseItem({
				date: getFormatDate(new Date()),
				hasVendor: true,
				vendorName: 'Restaurant 2',
				hasExpenseType: false,
				expenseType: 'No Expense Type',
				amount: '234.00',
				currency: 'USD',
				currencyAmount: 'USD 234.00'
			}),
			new ExpenseItem({
				date: getFormatDate(new Date()),
				hasVendor: false,
				vendorName: 'No Vendor',
				hasExpenseType: true,
				expenseType: 'Flight',
				amount: '345.00',
				currency: 'USD',
				currencyAmount: 'USD 345.00'
			}),
			new ExpenseItem({
				date: getFormatDate(new Date()),
				hasVendor: true,
				vendorName: 'Restaurant 4',
				hasExpenseType: true,
				expenseType: 'Meal - Group or Travel',
				amount: '456.00',
				currency: 'USD',
				currencyAmount: 'USD 456.00'
			}),
			new ExpenseItem({
				date: getFormatDate(new Date()),
				hasVendor: true,
				vendorName: 'Hotel 1',
				hasExpenseType: true,
				expenseType: 'Hotel',
				amount: '123.00',
				currency: 'USD',
				currencyAmount: 'USD 123.00'
			}),
			new ExpenseItem({
				date: getFormatDate(new Date()),
				hasVendor: true,
				vendorName: 'Restaurant 2',
				hasExpenseType: false,
				expenseType: 'No Expense Type',
				amount: '234.00',
				currency: 'USD',
				currencyAmount: 'USD 234.00'
			}),
			new ExpenseItem({
				date: getFormatDate(new Date()),
				hasVendor: false,
				vendorName: 'No Vendor',
				hasExpenseType: true,
				expenseType: 'Flight',
				amount: '345.00',
				currency: 'USD',
				currencyAmount: 'USD 345.00'
			}),
			new ExpenseItem({
				date: getFormatDate(new Date()),
				hasVendor: true,
				vendorName: 'Restaurant 4',
				hasExpenseType: true,
				expenseType: 'Meal - Group or Travel',
				amount: '456.00',
				currency: 'USD',
				currencyAmount: 'USD 456.00'
			})
		];
		this.outstandingBalance = '0';
		this.currencyCode = 'USD';
		this.expenseData.forEach(function (item) {
			_this.outstandingBalance = (parseInt(_this.outstandingBalance) + parseInt(item.amount)).toString();
		});
		_this.outstandingBalance = this.shortenAmountString(parseInt(_this.outstandingBalance));

		_this.isExpenseClear = parseInt(_this.outstandingBalance) === 0;
	};
}

@NgModule({
	imports: [CommonModule, HttpClientModule, SohoListViewModule],
	declarations: [ExpenseComponent],
	entryComponents: [ExpenseComponent]
})
export class ExpenseModule {
}
