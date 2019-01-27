import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-interpolation',
    templateUrl: './interpolation.component.html',
    styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
    private someText = 'someText';
    private counter = 0;
    private selectedColor = 'black';

    constructor() {
    }

    ngOnInit() {
    }

    updateSomeText() {
        this.someText = 'someText, counter = ' + this.counter;
    }

    onClickCounterInc(event) {
        ++this.counter;
        this.updateSomeText();
    }

    onClickCounterDec(event) {
        --this.counter;
        this.updateSomeText();
    }

    onClickColorRandom(event) {
        const partRed = Math.floor(Math.random() * (256));
        const partGreen = Math.floor(Math.random() * (256));
        const partBlue = Math.floor(Math.random() * (256));
        const hexColor = '#' + partRed.toString(16) + partGreen.toString(16) + partBlue.toString(16);
        this.setSelectedColor(hexColor);
    }

    setSelectedColor(color) {
        this.selectedColor = color;
    }

    onInputSelectedColor(event) {
        this.setSelectedColor(event.target.value);
    }
}
