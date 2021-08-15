import { ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { SearchFlightComponent } from './search-flight.component';

// Core modules
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

// Material Modules
import {MatSnackBarModule} from '@angular/material/snack-bar';

describe('SearchFlightComponent', () => {
  let component: SearchFlightComponent;
  let fixture: ComponentFixture<SearchFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSnackBarModule
      ],
      declarations: [ SearchFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
