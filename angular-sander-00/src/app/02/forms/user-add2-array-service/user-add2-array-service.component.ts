import {Component, OnInit} from '@angular/core';
import {UsersArrayService} from '../../../01/services/users-array.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-user-add2-array-service',
    templateUrl: './user-add2-array-service.component.html',
    styleUrls: ['./user-add2-array-service.component.css']
})
export class UserAdd2ArrayServiceComponent implements OnInit {
    isFormVisible = false;

    constructor(private us: UsersArrayService) {
    }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        console.log('form', {
            form : form,
            component : this
        });
        this.us.add(
            form.controls.userName.value,
            form.controls.login.value,
            form.controls.pass.value
        );
    }

    showFormAdd() {
        this.isFormVisible = true;
    }
    hideFormAdd() {
        this.isFormVisible = false;
    }
    isFormValid(form : NgForm){
        return form.valid
            && form.controls.pass && form.controls.passConfirm
            && form.controls.pass.value == form.controls.passConfirm.value;
    }
}
