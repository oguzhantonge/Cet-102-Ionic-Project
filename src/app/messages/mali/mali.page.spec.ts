import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaliPage } from './mali.page';

describe('MaliPage', () => {
  let component: MaliPage;
  let fixture: ComponentFixture<MaliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaliPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
