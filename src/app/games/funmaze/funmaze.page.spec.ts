import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FunmazePage } from './funmaze.page';

describe('FunmazePage', () => {
  let component: FunmazePage;
  let fixture: ComponentFixture<FunmazePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunmazePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FunmazePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
