import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {ClockComponent} from "./clock.component";
import {ContactListComponent} from "./contactList.component";
import {ContactService} from "./contact.service";

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        ClockComponent,
        ContactListComponent,
    ],
    providers: [
        ContactService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
