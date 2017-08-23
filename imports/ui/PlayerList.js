import React from 'react';
import FlipMove from 'react-flip-move';
import propTypes from 'prop-types';
import Player from './Player';

export default class PlayerList extends React.Component {
  renderPlayers(){
      if (this.props.players.length === 0) {
        return <div className="item">
          <p className="item__message">Add a player to start</p>
        </div>
      } else {
        return this.props.players.map((player) => {
          return <Player key={player._id} player={player}/>;
        });
      }
  }

  render(){
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
            {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
};

// Setup props types. player should be a required object
PlayerList.propTypes = {
  players: propTypes.array.isRequired
};
