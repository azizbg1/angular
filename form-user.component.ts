import { Component } from '@angular/core';
import{NgForm} from '@angular/forms';
import { User } from 'src/app/core/user';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
//import{User} from '/forms';


@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent {
  //user : User= new User();

 // add(f: NgForm){
  //  console.log(f)
    //console.log()
    constructor(private userService:UserService,private router:Router){}
  user: User = new User();
  add(f: NgForm) {
    
    console.log(f.value);
    console.log(this.user)
    //this.user.idCustomer = 11;

    this.user.accountCategory = "Customer";
    this.userService.addUser(this.user).subscribe({
      next: () => this.router.navigate(['user/listUsers']),
    });
  }
  }


