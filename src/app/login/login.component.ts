import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isNavbarCollapsed=true;
  constructor(private modalService : NgbModal) { }

  ngOnInit() {
  }


  open(){
    const modalRef = this.modalService.open(LoginFormComponent,{ centered: true });
    
  }
}
