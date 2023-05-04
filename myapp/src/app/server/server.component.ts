// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-server',
//   templateUrl: './server.component.html',
//   styleUrls: ['./server.component.css']
// })
// export class ServerComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

//   serverId:number = 1;
//   serverName: string = 'QAserver';
//   serverStatus: string = 'offline';
//   isServerEnabled: boolean = false;
//   serverDescription: string = 'Init description';

//   getServerStatus() {
//     return this.serverStatus;
//   }


//   onPowerButtonClick() {
//      if(this.serverStatus == 'offline') {
//       this.serverStatus = 'online';
//      } else if (this.serverStatus == 'online') {
//       this.serverStatus = 'offline';
//      }
//   }

//   getPowerButtonLabel() {
//     if(this.serverStatus == 'offline') {
//      return 'On';
//     } else if (this.serverStatus == 'online') {
//      return 'Off';
//     }
//  }

//  onUpdateSeverName(event:any) {
//  this.serverName  = event.target.value;
   
//  }

//  getServerColour() {
//   return this.serverStatus == 'online' ? 'green' : 'tomato';
//  }

//  getServerClass() {
//   return this.serverStatus == 'online' ? 'btn-success' : 'btn-warning';
//  }
// }
