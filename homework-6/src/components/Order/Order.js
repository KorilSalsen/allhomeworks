import React, { Component } from "react";

import "./Order.css";

export default class Order extends Component {
  render() {
    const { order, onClick, id } = this.props;

    return (
      <div className="order">
        <h3 className="order-title">Название: {order.name}</h3>
        <div>
          Цена: <b>{order.price}</b>
        </div>
        <div>
          Создан: <b>{order.createdAt.toLocaleString()}</b>
        </div>
        {id && onClick ? (
          <div className="move-btn" onClick={onClick} data-id={id} />
        ) : null}
      </div>
    );
  }
}
