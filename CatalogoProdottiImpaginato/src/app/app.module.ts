import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipaleComponent } from './pagina-principale/pagina-principale.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { CountPageComponent } from './count-page/count-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipaleComponent,
    SearchPageComponent,
    CountPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
