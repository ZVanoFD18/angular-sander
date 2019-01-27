import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UsersArrayService {
    private users = [{
        name: 'Иванов И.И.',
        sex: 'M'
    }, {
        name: 'Иванова М.И.',
        sex: 'F'
    }];

    constructor() {
    }

    getAll() {
        return this.users;
    }

    add(userName) {
        const newUser = {
            name: userName,
            sex: 'M'
        };
        this.users.push(newUser);
    }
}
