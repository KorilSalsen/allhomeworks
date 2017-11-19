import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./Market.css";
import * as marketActions from "../../actions/marketActions";
import Order from "../Order";

let id = 0;
export const vegetables = [
  "Капуста",
  "Редиска",
  "Огурцы",
  "Морковь",
  "Горох",
  "Баклажан",
  "Тыква",
  "Чеснок",
  "Лук",
  "Перец",
  "Картофель",
  "Редька"
];

const getId = () => {
  id += 1;
  return id;
};

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};

export class Market extends Component {
  createOrder = () => {
    this.props.actions.createOrder(getNewOrder());
  };

  moveOrderToFarm = e => {
    const { actions, orders } = this.props;
    const id = e.target.getAttribute("data-id");

    if (id !== null) {
      const order = orders.filter(order => order.id === +id)[0];
      actions.moveOrderToFarm(order);
    } else {
      actions.moveOrderToFarm(orders[orders.length - 1]);
    }
  };

  render() {
    const orders = this.props.orders.map(order => (
      <li key={+order.createdAt}>
        <Order order={order} id={order.id} onClick={this.moveOrderToFarm} />
      </li>
    ));

    return (
      <div className="market block">
        <h1>Новые заказы в магазине</h1>
        <button className="btn success" onClick={this.createOrder}>
          <span className="plus">+</span> Создать заказ
        </button>
        <button
          className="btn primary move"
          disabled={!orders.length}
          onClick={this.moveOrderToFarm}
        >
          Отправить заказ на ферму
        </button>
        {orders.length ? <ul className="order-list">{orders}</ul> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.market.orders
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(marketActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Market);
