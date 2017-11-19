import React, { Component } from "react";
import { connect } from "react-redux";

import "./Budget.css";

class Budget extends Component {
  render() {
    const { profit, marketExpanse, farmExpanse, deliveryExpanse } = this.props;
    const summ = profit - marketExpanse - farmExpanse - deliveryExpanse;

    return (
      <div className="budget block">
        <h1>Бюджет</h1>
        <div>
          Всего получено денег: <b className="counter positive">{profit}</b>
        </div>
        <div>
          Расходы продавцов:{" "}
          <b className="counter negative">{-marketExpanse}</b>
        </div>
        <div>
          Расходы на ферме: <b className="counter negative">{-farmExpanse}</b>
        </div>
        <div>
          Расходы на доставку:{" "}
          <b className="counter negative">{-deliveryExpanse}</b>
        </div>
        <div>
          Итого:{" "}
          <b className={"counter " + (summ < 0 ? "negative" : "positive")}>
            {summ}
          </b>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { profit, marketExpanse, farmExpanse, deliveryExpanse } = state.budget;

  return {
    profit,
    marketExpanse,
    farmExpanse,
    deliveryExpanse
  };
};

export default connect(mapStateToProps)(Budget);
