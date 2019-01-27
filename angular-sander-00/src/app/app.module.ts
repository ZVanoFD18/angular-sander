import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {InterpolationComponent} from './00/interpolation/interpolation.component';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';
import { ListComponent as UserListComponent} from './users/list/list.component';
import {UsersArrayService} from './01/services/users-array.service';

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
}];

@NgModule({
    declarations: [
        AppComponent,
        InterpolationComponent,
        MenuComponent,
        HomeComponent,
        UserListComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule
    ],
    providers: [
        UsersArrayService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
