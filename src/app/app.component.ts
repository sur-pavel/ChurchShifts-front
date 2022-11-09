import {Component} from '@angular/core';
import { WeekService } from './weekservice';
import { Week } from './week';
import { LazyLoadEvent } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService],
  styles: [`
      :host ::ng-deep .p-cell-editing {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
      }
  `]
})
export class AppComponent {
  weeks1: Week[] | undefined;

  weeks2: Week[] | undefined;

  statuses: SelectItem[] | undefined;

  clonedProducts: { [s: string]: Week; } = {};

  constructor(private weekService: WeekService, private messageService: MessageService) { }

  ngOnInit() {
    this.weekService.getProductsSmall().then(data => this.weeks1 = data);
    this.weekService.getProductsSmall().then(data => this.weeks2 = data);

    this.statuses = [{label: 'In Stock', value: 'INSTOCK'},{label: 'Low Stock', value: 'LOWSTOCK'},{label: 'Out of Stock', value: 'OUTOFSTOCK'}]
  }

  onRowEditInit(week: Week) {
    this.clonedProducts[week.id] = {...week};
  }

  onRowEditSave(week: Week) {
    if (week.name?.length > 0) {
      delete this.clonedProducts[week.id];
      this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
    }
    else {
      this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
    }
  }

  onRowEditCancel(week: Week, index: number) {
    this.weeks2[index] = this.clonedProducts[week.id];
    delete this.weeks2[week.id];
  }
}
