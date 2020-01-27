import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { StateService } from 'shared/state.service';
import { SearchInputComponent } from './search-input.component';

@NgModule({
  declarations: [SearchInputComponent],
  exports: [SearchInputComponent],
  imports: [FormsModule, CommonModule, MatInputModule, MatFormFieldModule],
  providers: [StateService]
})
export class SearchInputModule {
}
