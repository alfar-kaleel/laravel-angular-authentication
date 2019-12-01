import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){

    
   return this.http.post('http://127.0.0.1:8000',this.form).subscribe(


    data => console.log(data),
    error => console.log(error)

   );




   
  
  }

  public form = {

  email : null,
  password : null


  };

}
