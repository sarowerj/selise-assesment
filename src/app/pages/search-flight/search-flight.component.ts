import { Component, OnInit } from '@angular/core';

import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit {

  searchForm: FormGroup;
  defaultDepartureDate = new Date();
  defaultReturnDate = new Date();
  events: string[] = [];
  searching:boolean = false;

  airlinesInfo:any= false;

  constructor(
    public  fb: FormBuilder,
    private api:ApiService,
    private _snackBar: MatSnackBar
    ) {}

  ngOnInit(): void {

    /**
     * Initiate the form structure.
     */
    this.searchForm = this.fb.group({
      departureAirportCode:['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      arivalAirportCode:['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      departureDate:[this.defaultDepartureDate, Validators.required],
      returnDate:['',Validators.required]
    });
  }

  /**
   * @description To set start date of return date.
   * @param event datepicker change event
   */
  changeDepartureDate(event: MatDatepickerInputEvent<Date>) {
    this.defaultReturnDate = new Date(event.value);
  }

  get departureAirportCode() {
    return this.searchForm.get('departureAirportCode');
  }

  get arivalAirportCode() {
    return this.searchForm.get('arivalAirportCode');
  }

  get departureDate() {
    return this.searchForm.get('departureDate');
  }

  get returnDate(){
    return this.searchForm.get('returnDate');
  }

  /**
   * @description Call api to get results.
   */
  searchFlight(){
    if(this.searchForm.status === "VALID"){
      this.airlinesInfo = false;
      this.searching = true;
      // Provided api doesn't accept post request. That's why couldn't pass form data to the api. 
      // I used get request to fetch data from api. If i get the api specification, then i can do it. 
      // Post request should looks like below (commented Line 82-85)
      this.api.searchFlight().subscribe((response)=>{
        this.searching = false;
        this.airlinesInfo = response;
      })

      // this.api.searchFlightPost(this.searchForm.value).subscribe((response:any)=>{
      //   this.searching = false;
      //   this.airlinesInfo = response;
      // });
    }else{
      // Open error snackbar
      // this._snackBar.open('Please fill up form correctly','Dismiss',{duration:4000});
    }
  }

}
