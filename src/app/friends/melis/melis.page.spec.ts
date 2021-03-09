import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MelisPage } from './melis.page';

describe('MelisPage', () => {
  let component: MelisPage;
  let fixture: ComponentFixture<MelisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MelisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
