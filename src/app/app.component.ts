import { Component, OnInit } from '@angular/core';
import { TransactionDistributionService } from './services/transaction-distribution.service';
import { TransactionDistribution } from './model/transaction-distribution';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mobile-membership-dashboard-v5';

  public regions: TransactionDistribution[];
  public districts: TransactionDistribution[];
  public clubs: TransactionDistribution[];

  constructor(private service: TransactionDistributionService){
    this.regions = [
      {"parentLevel": -1, "parentId":1, "level":0, "elementId": 1, "elementName":"General", "regularTransactions": 10, "mobileTransactions": 90}
    ];
  }

  ngOnInit(): void {
    this.service.getTransactionDistribution(0,new Date(), new Date()).subscribe(d => this.regions = d);
  }

  onItemSelect(item){
    console.log("item: ", item);
    if(item.level==1){
      this.service.getTransactionDistribution(item.level, item.elementId, new Date()).subscribe(d => this.districts = d);
    } else if (item.level==2){
      this.service.getTransactionDistribution(item.level, item.elementId, new Date()).subscribe(d => this.clubs = d);
    }
    console.log("app receives event: ",item);
  }
}
