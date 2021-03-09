import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettinPage } from './settin.page';

describe('SettinPage', () => {
  let component: SettinPage;
  let fixture: ComponentFixture<SettinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
