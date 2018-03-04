import React, { Component } from "react";
import { render } from "react-dom";
import CardList from "./CardList";
import Form from "./Form";

const styles = {
  fontFamily: "sans-serif"
};

class App extends Component {
  state = {
    cards: [
      {
        name: "Abhi",
        avatar_url: "https://avatars3.githubusercontent.com/u/8515881?v=4",
        company: "Home"
      }
    ]
  };

  addNewCard = cardInfo => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };

  render() {
    return (
      <div style={styles}>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
