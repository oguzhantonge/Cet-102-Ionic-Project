import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColorgatePage } from './colorgate.page';

describe('ColorgatePage', () => {
  let component: ColorgatePage;
  let fixture: ComponentFixture<ColorgatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorgatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorgatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
