import {Component, OnInit} from '@angular/core';
import {UsersArrayService} from '../../01/services/users-array.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    private users;
    constructor(private service: UsersArrayService) {
        this.users = service.getAll();
    }

    ngOnInit() {
    }

}
