import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuncologatePage } from './funcologate.page';

describe('FuncologatePage', () => {
  let component: FuncologatePage;
  let fixture: ComponentFixture<FuncologatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncologatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuncologatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
