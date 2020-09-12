import { Component, OnInit } from '@angular/core';
import { TransactionDistribution } from 'src/app/model/transaction-distribution';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit {

  columnsToDisplay = ['level', 'regularTransactions', 'mobileTransactions'];

  public distributions: Observable<TransactionDistribution[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
