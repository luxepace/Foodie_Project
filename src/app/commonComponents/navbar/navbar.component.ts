import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userName: string = "username";
  userRole: string = "user";
  isLoggedIn: boolean = true;
  imageLink: string = 'https://sun9-1.userapi.com/impg/qyF_MClJP-zxY_enVyzwhJiFhc7WDwwwoPG6Kg/D5wwElZ7244.jpg?size=1440x2160&quality=95&sign=a70457483c67be3ed2f689becfceeb46&type=album';
  constructor() { }

  ngOnInit() {
  }

  toggleLogin()
  {

  }

  logout()
  {

  }

  isAdmin()
  {
    if (this.userRole === "admin"){
      return true;
    }
    else{
      return false;
    }
  }
}
