import { Component, OnInit } from '@angular/core';
declare const butter: any;
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	ngOnInit() {
		butter.init({
			wrapperId: 'inertiaScroller',
			wrapperDamper: 0.05,
		});
	}
}
