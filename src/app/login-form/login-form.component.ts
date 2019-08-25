import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user = {username: '', password: ''}
  constructor(private activeModal : NgbActiveModal) { }

  ngOnInit() {
  }

  submitForm(){
    console.log(this.user);
    this.activeModal.close();
  }
}
