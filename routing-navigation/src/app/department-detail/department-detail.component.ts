import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{departmentId}}</h3>

    <p>
      <button (click)="goPrevious()">Previous</button>&nbsp;
      <button (click)="goNext()">Next</button>
    </p>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  // this methode is call once if go and return this will never call twice
  ngOnInit(): void {
    // reading rout parameter using ActivatedRoute navigation service
    // snapshot dont work when we navigate to a compoent and go back or next
  //  const paramId = this.route.snapshot.paramMap.get('id');
  //  let id = 0;
  //   if(paramId) id = parseInt(paramId);
  //   this.departmentId = id;

    this.route.paramMap.subscribe((params: ParamMap) => {
      const paramId = params.get('id');
      let id = 0;
      if(paramId) id = parseInt(paramId);
      this.departmentId = id;

    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }
  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

}
