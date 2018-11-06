import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MessageService } from 'primeng/components/common/messageservice';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { GrowlModule } from 'primeng/growl';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VendaListagemComponent } from './venda-listagem/venda-listagem.component';
import { VendaCadastroComponent } from './venda-cadastro/venda-cadastro.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VendaListagemComponent,
    VendaCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    DropdownModule,
    InputTextModule,
    CurrencyMaskModule,
    FormsModule,
    PanelModule,
    ButtonModule,
    GrowlModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
