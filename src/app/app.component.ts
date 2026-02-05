import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ButtonComponent, CommonModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    index: number = 0;
    yesMessage: string = 'YES';
    scale: number = 1; // scala iniziale
    isApproved: boolean = false;

    noMessages: string[] = [
        'NO',
        'Are you sure?',
        'Really sure?',
        'Think about it again',
        'Come on…',
        'Don’t rush this',
        'You might regret it',
        'Trust me',
        'This is a good idea',
        'Just press YES',
        'Look how big YES is getting',
        'Still saying no?',
        'That’s kinda rude',
        'My feelings are hurt',
        'Okay, now you’re just playing',
        'Last chance… I swear',
        'Okay fine. But YES is still here',
    ];

    nextMessage() {
        // cambio messaggio
        if (this.index < this.noMessages.length - 1) this.index++;
        else this.index = 1;

        this.scale += 0.2;
    }

    yes() {
        this.isApproved = true;
    }
}
