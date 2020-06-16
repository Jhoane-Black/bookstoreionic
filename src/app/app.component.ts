import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  description = '';
  constructor(private http: HttpClient){}

  ngOnInit(){

    this.http.get("http://localhost:4200/titulo", {responseType: 'text'}).subscribe(
      (resp :any)=>{
      this.title = resp;
      }),
    (error:any)=>{
      console.log(error)
    }
    

    this.http.get("http://localhost:4200/descripcion", {responseType: 'text'}).subscribe((resp :any)=>{
      this.description = resp;
      }),
    
    (error:any)=>{
      console.log(error)
    }
  }
}

