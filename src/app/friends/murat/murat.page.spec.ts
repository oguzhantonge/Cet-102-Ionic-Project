import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MuratPage } from './murat.page';

describe('MuratPage', () => {
  let component: MuratPage;
  let fixture: ComponentFixture<MuratPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuratPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MuratPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
