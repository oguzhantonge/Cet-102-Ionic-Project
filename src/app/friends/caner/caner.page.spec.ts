import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CanerPage } from './caner.page';

describe('CanerPage', () => {
  let component: CanerPage;
  let fixture: ComponentFixture<CanerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CanerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
