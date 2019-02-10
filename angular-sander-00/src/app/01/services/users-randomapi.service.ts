import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
interface IUser {
    results: object ;
}
@Injectable({
    providedIn: 'root'
})
export class UsersRandomapiService {
    static apiUri = 'https://randomuser.me/api';

    constructor(private httpClient: HttpClient) {
    }

    /**
     *
     * @param filters
     * @returns {Observable<Object>}
     */
    public getUsers(filters) {
        const usersObservable = this.httpClient.get<IUser>(UsersRandomapiService.apiUri, {
            params: filters
        });
        return usersObservable;
    }
}
