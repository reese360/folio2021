import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
	@ViewChild('menuOverlay') menuOverlay!: ElementRef;
	menuOpen: boolean = false;

	constructor(private renderer: Renderer2) {}

	ngOnInit(): void {}

	toggleMenu(): void {
		this.menuOpen = !this.menuOpen;
		if (this.menuOpen) {
			this.renderer.addClass(this.menuOverlay.nativeElement, 'overlay-open');
		} else {
			this.renderer.removeClass(this.menuOverlay.nativeElement, 'overlay-open');
		}
	}
}
