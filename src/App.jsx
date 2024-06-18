import { Component } from "react";
import styles from "./App.module.scss";
import LuckyNumber from "./components/LuckyNumber";

export default class App extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1>React Playground</h1>
                <LuckyNumber />
                <LuckyNumber zeros={4} />
            </div>
        );
    }
}
