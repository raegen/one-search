import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule, MatDividerModule, MatRadioModule } from '@angular/material';
import { StateService } from 'shared/state.service';
import { SearchInputModule } from './search-input/search-input.module';
import { ResultsModule } from './search-results/search-results.module';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [
      CommonModule,
      SearchRoutingModule,
      ResultsModule,
      SearchInputModule,
      MatDividerModule,
      MatCardModule,
      MatRadioModule
    ],
  providers: [StateService]
})
export class SearchModule { }
