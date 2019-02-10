import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {InterpolationComponent} from './00/interpolation/interpolation.component';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {HomeComponent} from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListComponent as UserListComponent} from './users/list/list.component';
import {UsersArrayService} from './01/services/users-array.service';
import { UserAddNgForm } from './02/forms/user-add-ngform/user-add-ngform.component';
import { UserAddFormGroupComponent } from './02/forms/user-add-form-group/user-add-form-group.component';
import {UsersRandomapiService} from './01/services/users-randomapi.service';
import {Myrouting} from './myrouting';
const routes = Myrouting.getRoutes();
@NgModule({
    declarations: [
        AppComponent,
        InterpolationComponent,
        MenuComponent,
        HomeComponent,
        UserListComponent,
        UserAddNgForm,
        UserAddFormGroupComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        UsersArrayService,
        UsersRandomapiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
