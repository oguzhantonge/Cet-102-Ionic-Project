import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MmustafaPage } from './mmustafa.page';

describe('MmustafaPage', () => {
  let component: MmustafaPage;
  let fixture: ComponentFixture<MmustafaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmustafaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MmustafaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
