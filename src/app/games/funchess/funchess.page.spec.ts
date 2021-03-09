import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FunchessPage } from './funchess.page';

describe('FunchessPage', () => {
  let component: FunchessPage;
  let fixture: ComponentFixture<FunchessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunchessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FunchessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
