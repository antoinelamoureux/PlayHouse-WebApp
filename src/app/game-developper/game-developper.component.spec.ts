import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDevelopperComponent } from './game-developper.component';

describe('GameDevelopperComponent', () => {
  let component: GameDevelopperComponent;
  let fixture: ComponentFixture<GameDevelopperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDevelopperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDevelopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
