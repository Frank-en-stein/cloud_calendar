import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MonthYearPickerComponent } from './month-year-picker/month-year-picker.component';
import { AddEditEventModalComponent } from './add-edit-event-modal/add-edit-event-modal.component';
import { ListEventModalComponent } from './list-event-modal/list-event-modal.component';
import { BigscreenDaysComponent } from './bigscreen-days/bigscreen-days.component';
import { SmallscreenDaysComponent } from './smallscreen-days/smallscreen-days.component';
import { CellHeaderComponent } from './cell-header/cell-header.component';
import { CellBodyComponent } from './cell-body/cell-body.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MonthYearPickerComponent,
    AddEditEventModalComponent,
    ListEventModalComponent,
    BigscreenDaysComponent,
    SmallscreenDaysComponent,
    CellHeaderComponent,
    CellBodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
