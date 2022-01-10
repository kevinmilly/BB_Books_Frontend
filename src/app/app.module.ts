import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { metaReducers, reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { TransactionEffects } from './store/effects/transaction.effects';
import { TransactionComponent } from './transactions/components/transaction/transaction.component';
import { AddTransactionComponent } from './transactions/components/add-transaction/add-transaction.component';
import { ReportComponent } from './reports/components/report/report.component';


@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    AddTransactionComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([TransactionEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
