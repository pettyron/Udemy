import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        // not a good practice to directly access elements
        this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    }
}
