import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import CardContainer from "./components/CardContainer";

import "./App.css";

const initialState = {
  friends,
  clicked: false,
  score: 0,
};
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = initialState;





 

    shuffle = (id) => {
      console.log(friends[id - 1].clicked);
      if (!friends[id - 1].clicked) {
        friends[id - 1].clicked = true;
        this.setState({
          gameState: "Correct!",
          score: this.state.score + 1,
          friends: this.state.friends.sort(function (a, b) {
            return Math.random();
          })
        })
      
    } else {let newScore =0;
      this.setState({
        score: newScore,
        gameState: "Game Over!"
      });
     let newArr = friends;
    for ( var i=0;i<newArr.length;i++){
          newArr[i].clicked = false;
      }
      this.setState({friends: newArr})
      }
  }
    
  







  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper>   
        <Title
        score={this.state.score}
        topScore={this.state.topScore}
        gameState={this.state.gameState}
        ></Title>
    <CardContainer>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            shuffle={this.shuffle}
            increment={this.increment}
            score={this.score}
          />
        ))}
       </CardContainer>
      </Wrapper>
    );
  }
}

export default App;
