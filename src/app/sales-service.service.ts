import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/Rx'; 

@Injectable({
  providedIn: 'root'
})
export class SalesServiceService {

  constructor( private _http:HttpClient ) { }

  public salesList: Array<any> = [
    {
      id:1,
      name: "Sales team",
      salesArr: [
        {id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
        {id: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
        {id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
        {id: 4, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
        {id: 5, name: 'Helium', weight: 4.0026, symbol: 'He'},
        {id: 6, name: 'Lithium', weight: 6.941, symbol: 'Li'},
        {id: 7, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
        {id: 8, name: 'Helium', weight: 4.0026, symbol: 'He'},
        {id: 9, name: 'Lithium', weight: 6.941, symbol: 'Li'},
       ]
    },
    {
      id:2,
      name: "Reports",
      salesArr: [
        {id: 1, name: 'Boron', weight: 1.0079, symbol: 'B'},
        {id: 2, name: 'Beryllium', weight: 4.0026, symbol: 'Br'},
        {id: 3, name: 'Lithium', weight: 9.0122, symbol: 'Li'},
        {id: 4, name: 'Boron', weight: 1.0079, symbol: 'B'}
        // {id: 5, name: 'Beryllium', weight: 4.0026, symbol: 'Br'},
        // {id: 6, name: 'Lithium', weight: 9.0122, symbol: 'Li'},
       ]
    }
   ] 

  getAllProduct(){  
    return this.salesList;  
  }  
  fetchProductById(id:string){ 
    return this.salesList.filter(t=>t.id == id);
  }  
}
