import { Component } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // due to hierarchical dep injection you don't need to provide AccountsService, if it is injected it will create a new instance
  // providers: [LoggingService, AccountsService]
  // providers: [LoggingService] (Now in AppModule | available everywhere now)
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountService: AccountsService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert(`New status: ${status}`)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
