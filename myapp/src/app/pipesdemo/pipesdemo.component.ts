import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesdemo',
  templateUrl: './pipesdemo.component.html',
  styleUrls: ['./pipesdemo.component.css']
})
export class PipesdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  servers  = [
    {
      serverSize: 'medium',
      name: 'Dbserver',
      status: 'stable',
      started: new Date('2022-02-20'),
    },

    {
      serverSize: 'large',
      name: 'Productionserver',
      status: 'stable',
      started: new Date('2023-04-12'),
    },

    {
      serverSize: 'small',
      name: 'Dev server',
      status: 'offline',
      started: new Date('2020-09-10'),
    },

    {
      serverSize: 'small',
      name: 'QA server',
      status: 'critical',
      started: new Date('2019-10-23'),
    },


  ];

  getStatusClass(server) {
    return {
      'list-group-item-success': server.status=== 'stable',
      'list-group-item-warning': server.status=== 'offline',
      'list-group-item-danger': server.status=== 'critical',
    };
  }

  filteredStatus ='';

}
