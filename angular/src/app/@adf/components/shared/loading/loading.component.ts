import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
/*   loading: boolean; */

  constructor() {
/*     this.loading = true; */
  }
  ngOnInit() {
/*     setTimeout(() => {
      this.loading = false;
  }, 30000); */
  }

}

