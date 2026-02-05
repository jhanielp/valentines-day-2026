import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass} from '@angular/common';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [NgClass],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
    @Input() message: string = 'NO';
    @Input() btnClass: string = '';
    @Input() scale: number = 1;
    @Output() buttonClick = new EventEmitter<void>();

    onClick() {
        this.buttonClick.emit();
    }
}
