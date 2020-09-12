import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionDistributionService } from './services/transaction-distribution.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MaterialTableComponent } from './dashboard/material-table/material-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [ TransactionDistributionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
