import { Component } from "react";
import CarCard from "./CarCard";
import * as styles from './cars.module.css'

export default class Cars extends Component {
  state = {
    cars: [
      {
        module: "Volkswagen",
        price: 10500,
        img: "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__340.jpg",
      },
      {
        module: "rollsrois",
        price: 30400,
        img: "https://cdn.pixabay.com/photo/2016/09/06/13/37/maserati-gran-turismo-1649119__340.jpg",
      },
      {
        module: "formula",
        price: 25000,
        img: "https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467__340.jpg",
      },
    ],
  };
  render() {
    return (
      <div>
        <div>
          {this.state.cars.map((car, i) => {
            return <CarCard key={i} car={car} />;
          })}
        </div>
      </div>
    );
  }
}
