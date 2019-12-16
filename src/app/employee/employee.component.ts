import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Routes, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements AfterViewInit, OnInit {
  isViewInitialized = false;

  navLinks = [];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.navLinks = (
      this.route.routeConfig && this.route.routeConfig.children ?
      this.buildNavItems(this.route.routeConfig.children) :
      []
    );
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.changeDetector.detectChanges();
  }

  buildNavItems(routes: Routes) {
    return (routes)
      .filter(route => route.data)
      .map(({ path = '', data }) => ({
        path,
        label: data.label,
        icon: data.icon
      }));
  }

  isLinkActive(rla: RouterLinkActive): boolean {
    const routerLink = rla.linksWithHrefs.first;

    return this.router.isActive(routerLink.urlTree, false);
  }

  adaugaAnunt() {
    this.router.navigate(['candidat', 'anunt']);
  }

  cautaJob() {
    this.router.navigate(['candidat', 'cautare']);
  }


}
