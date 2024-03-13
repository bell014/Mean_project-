import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

products:any;
    
constructor(private data :DataService ) {

}

ngOnInit( ):void{
 
this.data.getall().subscribe(
  (res) => {
  
    this.products=res;
    
  },
  err => console.log('error')
)
}
}