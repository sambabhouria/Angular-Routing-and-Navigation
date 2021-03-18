import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{departmentId}}</h3>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId: string | null | undefined;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // reading rout parameter using ActivatedRoute navigation service
    let id = this.route.snapshot.paramMap.get('id') ;
    this.departmentId= id;
  }

}
