import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Switch } from "react-router-native";

import {Home} from "./views/Home.js";
import NewBeer from "./views/NewBeer.js";
import AllBeers from "./views/AllBeers.js";
import RandomBeer from "./views/RandomBeer.js";


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
          <Route path='/random-beer' component={RandomBeer}/>
          <Route path='/new-beer' component={NewBeer}/>
        </Switch>


      </NativeRouter>
    );
  }
}