import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardNewComponent } from './dashboard-new/dashboard-new.component';
import { AdvanceSearchListComponent } from './advance-search-list/advance-search-list.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    DashboardNewComponent,
    AdvanceSearchListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
