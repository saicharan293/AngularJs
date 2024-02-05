import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {

  //? for property binding [] and also string interpolation {{}}
  allowNewServer:boolean=false
  constructor(){
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);
  }

  //? event binding: by clicking on the button, the event changes the output
  serverCreationStatus:string='No server was created, yet!'
  serverName='test server';
  serverCreated=false;

  //? array of servers creation
  servers=['test 1','test 2']

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='Server is created, now ! and server name is '+this.serverName;
  }

  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
