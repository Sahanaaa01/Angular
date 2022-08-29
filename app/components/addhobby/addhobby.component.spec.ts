import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhobbyComponent } from './addhobby.component';

describe('AddhobbyComponent', () => {
  let component: AddhobbyComponent;
  let fixture: ComponentFixture<AddhobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddhobbyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddhobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
