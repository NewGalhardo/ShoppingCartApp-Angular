import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signinForm!: FormGroup;

  constructor(private service: AuthService, private router: Router){

  }

  ngOnInit(){
    this.signinForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }

  onSubmit(){
    const user = new User(
      this.signinForm.value.name, 
      this.signinForm.value.email, 
      this.signinForm.value.password
      );

    this.service.signIn(user).subscribe({
      next: (response) => {       
        this.service.persistToken(response.token);

        console.log(response); 
        this.router.navigate(['products']);
      }
    });            
  }
}
