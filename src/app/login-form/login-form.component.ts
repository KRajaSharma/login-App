import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../services/login.service';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user = {userName: '', password: ''};
  user1 : User;
  errorMessage : string;
  constructor(private activeModal : NgbActiveModal, private loginService :LoginService) { }

  ngOnInit() {
  }

  submitForm(){
   this.loginService.postLogin(this.user).subscribe((res)=>{this.demo(res);});
    //this.userReturned.subscribe((res)=>{this.user1= res});
    //console.log(this.user1);
   // this.activeModal.close();

  }

  demo(res : User){

    if(res == null){
      this.errorMessage = "Invalid Login"; 
      console.log("Invalid Login");
    }
    this.user1 = res;
    
    console.log(this.user1);
    
  }
}
