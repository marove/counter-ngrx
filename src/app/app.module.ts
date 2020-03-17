import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ChildComponent } from './counter/child/child.component';
import { GrandchildComponent } from './counter/grandchild/grandchild.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { counterReducer } from './counter/counter.reducer';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandchildComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({counter: counterReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
