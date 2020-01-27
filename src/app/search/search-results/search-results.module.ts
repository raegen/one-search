import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StateService } from 'shared/state.service';
import { BingSearchResultsComponent, GoogleSearchResultsComponent, SearchResultsComponent } from './search-results.component';


@NgModule({
  declarations: [SearchResultsComponent, GoogleSearchResultsComponent, BingSearchResultsComponent],
  exports: [SearchResultsComponent, GoogleSearchResultsComponent, BingSearchResultsComponent],
  imports: [CommonModule],
  providers: [StateService]
})
export class ResultsModule { }
