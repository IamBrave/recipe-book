import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Not yet';
  serverName = '';
  serverCreated = false;
  servers = ['Test 1', 'Test 2'];

  constructor() {
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000);
  }

  ngOnInit(): void {
  }

  createServer() {
    this.serverCreationStatus = this.serverName + ' Created';
    this.servers.push(this.serverName);
    this.serverName = '';
    this.serverCreated = true;
    this.allowNewServer = false;
  }

  onServerNameEnter($event: Event) {
    // this.serverName = (<HTMLInputElement> event.target).value;

    if (this.serverName !== '') {
      this.allowNewServer = true;
    } else {
      this.allowNewServer = false;
    }
  }

}
