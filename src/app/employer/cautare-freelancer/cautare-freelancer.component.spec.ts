import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CautareFreelancerComponent } from './cautare-freelancer.component';

describe('CautareFreelancerComponent', () => {
  let component: CautareFreelancerComponent;
  let fixture: ComponentFixture<CautareFreelancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CautareFreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CautareFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
