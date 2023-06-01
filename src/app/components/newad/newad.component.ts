import { NotExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/category.model';
import { IngatlanModel } from 'src/app/models/ingatlan.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-newad',
  templateUrl: './newad.component.html',
  styleUrls: ['./newad.component.css']
})
export class NewadComponent implements OnInit{

  categories: CategoryModel[] = []

  errorMsg = '';

  ingatlan: IngatlanModel = {
    id: 0,
    hirdetesDatuma: new Date().toISOString().substring(0,10),
    kategoriaId: 0,
    kepUrl: '',
    leiras: '',
    tehermentes: false
  }

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {

    this.loadAllCategories();
  }

  loadAllCategories(): void{
      this.apiService.getAllCategory().subscribe({
      next: result => this.categories = result,
      error: err => console.log(err)
    })
  }

    send() {
      this.apiService.post(this.ingatlan).subscribe({
        next: result =>  this.router.navigateByUrl('/offers'),
        error: err => this.errorMsg = err.message
      });

      console.log(this.ingatlan)
    }

  categorySelect(id: string) {
    this.ingatlan.kategoriaId = +id;
  }
}
