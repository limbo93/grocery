import { Component, OnInit } from '@angular/core';
import { User } from '../core/security/user.model';
import { AuthService } from '../core/security/auth.service';


@Component({
    selector: 'main',
    templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

    user: User = {};

    constructor(public authService: AuthService) {

    }

    ngOnInit(): void {
        this.authService.user$.subscribe(user => {
            this.user = user;
            if(user && !user.photoURL){
                this.user.photoURL="/assets/default-image.png";
            }
        });
    }
}