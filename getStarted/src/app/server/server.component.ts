import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles:[`
  .online{
    color:white
  }
  .offline{
    color:yellow
  }
  `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  access: string = 'Access approved';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    // this.serverStatus='offline'
  }
  getApproval() {
    return this.access;
  }
  getColor() {
    return (this.serverStatus == 'online' ? 'green' : 'red');
  }
}
