import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChessPage } from './chess.page';

describe('ChessPage', () => {
  let component: ChessPage;
  let fixture: ComponentFixture<ChessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
