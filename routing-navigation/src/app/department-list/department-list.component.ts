import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Department List
    </h3>
    <ul class="items">
      <li *ngFor="let department of departments"  (click)="onSelect(department)">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: [
  ]
})


export class DepartmentListComponent implements OnInit {

  departments : Array<{ id: number, name: string }> = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onSelect(department: { id: number; name: string}) {
     this.router.navigate(['/departments', department.id]);
    //  this.router.navigate([department.id], { relativeTo: this.route });
  }

}
