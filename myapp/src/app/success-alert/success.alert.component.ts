import { Component } from "@angular/core";


//inbuild template given instead of having external css or html
@Component({
    selector: 'success-alert',
    template: '<p>This is a success</p><button class="btn btn-success">Completed</button>',
     styles: [
        `
        p {
            padding:10px;
            background-color: orangered;
            border:2px solid red;
        }
        `,
     ],
})
export class SuccessAlertComponent {}