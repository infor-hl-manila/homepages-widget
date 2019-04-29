import { Component, Input } from "@angular/core";
import { checkboxColumn, lookupColumns, lookupDataset } from "../data";
import { ComponentBase } from "./base.component";

@Component({
	selector: "ids-source-lookup",
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
					[options]="lookupOptions"
					[source]="lookupSource"
					data-validate="required"
					[multiselect]="isMulti"
					field="productId"
					[attr.disabled]="disabled ? '' : null"/>
		</div>`
})
export class LookupSourceComponent extends ComponentBase {
	@Input() isMulti: boolean;
	@Input() isAsync: boolean;
	@Input() testId: string;

	columns: SohoDataGridColumn[] = [...lookupColumns];
	dataset = [...lookupDataset];
	labelInfo: string;
	lookupOptions = {
		paging: true,
		pagesize: 5,
		pagesizes: [3, 5, 10, 15]
	};

	ngOnInit() {
		this.model = this.setDefaultValue ? this.isMulti ? ["first", "second"] : "first" : undefined;
		this.labelInfo = (this.isAsync ? "async " : "") + "source " + (this.isMulti ? "multi" : "single") + " select";

		if (this.isMulti) {
			this.columns.unshift(checkboxColumn);
		}
	}

	lookupSource = (req: SohoDataGridSourceRequest, response: SohoDataGridResponseFunction) => {
		if (this.isAsync) {
			setTimeout(() => {
				response(this.dataset, req);
			}, 1000);
		} else {
			response(this.dataset, req);
		}
	}
}
