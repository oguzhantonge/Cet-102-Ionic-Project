import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Math101Page } from './math101.page';

describe('Math101Page', () => {
  let component: Math101Page;
  let fixture: ComponentFixture<Math101Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Math101Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Math101Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
