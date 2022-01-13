import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { TransactionEffects } from './store/effects/transaction.effects';
import { TransactionComponent } from './transactions/components/transaction/transaction.component';
import { AddTransactionComponent } from './transactions/components/add-transaction/add-transaction.component';
import { ReportComponent } from './reports/components/report/report.component';
import { RegisterComponent } from './transactions/components/register/register.component';
import { FormComponent } from './shared/form/form.component';
import { GeneralCardComponent } from './shared/cards/general-card/general-card.component';
import { ModalCardComponent } from './shared/cards/modal-card/modal-card.component';
import { TableComponent } from './shared/table/table.component';
import { TabComponent } from './shared/tab/tab.component';


@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    AddTransactionComponent,
    ReportComponent,
    RegisterComponent,
    FormComponent,
    GeneralCardComponent,
    ModalCardComponent,
    TableComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([TransactionEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
