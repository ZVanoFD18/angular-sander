import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
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
            pass: new FormGroup({
                userPass: new FormControl('', Validators.required),
                userPassConfirm: new FormControl('', [
                    Validators.required,
                    this.passConfirmValidator.bind(this)
                ])
            }, [
                globalPassValidator,
                this.passValidator
            ])
        });
    }

    ngOnInit() {
    }

    onSubmit() {
        const form = this.formAdd;
        this.us.add(
            form.controls.userName.value,
            form.controls.userLogin.value,
            form.get('pass').get('userPass').value
        );
    }

    fillTestData() {
        console.log('fillTestData/formAdd', this.formAdd);
        this.formAdd.patchValue({
            userName: 'Вася',
            userLogin: 'Vasya',
            pass: {
                userPass: 'Vasya',
                userPassConfirm: 'Vasya'
            }
        });
    }

    isValid = false;

    passValidator(g: FormGroup) {
        if (g.get('userPass').value === g.get('userPassConfirm').value) {
            return null;
        }
        return {
            mismatch: true
        }
    }

    passConfirmValidator(passConfirm: FormControl) {
        if (!this.formAdd) {
            return null;
        }
        if (this.formAdd.get('pass').get('userPass').value === this.formAdd.get('pass').get('userPassConfirm').value) {
            return null;
        }
        return {
            passConfirmNotSame: true
        }
    }

    /**
     *
     * @returns {boolean}
     */
    isPassConfirmValid() {
        //console.log('isPassConfirmValid/formAdd', this.formAdd);
        // @TODO: this.formGroup.get('name of you control').value
        // console.log('userName', this.formAdd.get('userName'));
        // console.log('userPass', this.formAdd.get('userPass'));
        // if (this.formAdd.controls.pass.controls.userPass.value !== this.formAdd.controls.pass.controls.userPassConfirm.value) {
        //     return false;
        // }
        return true;
    }

    isFormValid() {
        if (!this.formAdd.valid) {
            return false;
        }
        // if (!this.isPassConfirmValid()) {
        //     return false;
        // }
        return true;
    }
    get myField() {
        return this.formAdd.controls;
    }
}

const globalPassValidator: ValidatorFn = (g: FormGroup): ValidationErrors | null => {
    if (g.get('userPass').value === g.get('userPassConfirm').value) {
        return null;
    }
    return {
        mismatch: true
    }
};
