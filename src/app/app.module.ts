import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StateService } from 'shared/state.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SearchModule,
        SettingsModule,
        NoopAnimationsModule,
        MatToolbarModule,
        MatButtonModule
    ],
    providers: [StateService],
    bootstrap: [AppComponent]
})
export class AppModule { }
