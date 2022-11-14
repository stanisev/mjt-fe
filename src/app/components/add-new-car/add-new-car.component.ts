import { Component, OnInit } from '@angular/core';
import {CarsService} from "../../services/cars.service";
import {Car} from "../../models/Cars.interface";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.css']
})
export class AddNewCarComponent implements OnInit {

  constructor(private carsService: CarsService) {
  }

  ngOnInit(): void {
  }

  carForm = new FormGroup({
    brand: new FormControl(''),
    model: new FormControl(''),
    year: new FormControl(''),
    engine: new FormControl(''),
  });


  onSubmit() {
    const car: Car = {
      serialNumber: 0,
      brand: this.carForm.value.brand as string,
      model: this.carForm.value.model as string,
      year:  this.carForm.value.year as string,
      engine: this.carForm.value.engine as string
    };

    this.carsService.addNewCar(car).subscribe(
      result => {
        location.reload();
      }
    );
  }

}
