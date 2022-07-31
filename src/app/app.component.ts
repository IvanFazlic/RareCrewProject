import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';




export class employesData{
  constructor(
  public Id:number,
  public EmployeeName:string,
  public EntryNotes:string,
  public StarTimeUtc:Date,
  public EndTimeUtc: Date
  ){}}
export class employeData{
  constructor(
    public EmployeeName:string,
    public OVerallTime:number,
  ){}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  employes: employesData[] = [];
  tempEmploye: employesData | undefined;
  individualEmploye:employeData[] | undefined;
  constructor( private httpClient:HttpClient){}
ngOnInit(): void {
  this.getEmployes();
}
getEmployes(){
  this.httpClient.get<any>('https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==').subscribe(
    (    response: employesData[])=>{
      
    function groupBy(list:any, keyGetter:any,) {
      const map = new Map();
      list.forEach((item:any) => {
           const key = keyGetter(item);
           const collection = map.get(key);
           if (!collection) {
               map.set(key, [item]);
           } else {
               collection.push(item);
           }
      });
      return map;
  }
  let uniqueChars: any[] = [];
  this.employes.forEach((element) => {
      if (!uniqueChars.includes(element.EmployeeName)) {
          uniqueChars.push(element.EmployeeName);
      }
  });
console.warn(this.employes=uniqueChars);
  // const grouped = groupBy(response, (response: { EmployeeName: string; }) => response.EmployeeName);
  //    response.forEach(x=>{
  //    });
    }
  );
  
}
}

