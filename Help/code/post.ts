import { OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { RunnerModel } from "src/app/models/runner.model";
import { ApiService } from "src/app/services/api.service";

class Component implements OnInit {

  public idFromRoute!: string;

  public categoryFromRoute!: string;

  public acceptTos = false;

  public errorMsg!: string;

    runner: RunnerModel = {
      id: 0,
      categoryId: 0,
      nev: "",
      igazHamis: false
  }

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idFromRoute = params["id"];
    });
    this.get();
  }

  get(): void {
    this.apiService.getByNumber(this.categoryFromRoute).subscribe({
      next: result => this.runner = result,
      error: err => console.log(err)
    })
  }

  send() {
    this.runner.categoryId = +this.idFromRoute;
    try {
      if (!this.runner.nev) {
        this.errorMsg = "Enter valid name!";
      }
      this.apiService.post(this.runner);
    } catch (error) {
      console.log(error);
    }

  }
}
