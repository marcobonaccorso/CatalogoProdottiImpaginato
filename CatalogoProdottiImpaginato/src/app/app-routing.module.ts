import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountPageComponent } from './count-page/count-page.component';
import { PaginaPrincipaleComponent } from './pagina-principale/pagina-principale.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  {path: 'PaginaPrincipale', component: PaginaPrincipaleComponent},
  {path: 'SearchPage', component: SearchPageComponent},
  { path: 'CountPage', component: CountPageComponent},
  { path: '', redirectTo: '/PaginaPrincipale', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
