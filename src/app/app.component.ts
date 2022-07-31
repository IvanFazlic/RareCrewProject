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
//NOVO NOVO NOVO NOVO NOVO NOVO NOVO NOVO NOVO NOVO NOVO NOVO NOVO NOVO NOVO NOVO
  this.httpClient.get<any>('https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==').subscribe(
    //responce je array koji ima id, empName ...
    (    response : { Id: number, EmployeeName: string,EntryNotes:string,StarTimeUtc:Date,EndTimeUtc:Date }[])=>{
    //za svaki pojedinacni responce proveri da li employes(employes.every) sadrzi trenutni responce
      response.forEach(element => {
        //ako ne postoji EmployeeName tj. ako se ne podudaraju, dodaj element 
          if(this.employes.every(x=>x.EmployeeName!=element.EmployeeName)){
            this.employes.push(element)
          }
        });
      }
    );
  }
}

