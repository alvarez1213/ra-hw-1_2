import { Component } from "react";
import styles from "./shopItem.module.css";

export class ShopItem extends Component {
  render() {
    const {
      brand,
      title,
      description,
      descriptionFull,
      price,
      currency
    } = this.props.item;

    return (
      <div className={styles["main-content"]}>
        <h2>{brand}</h2>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div className={styles["description"]}>{descriptionFull}</div>
        <div className={styles["highlight-window"]}>
          <div className={styles["highlight-window"]}></div>
        </div>
        <div className={styles["divider"]}></div>
        <div className={styles["purchase-info"]}>
          <div className={styles["price"]}>{currency}{price}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
};
