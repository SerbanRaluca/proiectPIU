import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {Route, Router, ActivatedRoute, Routes, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
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
        path: path,
        label: data.label,
        icon: data.icon
      }));
  }

  isLinkActive(rla: RouterLinkActive): boolean {
    const routerLink = rla.linksWithHrefs.first;
    
    return this.router.isActive(routerLink.urlTree, false);
  }
}
