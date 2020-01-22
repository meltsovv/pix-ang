import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login:boolean = false;
  registr:boolean = false;
  constructor() { }
  openRegistr(){
    this.registr = true
    this.login = false
    document.getElementById("blur").setAttribute('style', 'filter:blur(5px)');

    
  }
  openLogin(){
    this.login = true
    this.registr = false
    document.getElementById("blur").setAttribute('style', 'filter:blur(5px)');
    
  }
  closePopup(){
    this.login = false
    this.registr = false
    document.getElementById("blur").setAttribute('style', 'filter:none');
  }
  ngOnInit() {
    
  }

}
