import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { JsonpInterceptor } from '@angular/common/http';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id: number;
  emailInbox = new Array();
  constructor(private service: MailService, private toastr: ToastrService , private route: Router) {
    this.getAll();
   }

  user;
  ngOnInit() {
    if (sessionStorage.getItem('userData') === null) {
      this.toastr.error('Login First');
      this.route.navigate(['/login']);
    } else {
      this.user = JSON.parse(sessionStorage.getItem('userData'));
      console.log(this.user);
      this.id = this.user.id;
    }
  }
  logout() {
    sessionStorage.removeItem('userData');
    this.service.isUser = true;
    this.route.navigate(['/login']);
  }
  getAll() {
    this.service.getAllInbox().subscribe( resp => {
      console.log(resp);
      for(let val of resp.mailBean) {
        val.to_id = this.id;
        console.log(resp.mailBean.to_id);
        if(val.status != "deleted")
        {
          this.emailInbox.push(val);
        }
      }
      console.log(this.emailInbox);
    });
  }
  deleteData(mail) {
    console.log(mail);
    this.service.deleteMail(mail).subscribe( resp => {
      if ( resp !== null) {
        this.toastr.success('Mail Deleted');
      } else {
        this.toastr.error('Failed to Delete');
      }
    });
  }
}
