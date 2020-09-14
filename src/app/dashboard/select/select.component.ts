import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { TransactionDistribution } from 'src/app/model/transaction-distribution';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {

  @Input() public distributions: Observable<TransactionDistribution[]>;
  @Output() public itemSelect: EventEmitter<TransactionDistribution>;

  constructor() { 
    this.itemSelect = new EventEmitter<TransactionDistribution>();
  }
  
  onItemSelect(row){
    console.log("on SelectComponent.onItemSelect()",row);
    this.itemSelect.emit(row);
  }
}