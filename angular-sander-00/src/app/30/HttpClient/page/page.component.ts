import {Component, OnInit} from '@angular/core';
import {UsersRandomapiService} from '../../../01/services/users-randomapi.service';

@Component({
    selector: 'app-users-randomapi-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
    private users = [];
    private isLoadind = false;

    constructor(private us: UsersRandomapiService) {
    }

    ngOnInit() {
    }

    onSearch(params) {
        this.users = [];
        const searchParams = {
            results: params.countRows
        };
        this.isLoadind = true;
        this.us.getUsers(searchParams).subscribe((json) => {
            this.isLoadind = false;
            json.results.forEach((user) => {
                this.users.push({
                    name: [user.name.title + '.', user.name.first, user.name.last].join(' '),
                    login: user.login.username,
                    email: user.email
                });
            });
        });
    }
}
