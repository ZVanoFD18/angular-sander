import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {UsersArrayService} from "../../../01/services/users-array.service";

@Component({
    selector: 'app-user-add-form-group',
    templateUrl: './user-add-form-group.component.html',
    styleUrls: ['./user-add-form-group.component.css']
})
export class UserAddFormGroupComponent implements OnInit {
    public formAdd: FormGroup;

    constructor(private us: UsersArrayService) {
        this.formAdd = new FormGroup({
            userName: new FormControl('', Validators.required),
            userLogin: new FormControl('', Validators.required),
            userPass: new FormControl('', Validators.required),
            userPassConfirm: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
    }

    onSubmit() {
        const form = this.formAdd;
        this.us.add(
            form.controls.userName.value,
            form.controls.userLogin.value,
            form.controls.userPass.value
        );
    }
}
