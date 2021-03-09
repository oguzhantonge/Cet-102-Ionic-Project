import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelmanPage } from './selman.page';

describe('SelmanPage', () => {
  let component: SelmanPage;
  let fixture: ComponentFixture<SelmanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelmanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelmanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
