import React, { Component } from "react";
import * as styles from "./movieCard.module.css";

export default class MovieCard extends Component {
  render() {
    return (
      <div>
        <img className={styles.movieImg} src={this.props.movie.img} alt="" />
      </div>
    );
  }
}
