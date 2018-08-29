import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReplayService } from './replay.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttptestService } from './httptest.service';
import { TestHttpInterceptor } from './interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
     {
       provide: HTTP_INTERCEPTORS,
       useClass: TestHttpInterceptor,
       multi: true
     },
    ReplayService, HttptestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
