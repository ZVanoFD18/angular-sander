import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-users-randomapi-form-filters',
    templateUrl: './form-filters.component.html',
    styleUrls: ['./form-filters.component.css']
})
export class FormFiltersComponent implements OnInit {
    formFilters: FormGroup;
    @Output() notifySubmit: EventEmitter<Object> = new EventEmitter<string>();

    constructor() {
        this.formFilters = new FormGroup({
            countRows: new FormControl('10', [
                Validators.min(1),
                Validators.max(20)
            ])
        });
    }

    ngOnInit() {
    }

    onSubmit() {
        const values = {
            countRows : this.formFilters.get('countRows').value
        };
        this.notifySubmit.emit(values);
    }
}
