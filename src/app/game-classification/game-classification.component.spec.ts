import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameClassificationComponent } from './game-classification.component';

describe('GameClassificationComponent', () => {
  let component: GameClassificationComponent;
  let fixture: ComponentFixture<GameClassificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameClassificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
