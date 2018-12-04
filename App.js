import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Switch } from "react-router-native";

import {Home} from "./views/Home.js";
import NewBeer from "./views/NewBeer.js";
import AllBeers from "./views/AllBeers.js";
import SingleBeer from "./views/SingleBeer";


export default class App extends React.Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return (
      <NativeRouter>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path='/beers' component={AllBeers}/>
          <Route path='/random-beer' component={(props) => <SingleBeer {...props} isRandom={true}/>}/>
          <Route path='/new-beer' component={NewBeer}/>
          <Route path='/single-beer/:id' component={SingleBeer}/>
        </Switch>

      </NativeRouter>
    );
  }
}