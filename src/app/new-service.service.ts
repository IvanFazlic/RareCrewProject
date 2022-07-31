// import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http'
// import { Observable } from 'rxjs';

// export interface employeesData{
//   Id:number,
//   EmployeeName:string,
//   EntryNotes:string,
//   StarTimeUtc:Date,
//   EndTimeUtc: Date,
//   OverallTime:number
// }
// export interface employeData{
 
//   EmployeeName:string,
//   OverallTime:number
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class NewServiceService {
//   private url="https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==";
//   constructor(private http:HttpClient) { }
//   getData():Observable<employeesData[]>{
   
//     return this.http.get<employeesData[]>(this.url);
//   }

  
// }
