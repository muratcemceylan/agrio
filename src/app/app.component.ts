import { UserService } from './services/user/user.service';
import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService, private auth: AuthService){
    auth.user$.subscribe(user =>{
      if(user){
        userService.save(user);
      }
    });
  }
}
