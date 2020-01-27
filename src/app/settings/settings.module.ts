import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule, MatSelectModule } from '@angular/material';
import { StateService } from 'shared/state.service';
import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [SettingsComponent],
  exports: [SettingsComponent],
  imports: [CommonModule, MatCardModule, MatSelectModule],
  providers: [StateService]
})
export class SettingsModule {}
