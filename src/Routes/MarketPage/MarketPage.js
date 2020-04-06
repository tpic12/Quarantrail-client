import React, { Component } from "react";
import { Link ,Redirect} from "react-router-dom";
import PersonContext from "../../Context/PersonContext";
import StatusBar from "../../Components/StatusBar/StatusBar";
import Day from "../../Components/Day/Day";
import Stock from "../../Components/Stock/Stock";
import Music from "../../Components/Music/Music";
import Store from "../../Components/Store/Store";
import Curveball from "../../Components/Curveball.js/Curveball";
import Character from "../../Components/Character/Character";
import Song from "../../Sound/feelsgood.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MarketPage.css";

export default class MarketPage extends Component {
  static contextType = PersonContext;

  constructor(props) {
    super(props);
    this.state = {
      lose: false,
      shopping:false
    };
  }

  checkIfYadied = () => {
    if (this.context.starter.health >= 100) {
      this.context.setDeath("you caught the disease gg");
      this.setState({ lose: true });
    } else if (this.context.starter.boredom >= 100) {
      this.context.setDeath("you literally died of boredom");
      this.setState({ lose: true });
    } else if (this.context.starter.food <= 0) {
      this.context.setDeath(
        "you ran out of food had to go home and got the disease during the trip"
      );
      this.setState({ lose: true });
    } else if (this.context.starter.toiletpaper <= 0) {
      this.context.setDeath(
        "you ran out of toilet paper you have been stuck in the bathroom for days"
      );
      this.setState({ lose: true });
    }
  };

  handleShop = () => {
    this.setState({ shopping: !this.state.shopping });
  };

  updateLocation = () => {
    this.context.updateLocation("home");
  };

  render() {
    this.checkIfYadied();
    if (this.state.lose === true) {
      this.setState({lose:false});
      return <Redirect to="/end" />;
    }
    let disabled;
    if (this.context.renderCurve) {
      disabled = true;
    } else {
      disabled = false;
    }
    const { shopping } = this.state;
    return (
      <section className="marketPage gameSetting">
        <div className="top">
          <StatusBar />
          <Day />
        </div>
        <Character />
        <Stock />
        <div className="map">
          <Link to="/">
            <button disabled={disabled} onClick={this.updateLocation}>
              <FontAwesomeIcon icon="home" />
            </button>
          </Link>
        </div>
        {this.context.renderCurve && <Curveball />}
        <div className="cart">
          <button
            disabled={disabled || this.context.buyOnce}
            onClick={this.handleShop}
          >
            <FontAwesomeIcon icon="shopping-cart" />
          </button>
        </div>
        <div className="store-section">{shopping && <Store />}</div>
        <Music song={Song} />
      </section>
    );
  }
}
