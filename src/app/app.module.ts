import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataViewComponent } from './data-view/data-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, DataViewComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
