import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, PLATFORM_INITIALIZER, APP_BOOTSTRAP_LISTENER, ComponentRef } from '@angular/core';

import { AppComponent } from './app.component';
import { AppDataDependencyService } from './app-data-dependency.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppDataService } from './app-data.service';
import { TestHttpInterceptor } from './interceptor';
import { BooksModule } from '../lib/books/books.module';
import { FruitsModule } from '../lib/fruits/fruits.module';
import { BooksService } from '../lib/books/books.service';
import { AuthorsService } from '../lib/books/authors.service';
import { AppInitializers } from './app.initializers';
import { AppRoutingModule }     from './app-routing.module';
import { FruitsComponent } from '../lib/fruits/fruits.component';

export function setAppInitializerState(appInitializers: AppInitializers) {
  return () => appInitializers.setAppInitializerState();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BooksModule,
    FruitsModule,
    //AppRoutingModule,
  ],
  providers: [    
    // { provide: APP_BOOTSTRAP_LISTENER, useFactory: () => { console.log('--- APP_BOOTSTRAP_LISTENER: Platform initialized'); return (component: ComponentRef<any>) => {};}, multi: true },
    // AppInitializers, 
    // { provide: APP_INITIALIZER, useFactory: setAppInitializerState, deps: [AppInitializers], multi: true },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TestHttpInterceptor,
    //   multi: true
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('Bootstrap: AppModule constructor.');
  }
}
