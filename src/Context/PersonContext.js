import React, { Component } from "react";

const PersonContext = React.createContext({
  starter: {},
  error: null,
  name: "",
  character: null,
  day: 0,
  dailyActivities: 2,
  activityTracker: {},
  location: "home",
  dead: "",
  curveball: false,
  renderCurve: false,
  feedTreat: false,
  washHands: false,
  buyOnce: false,
  renderPhone: false,
  TV: false,
  renderFeedback: false,
  increaseRate: {},
  setIncrease: () => {},
  updateFeedback: () => {},
  updatePhone: () => {},
  updateBuy: () => {},
  updateCurve: () => {},
  updateRenderCurve: () => {},
  setDeath: () => {},
  setName: () => {},
  setCharacter: () => {},
  setPersonInfo: () => {},
  setError: () => {},
  clearError: () => {},
  addToHealth: () => {},
  addToFood: () => {},
  addToToilet: () => {},
  incrementDay: () => {},
  addToFoodandToilet: () => {},
  addToBoredom: () => {},
  updateLocation: () => {},
  resetDay: () => {},
  setFeedTreat: () => {},
  setWash: () => {},
  clearActivites: () => {},
  updateActivityTracker: () => {}
});

export default PersonContext;

export class PersonProvider extends Component {
  state = {
    starter: {},
    error: null,
    name: "",
    character: null,
    day: 0,
    dailyActivities: 2,
    activityTracker: {},
    location: "home",
    dead: "",
    curveball: false,
    renderCurve: false,
    feedTreat: false,
    washHands: false,
    buyOnce: false,
    renderPhone: false,
    TV: false,
    renderFeedback: false,
    increaseRate: {}
  };

  setIncrease = rate => {
    this.setState({ increaseRate: rate });
  };

  updateFeedback = bool => {
    this.setState({ renderFeedback: bool });
  };

  updatePhone = bool => {
    this.setState({ renderPhone: bool });
  };

  updateBuy = bool => {
    this.setState({ buyOnce: bool });
  };

  setDeath = death => {
    this.setState({ dead: death });
  };

  setName = user => {
    this.setState({ name: user });
  };

  setCharacter = character => {
    this.setState({ character });
  };

  setPersonInfo = info => {
    if(info.health <0){
      info={...info,health:0}
    }
    if(info.boredom <0){
      info={...info,boredom:0}
    }
    this.setState({ starter: info });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setWash = bool => {
    this.setState({
      washHands: bool
    });
  };

  setFeedTreat = bool => {
    this.setState({
      feedTreat: bool
    });
  };

  addToHealth = health => {
    let newHealth = this.state.starter.health;
    if (health > 0 && newHealth === 100) {
      return;
    }
    if (health < 0 && newHealth === 0) {
      return;
    }
    newHealth += health;
    if (newHealth < 0) {
      newHealth = 0;
    }
    this.setState({
      starter: {
        ...this.state.starter,
        health: newHealth
      }
    });
  };

  addToBoredom = value => {
    let newBoredom = this.state.starter.boredom;
    if (value > 0 && newBoredom === 100) {
      return;
    }
    if (value < 0 && newBoredom === 0) {
      return;
    }
    newBoredom += value;
    if (newBoredom < 0) {
      newBoredom = 0;
    }
    this.setState({
      starter: {
        ...this.state.starter,
        boredom: newBoredom
      }
    });
  };

  addToFood = foods => {
    let newerFood = this.state.starter.food;

    newerFood += foods;

    this.setState({
      starter: {
        ...this.state.starter,
        food: newerFood
      }
    });
  };

  addToToilet = toilet => {
    let newToilet = this.state.starter.toiletpaper;
    newToilet += toilet;
    this.setState({
      starter: {
        ...this.state.starter,
        toiletpaper: newToilet
      }
    });
  };

  addToFoodandToilet = (f, t) => {
    let F = parseInt(f);
    let T = parseInt(t);
    let nT = this.state.starter.toiletpaper;
    let nF = this.state.starter.food;
    nT += T;
    nF += F;
    this.setState({
      starter: {
        ...this.state.starter,
        toiletpaper: nT,
        food: nF
      }
    });
  };
  turnTV = bool => {
    this.setState({
      TV: bool
    });
  };

  incrementDay = () => {
    let newday = this.state.day;
    newday += 1;
    this.setState({
      day: newday
    });
  };

  resetDay = () => {
    let restartday = 0;
    let newstarter = {};
    this.setState({
      day: restartday,
      starter: newstarter,
      dailyActivities: 2,
      renderFeedback: false
    });
  };

  incrementActivity = () => {
    let newCount = this.state.dailyActivities;
    newCount -= 1;
    this.setState({
      dailyActivities: newCount
    });
  };

  clearActivites = () => {
    this.setState({
      dailyActivities: 2
    });
  };

  updateActivityTracker = obj => {
    this.setState({
      activityTracker: { ...this.state.activityTracker, ...obj }
    });
  };

  updateLocation = place => {
    this.setState({
      location: place
    });
  };

  updateCurve = bool => {
    this.setState({
      curveball: bool
    });
  };

  updateRenderCurve = bool => {
    this.setState({
      renderCurve: bool
    });
  };

  render() {
    const value = {
      starter: this.state.starter,
      error: this.state.error,
      name: this.state.name,
      character: this.state.character,
      dailyActivities: this.state.dailyActivities,
      activityTracker: this.state.activityTracker,
      location: this.state.location,
      day: this.state.day,
      dead: this.state.dead,
      curveball: this.state.curveball,
      renderCurve: this.state.renderCurve,
      feedTreat: this.state.feedTreat,
      washHands: this.state.washHands,
      buyOnce: this.state.buyOnce,
      renderPhone: this.state.renderPhone,
      TV: this.state.TV,
      renderFeedback: this.state.renderFeedback,
      increaseRate: this.state.increaseRate,
      setIncrease: this.setIncrease,
      updateFeedback: this.updateFeedback,
      updatePhone: this.updatePhone,
      updateBuy: this.updateBuy,
      updateCurve: this.updateCurve,
      updateRenderCurve: this.updateRenderCurve,
      incrementActivity: this.incrementActivity,
      setDeath: this.setDeath,
      setName: this.setName,
      setCharacter: this.setCharacter,
      setPersonInfo: this.setPersonInfo,
      setError: this.setError,
      clearError: this.clearError,
      addToFoodandToilet: this.addToFoodandToilet,
      addToHealth: this.addToHealth,
      addToFood: this.addToFood,
      addToToilet: this.addToToilet,
      incrementDay: this.incrementDay,
      addToBoredom: this.addToBoredom,
      updateLocation: this.updateLocation,
      resetDay: this.resetDay,
      setWash: this.setWash,
      setFeedTreat: this.setFeedTreat,
      clearActivites: this.clearActivites,
      updateActivityTracker: this.updateActivityTracker,
      turnTV: this.turnTV
    };

    return (
      <PersonContext.Provider value={value}>
        {this.props.children}
      </PersonContext.Provider>
    );
  }
}
