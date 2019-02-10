import {Component, Input, OnInit} from '@angular/core';
import {UsersRandomapiService} from '../../../01/services/users-randomapi.service';

@Component({
    selector: 'app-users-randomapi-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    @Input() users = [];

    constructor(private us: UsersRandomapiService) {
    }

    ngOnInit() {
    }

}
