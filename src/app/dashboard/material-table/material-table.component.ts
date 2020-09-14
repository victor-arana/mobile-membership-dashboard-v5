import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TransactionDistribution } from 'src/app/model/transaction-distribution';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent {

  columnsToDisplay = ['level', 'regularTransactions', 'mobileTransactions'];

  @Input() public distributions: Observable<TransactionDistribution[]>;
  @Output() public itemSelect: EventEmitter<TransactionDistribution>;

  constructor() { 
    this.itemSelect = new EventEmitter<TransactionDistribution>();
  }

  onItemSelect(row){
    console.log("on MaterialTableComponent.onItemSelect()",row);
    this.itemSelect.emit(row);
  }
}
