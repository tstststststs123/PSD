import { Component, OnInit } from '@angular/core';

import { FormApplication } from '../formApplication';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-guest-registration',
  templateUrl: './guest-registration.component.html',
  styleUrls: ['./guest-registration.component.css']
})

export class GuestRegistrationComponent implements OnInit {

  constructor(private http: HttpClient) { }

  model = new FormApplication('','','','',new Date());

  public hikers: any[] = [];
 

  hills = ['Kinabalu', 'mountain2',
            'mountain 3', 'mountain4'];

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8093/api/hiker').subscribe(data => {
      this.hikers = data;
    });
  }

  // ngOnChange(): void {
  //   this.http.get<any>('http://localhost:8093/api/hiker').subscribe(data => {
  //     this.hikers = data;
  //   });
  // }

  onSubmit() { 
    console.log("TESTTTTTTT"); 
    // this.http.post<any>('http://localhost:8093/api/hiker', { "name": "Kean", "identityNo": "123123", "contactNo": "012-34567899", "date": "12-11-2022", "hillName": "Gasing Hill" },
    // {headers:{ 'Access-Control-Allow-Origin':'*'}}).subscribe(data => {
    // })

    this.http.post<any>('http://localhost:8093/api/hiker', { "name": this.model.name, "identityNo": this.model.ic, "contactNo": this.model.contact, "date": "16-11-2022", "hillName": this.model.hillName },
    {headers:{ 'Access-Control-Allow-Origin':'*'}}).subscribe(data => {
      this.http.get<any>('http://localhost:8093/api/hiker').subscribe(data => {
      this.hikers = data;
    });
    })
  }

}
