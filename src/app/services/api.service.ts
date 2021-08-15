import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {environment} from '../../environments/environment';
import {throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient:HttpClient
    ) { }

  /**
   * @description To collect flight schedule from api.
   * @returns HTTP response
   */
  public searchFlight(){
    return this.httpClient.get(environment.apiUrl+'flight');
  }

  /**
   * @description To search flight schedule using user's given input.
   * @param formData User's given input data
   * @returns HTTP Response.
   */
  public searchFlightPost(formData:object){
    return this.httpClient.post(environment.apiUrl+'flight',formData);
  }
}
