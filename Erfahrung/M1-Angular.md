coppy az site bootstrap
form:
https://getbootstrap.com/docs/4.3/components/forms/

1-
<input ..... [value]='property1InTs' (input)="method1($any($event.target).value)" >
ya:
    <input type="text" (input)="propSearch = ($any($event.target).value)" [value]="propSearch" placeholder="Search...">

2
-Ts:
class:
.......
property1InTs : String = "erste wert"

method1(voroodi : String){
    this.property1InTs = ....
}

3-
<small>{{input1}}</small>

4-
(change)="changecheck1()"
[prop2]="BuchstabeStatus"

    <label class="checkbox" for="">
        <input type="checkbox"  (change)="changecheck1()" [checked]="BuchstabeStatus"/>
        Buchschtabe erforderlich

      </label>

5-
submit btn
    <button class="button is-link is-fullwidth" [disabled]="(!BuchstabeStatus && !NumberStatus && !zeichenStatus) || passwordAnzahl<=0" (click)="clickfn()">Kennwort erstellen:</button>

6-
input--Anzeige zeigen---rusult
    <input class="input" *ngIf="password" type="text" [value]="password" (input)="changeFn($any($event.target).value)"/>
ya:
<small>{{input1}}</small>

7-
sakhte service
mirim dakhele yek module mesle "app"
# ng generate service Person
khodash tahesh ezafe mikonad mishavad Person.service

8-
import { HttpClient } from '@angular/common/http';

...

 constructor(private http: HttpClient) { }...........dependency Injection
    searchfn(){
    return this.http.get('http://localhost:8082/selectAll');
 }

 9-
 ------------------khandane service dar ngOnInit
 result : any;
 ....
  constructor(private service1: PersonService) { } ..........DI for Service

  ngOnInit(): void {
    this.service1.searchfn().subscribe((returnVal) => {
      console.log(returnVal)
      this.result = returnVal;
    })
  }

10-
khandane service ba btn:
  submitfn(event : any){
   this.service1.searchfn().subscribe((returnVal) => {
    console.log(returnVal)
    this.result = returnVal;
  })
   event.preventDefault();

  }

  11-
  hal kar ba result :


    <table class="ui celled striped table">
         <thead>
            <tr><th  colspan="12">
               Git Repository
             </th>
           </tr>
            <tr *ngIf="result">
               <th colspan="1">index</th>
               <th colspan="1">id</th>
               <th colspan="5">name</th>
               <th colspan="5">Family</th>
            </tr>
         </thead>
         <tbody>
            <tr *ngFor="let item of result;let i=index">
               <td colspan="1" class="collapsing" >{{i+1}}</td>
               <td colspan="1" class="collapsing">{{item.Id}}</td>
               <td colspan="5" class="collapsing">{{item.Name}}</td>
               <td colspan="5" class="collapsing">{{item.Family}}</td>
            </tr>
         </tbody>
      </table>
   



12- 
ba form:
 <form (submit)="submitfn($event)">  

    <input type="text" (input)="propSearch = ($any($event.target).value)" [value]="propSearch" placeholder="Search...">
    <i class="search icon"></i>
   </form>