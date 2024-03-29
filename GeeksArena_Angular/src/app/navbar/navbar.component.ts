import { Component, OnInit, DoCheck } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck {

  isUser = true;
  showme:boolean = false;
  constructor(private service: MailService) { }

  ngOnInit() {
  }
 ngDoCheck() {
  this.isUser = this.service.isUser;
 }
 toogleTag(){
   this.showme = this.showme;
 }
}
