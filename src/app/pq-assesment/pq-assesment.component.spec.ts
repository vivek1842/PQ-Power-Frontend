import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqAssesmentComponent } from './pq-assesment.component';

describe('PqAssesmentComponent', () => {
  let component: PqAssesmentComponent;
  let fixture: ComponentFixture<PqAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PqAssesmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PqAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
