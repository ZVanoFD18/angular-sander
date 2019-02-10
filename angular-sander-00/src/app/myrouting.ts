import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ListComponent as UserListComponent} from "./users/list/list.component";
import {UserAddNgForm} from "./02/forms/user-add-ngform/user-add-ngform.component";
import {UserAddFormGroupComponent} from "./02/forms/user-add-form-group/user-add-form-group.component";
import {InterpolationComponent} from "./00/interpolation/interpolation.component";
import {PageComponent as HttpClientPage} from './30/HttpClient/page/page.component';

const routes: Routes = [{
    path: '', // 1. Указываем, что компонент "HomeComponent" должен отображаться если маршрут не найден (компонент по-умолчанию).
    component: HomeComponent  // Например, для "http://localhost:4200"
}, {
    path: 'home', // 2. Указываем, что  компонент "HomeComponent" должен отображаться также для "http://localhost:4200/home"
    component: HomeComponent
}, {
    path: '00/interpolation',
    component: InterpolationComponent
}, {
    path: '01/services/user-array-list',
    component: UserListComponent
}, {
    path: '02/forms/user-add-ngform',
    component: UserAddNgForm
}, {
    path: '02/forms/user-add-form-group',
    component: UserAddFormGroupComponent
}, {
    path: '30/http-client-page',
    component: HttpClientPage
}];

export class Myrouting {
    static getRoutes() {
        return routes;
    }
}
