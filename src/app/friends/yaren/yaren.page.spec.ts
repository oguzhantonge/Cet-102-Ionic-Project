import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YarenPage } from './yaren.page';

describe('YarenPage', () => {
  let component: YarenPage;
  let fixture: ComponentFixture<YarenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YarenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YarenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
