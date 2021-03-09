import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BatuPage } from './batu.page';

describe('BatuPage', () => {
  let component: BatuPage;
  let fixture: ComponentFixture<BatuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BatuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
