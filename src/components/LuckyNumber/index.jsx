import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./LuckyNumber.module.scss";

export default class LuckyNumber extends Component {
    state = {
        luckyNumber: (Math.random() * 100).toFixed(this.props.zeros),
        counter: 0,
    };

    static defaultProps = {
        zeros: 0,
    };

    static propTypes = {
        zeros: PropTypes.number,
    };

    reroll = () => {
        this.setState((prev) => ({
            luckyNumber: (Math.random() * 100).toFixed(this.props.zeros),
            counter: ++prev.counter,
        }));
    };

    render() {
        return (
            <div>
                <h2 className={styles.caption}>Szczęśliwy numer na dziś to:</h2>
                <p className={styles.number} onClick={this.reroll}>
                    {this.state.luckyNumber}
                </p>
                <p>Przycisk kliknięto {this.state.counter} razy</p>
            </div>
        );
    }
}
