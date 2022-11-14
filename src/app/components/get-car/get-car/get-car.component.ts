import { Component, OnInit } from '@angular/core';
import {CarsService} from "../../../services/cars.service";
import {Car} from "../../../models/Cars.interface";

@Component({
  selector: 'app-get-car',
  templateUrl: './get-car.component.html',
  styleUrls: ['./get-car.component.css']
})
export class GetCarComponent implements OnInit {

  constructor(private carsService: CarsService) {}

  car : Array<Car> | undefined;
  serialNumber = 0;
  errorMessage!: string;

  ngOnInit() {
    this.carsService.getAllCars().subscribe(
      result => {
        this.car = [];
        this.car = result;
      });
  }

  getCarById(id: any): any {
    if (id === null || id === undefined || id === '0' || id === '') {
      this.carsService.getAllCars().subscribe(
        result => {
          this.car = [];
          this.car = result;
          return;
        },
        error => {
          this.car = [];
          this.errorMessage = `Car with id: ${id} does not exist`;
        });
    } else {
      this.carsService.getCarById(id).subscribe(
        result => {
          this.car = [];
          this.car?.push(result);
        },
        error => {
          this.car = [];
          this.errorMessage = `Car with id: ${id} does not exist`;
        });
    }

  }

  deleteCarBySerialNumber(serialNumber: number) {
    this.carsService.deleteCarBySerialNumber(serialNumber).subscribe(
      result => {
        location.reload();
      }
    );

  }

}
