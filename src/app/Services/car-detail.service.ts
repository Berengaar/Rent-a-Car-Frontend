import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  
  apiUrl="https://localhost:44333/api"
  constructor(private httpClient:HttpClient) { }

  getAllCarsDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"/cars/getallcarsdetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarDetailsById(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"/cars/getcardetailsbyid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
}
