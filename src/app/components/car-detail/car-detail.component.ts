import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/Services/car-detail.service';
import { CarImageService } from 'src/app/Services/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetails:CarDetail;
  carImages:CarImage[]=[];    
  dataLoaded=false;
  
  constructor(
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService,
    private carDetailService:CarDetailService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
       this.getCarDetailsByCarId(params["carId"]);
      }   
    }); 
  }

  getCarDetailsByCarId(carId:number){
    this.carDetailService.getCarDetailsById(carId).subscribe(response=>{
      this.carDetails=response.data[0];
      console.log(response.data);
      this.dataLoaded=true;
    })
  }

}
