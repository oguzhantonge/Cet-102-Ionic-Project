import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TermsofPage } from './termsof.page';

describe('TermsofPage', () => {
  let component: TermsofPage;
  let fixture: ComponentFixture<TermsofPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsofPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TermsofPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
