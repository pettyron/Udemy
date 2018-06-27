import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('f') subscriberForm: NgForm;
  submitted = false;
  subscriptions = ['basic', 'advanced', 'pro'];
  subscriptionType = 'basic';
  formOutput: object;

  onSubmit() {
    this.submitted = true;
    this.formOutput = this.subscriberForm.value;
    this.subscriberForm.reset();
    console.log(this.subscriberForm);
  }
}
