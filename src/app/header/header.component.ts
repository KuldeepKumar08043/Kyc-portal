import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SalesServiceService } from '../sales-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router, private salesService: SalesServiceService, private _activateRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  logout(){
    this._router.navigate(['/login']);
  }

}
