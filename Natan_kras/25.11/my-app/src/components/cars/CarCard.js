import { Component } from 'react'
import * as styles from './carCard.module.css'


export default class carCard extends Component {
    render() {
        return (
            <div className={styles.carWrapper}>
                <img className={styles.carImg} src={this.props.car.img} alt="" />         
            </div>
        )
    }
}
