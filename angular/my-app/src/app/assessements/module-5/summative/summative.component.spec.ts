import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummativeComponent } from './summative.component';

describe('SummativeComponent', () => {
  let component: SummativeComponent;
  let fixture: ComponentFixture<SummativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummativeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
