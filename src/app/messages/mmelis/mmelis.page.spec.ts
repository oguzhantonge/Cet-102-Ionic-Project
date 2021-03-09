import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MmelisPage } from './mmelis.page';

describe('MmelisPage', () => {
  let component: MmelisPage;
  let fixture: ComponentFixture<MmelisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmelisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MmelisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
