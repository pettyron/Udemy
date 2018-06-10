import { Component, OnChanges, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  // ngOnChanges() {
    // Called before any other lifecycle hook after a bound input property changes.
    // Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
  // }
  ngOnInit() {
    // Called once the component is initialized.
  }
  // ngDoCheck() {
    // Called every time that the input properties of a component or a directive are checked. (Executes on every check)
    // Use it to extend change detection by performing a custom check.
    // Add 'implements DoCheck' to the class.
  // }
  // ngAfterContentInit() {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class.
  // }
  // ngAfterContentChecked() {
    // Called after every check of the component's or directive's content.
    // Add 'implements AfterContentChecked' to the class.
  // }
  // ngAfterViewInit() {
    // Called after ngAfterContentInit when the component's view, and child views, has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
  // }
  // ngAfterViewChecked() {
    // Called after every check of the component's view. Applies to components only.
    // Add 'implements AfterViewChecked' to the class.
  // }
  // ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
  // }

  // It is better to not manipulate the DOM this way. Should access the DOM through interpolation, property binding and etc.
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
