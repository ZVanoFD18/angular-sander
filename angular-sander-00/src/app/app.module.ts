import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {Myrouting} from './myrouting';
import {MenuComponent} from './menu/menu.component';
import {HomeComponent} from './home/home.component';
import {ListComponent as UserListComponent} from './users/list/list.component';
import {InterpolationComponent} from './00/interpolation/interpolation.component';
import {UsersArrayService} from './01/services/users-array.service';
import {UserAddNgForm} from './02/forms/user-add-ngform/user-add-ngform.component';
import {UserAddFormGroupComponent} from './02/forms/user-add-form-group/user-add-form-group.component';
import {UsersRandomapiService} from './01/services/users-randomapi.service';
import {ListComponent as HttpClientUsersList} from './30/HttpClient/list/list.component';
import { FormFiltersComponent } from './30/HttpClient/form-filters/form-filters.component';
import { PageComponent } from './30/HttpClient/page/page.component';
import { LoadmaskComponent } from './30/HttpClient/loadmask/loadmask.component';

const routes = Myrouting.getRoutes();

@NgModule({
    declarations: [
        AppComponent,
        InterpolationComponent,
        MenuComponent,
        HomeComponent,
        UserListComponent,
        UserAddNgForm,
        UserAddFormGroupComponent,
        HttpClientUsersList,
        FormFiltersComponent,
        PageComponent,
        LoadmaskComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        UsersArrayService,
        UsersRandomapiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
