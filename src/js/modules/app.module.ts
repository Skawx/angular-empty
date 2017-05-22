// Import Modules
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestModule } from './test.module';
// import { TestModule } from '@angular/test-module';

// Import Components
import { AppComponent } from '../components/app/app.component';

// RX extensions
import '../dependencies/rxjs-extension/rxjs-extensions';

@NgModule({
	imports: [BrowserModule, TestModule],
	declarations: [
			AppComponent
	],
	bootstrap: [AppComponent],
})

export class AppModule {
	constructor() {}
}