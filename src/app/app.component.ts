import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
declare const butter: any;
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	@ViewChild('cursor') cursorBlock!: ElementRef;
	ngOnInit() {
		butter.init({
			wrapperId: 'inertiaScroll',
			wrapperDamper: 0.05,
		});
	}

	@HostListener('document:mousemove', ['$event']) onMouseMove(e: MouseEvent) {
		this.cursorBlock.nativeElement.style.left = `${e.clientX - 5}px`;
		this.cursorBlock.nativeElement.style.top = `${e.clientY - 5}px`;
	}
}
