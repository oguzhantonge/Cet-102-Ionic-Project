import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FunhomePage } from './funhome.page';

describe('FunhomePage', () => {
  let component: FunhomePage;
  let fixture: ComponentFixture<FunhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FunhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
