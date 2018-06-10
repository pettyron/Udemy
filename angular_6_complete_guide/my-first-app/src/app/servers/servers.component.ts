import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // html tag approach (recommended) | select by ID or PseudoClass doesn't work
  // selector: '.app-servers', // class approach (not recommended)
  // selector: '[app-servers]', // attribute approach (tag is preferred)
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = [
    'TestServer',
    'TestServer2'
  ];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}.`;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
