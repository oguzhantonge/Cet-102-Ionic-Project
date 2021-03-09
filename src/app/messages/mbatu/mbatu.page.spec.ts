import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MbatuPage } from './mbatu.page';

describe('MbatuPage', () => {
  let component: MbatuPage;
  let fixture: ComponentFixture<MbatuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbatuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MbatuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
