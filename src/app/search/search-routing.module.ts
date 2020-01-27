import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Provider } from '../shared/provider';
import { BingSearchResultsComponent, GoogleSearchResultsComponent } from './search-results/search-results.component';
import { SearchComponent } from './search.component';

const routes: Routes = [
    {
      path: '', component: SearchComponent, children: [
        { path: 'google', component: GoogleSearchResultsComponent },
        { path: 'bing', component: BingSearchResultsComponent },
        { path: '**', pathMatch: 'full', redirectTo: Provider.bing }
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SearchRoutingModule { }
