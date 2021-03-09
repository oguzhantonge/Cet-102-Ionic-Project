import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaysePage } from './mayse.page';

describe('MaysePage', () => {
  let component: MaysePage;
  let fixture: ComponentFixture<MaysePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaysePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaysePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
