import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Rental } from 'src/app/models/rental';
import { User } from 'src/app/models/user';
import { RentalService } from 'src/app/Services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals:Rental[];
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getAllRentals();
  }

  getAllRentals(){
    this.rentalService.getRentals().subscribe((response)=>{
      this.rentals=response.data;
    })
  }

}
