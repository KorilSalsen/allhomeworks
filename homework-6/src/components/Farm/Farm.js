import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./Farm.css";
import Order from "../Order";
import * as farmAvtions from "../../actions/farmActions";

class Farm extends Component {
  moveOrderToCustomer = e => {
    const { actions, orders } = this.props;
    const id = e.target.getAttribute("data-id");

    if (id !== null) {
      const order = orders.filter(order => order.id === +id)[0];
      actions.moveOrderToCustomer(order);
    } else {
      actions.moveOrderToCustomer(orders[orders.length - 1]);
    }
  };

  render() {
    const orders = this.props.orders.map(order => (
      <li key={+order.createdAt}>
        <Order order={order} id={order.id} onClick={this.moveOrderToCustomer} />
      </li>
    ));

    return (
      <div className="farm block">
        <h1>Производство на ферме</h1>
        <button
          className="btn primary move"
          disabled={!orders.length}
          onClick={this.moveOrderToCustomer}
        >
          Отправить урожай клиенту
        </button>
        {orders.length ? <ul className="order-list">{orders}</ul> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.farm.orders
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(farmAvtions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
