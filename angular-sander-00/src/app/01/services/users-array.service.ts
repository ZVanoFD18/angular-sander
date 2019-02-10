import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UsersArrayService {
    private users: User[] = [];

    constructor() {
        let newUser: User;
        newUser = new User();
        newUser.name = 'Иванов И.И.';
        newUser.login = 'Ivanov';
        newUser.passHash = User.getHash(newUser.login);
        this.users.push(newUser);

        newUser = new User();
        newUser.name = 'Иванова М.И.';
        newUser.login = 'Ivanova';
        newUser.passHash = User.getHash(newUser.login);
        this.users.push(newUser);
    }

    getAll() {
        return this.users;
    }

    add(name: string, login: string, pass: string) {
        const newUser = new User();
        newUser.name = name;
        newUser.login = login;
        newUser.passHash = User.getHash(pass);
        this.users.push(newUser);
    }
}

export class User {
    public name: string;
    public login: string;
    public passHash: string;

    /**
     * Возвращает простейший хеш строки
     * @param {string} str
     * @returns {string}
     */
    static getHash(str: string = ''): string {
        let result = 0;
        for (let i = 0, len = str.length; i < len; i++) {
            result += str[i].charCodeAt(0);
        }
        let hashResult = result.toString(16);
        return hashResult;
    }
}
