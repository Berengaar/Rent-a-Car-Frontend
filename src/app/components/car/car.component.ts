import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { BrandService } from 'src/app/Services/brand.service';
import { CarDetailService } from 'src/app/Services/car-detail.service';
import { CarService } from 'src/app/Services/car.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  brands:Brand[]=[];
  carImageBasePath = "https://localhost:44333/";
  carDetails:CarDetail[];
  dataLoaded = false;
  filterText="";
  filterBrand="";
  constructor(
    private carService: CarService,
    private cartService:CartService,
    private brandServive:BrandService,
    private carDetailService:CarDetailService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
        
      } 
      else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      }
      else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
 getBrands(){
   this.brandServive.getBrands().subscribe((response)=>{
     this.brands=response.data;
   })
 }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  addToCart(car:Car){
    console.log(car)
    if(car.carId===1){
      this.toastrService.error("Bu ??r??n eklenemez",car.brandName+" "+car.carName)
    }
    else{
    this.toastrService.success("Sepete eklendi",car.brandName+" "+car.carName)
    this.cartService.addToCart(car);
    }
  }

}
