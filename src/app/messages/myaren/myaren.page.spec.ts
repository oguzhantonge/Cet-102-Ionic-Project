import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyarenPage } from './myaren.page';

describe('MyarenPage', () => {
  let component: MyarenPage;
  let fixture: ComponentFixture<MyarenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyarenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyarenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
