import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MustafaPage } from './mustafa.page';

describe('MustafaPage', () => {
  let component: MustafaPage;
  let fixture: ComponentFixture<MustafaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MustafaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MustafaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
