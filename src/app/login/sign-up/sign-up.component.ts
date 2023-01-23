import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  constructor(private service: AuthService, private router: Router, private formBuilder: FormBuilder){

  }

  ngOnInit(){
    // this.signupForm = new FormGroup({
    //   name: new FormControl(null),
    //   email: new FormControl(null),
    //   password: new FormControl(null)
    // });
  }

  signupForm = this.formBuilder.group({
    name: '',
    email: '',
    password: ''
  });

  onSubmit = () => {
    const user = new User(
      this.signupForm.value.name ?? '',
      this.signupForm.value.email ?? '',
      this.signupForm.value.password ?? ''
    );    

    this.service.signUp(user).subscribe((result) => {
        console.log(result);        
      });    

    this.router.navigate(['/signin']);
  }
}
