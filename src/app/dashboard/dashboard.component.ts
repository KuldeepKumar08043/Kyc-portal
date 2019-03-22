import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SalesServiceService } from '../sales-service.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  [x: string]: any;
  public appDrawer: any;
  public salesId: number = 0;
  value:string="Watch";
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  
    constructor( private _router: Router, private salesService: SalesServiceService, private _activateRoute: ActivatedRoute ) { }
    salesObject = this.salesService.getAllProduct();
    dataSource = new MatTableDataSource<PeriodicElement>(this.salesObject[0].salesArr);
    // fetch template refrence attribute
    @ViewChild(MatPaginator) paginator: MatPaginator;
    
  ngOnInit() {
    let salesId;
    this._activateRoute.params.subscribe(res => {
      salesId = res.id;
     });      
     this.dataSource.paginator = this.paginator;
  } 

  onClicked(value:string){
    this.salesObject = this.salesService.fetchProductById(value);
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.salesObject[0].salesArr);
    this.dataSource.paginator = this.paginator;
   }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public closeNav() {
    this.appDrawer.close();
  }
  public openNav() {
    this.appDrawer.open();
  }
}
