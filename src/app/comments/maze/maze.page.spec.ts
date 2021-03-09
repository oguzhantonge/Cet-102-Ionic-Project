import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MazePage } from './maze.page';

describe('MazePage', () => {
  let component: MazePage;
  let fixture: ComponentFixture<MazePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MazePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MazePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
