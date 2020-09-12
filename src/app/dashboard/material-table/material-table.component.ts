import { Component, OnInit } from '@angular/core';
import { TransactionDistribution } from 'src/app/model/transaction-distribution';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit {

  public distributions: TransactionDistribution[]

  constructor() { }

  ngOnInit(): void {
  }

}
