import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Funmath101Page } from './funmath101.page';

describe('Funmath101Page', () => {
  let component: Funmath101Page;
  let fixture: ComponentFixture<Funmath101Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Funmath101Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Funmath101Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
