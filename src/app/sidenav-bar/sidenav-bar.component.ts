import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from "@angular/router";
import { SalesServiceService } from '../sales-service.service';

@Component({
  selector: 'app-sidenav-bar',
  templateUrl: './sidenav-bar.component.html',
  styleUrls: ['./sidenav-bar.component.css']
})
export class SidenavBarComponent implements OnInit {
  @Input() result:string="";
  @Output() clicked=new EventEmitter<string>();
  public salesList: Array<any> = [];
  public selectedItem = "1";
  constructor( private saleService: SalesServiceService, private _route: Router ) { 
    this.salesList =  this.saleService.salesList;
  }  

  gotoProductDetails(currectUrl:string, id:string){
    this.selectedItem = id;
    this._route.navigate([currectUrl, {id}]);
    this.clicked.emit(id);
  }

  ngOnInit() {
  }

}
