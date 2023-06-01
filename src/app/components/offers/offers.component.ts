import { Component, OnInit } from '@angular/core';
import { IngatlanModel } from 'src/app/models/ingatlan.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  displayedColumns: string[] = ["kategoriaNev" ,"leiras", "hirdetesDatuma", "tehermentes", "kepUrl"]
  datasource: IngatlanModel[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadData();

  }

  loadData(): void{
        this.apiService.getAll().subscribe({
      next: result => this.datasource = result,
      error: err => console.log(err)
    })
  }

}
