import { Component } from '@angular/core';

import '../../../css/styles.scss';
import '../../../css/mixins.scss';
import '../../../css/globals.scss';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {
	title = 'Angular Empty';
}