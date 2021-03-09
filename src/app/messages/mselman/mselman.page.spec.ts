import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MselmanPage } from './mselman.page';

describe('MselmanPage', () => {
  let component: MselmanPage;
  let fixture: ComponentFixture<MselmanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MselmanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MselmanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
