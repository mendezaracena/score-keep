import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players, calculatePlayerPosition} from './../imports/api/players';
import App from './../imports/ui/App';


Meteor.startup(() => {
  Tracker.autorun(() => {
    // Fetch converts to an array
    // find({get all}, {sort})
    let players =  Players.find({},{sort:{score:-1, name:1}}).fetch();
    let positionedPlayers = calculatePlayerPosition(players);
    let title = 'Score Keep';
    ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.getElementById('app'));
  });
});
