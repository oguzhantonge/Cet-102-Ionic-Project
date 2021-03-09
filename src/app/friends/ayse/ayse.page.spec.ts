import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AysePage } from './ayse.page';

describe('AysePage', () => {
  let component: AysePage;
  let fixture: ComponentFixture<AysePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AysePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AysePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
