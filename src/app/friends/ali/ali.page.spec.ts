import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AliPage } from './ali.page';

describe('AliPage', () => {
  let component: AliPage;
  let fixture: ComponentFixture<AliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
