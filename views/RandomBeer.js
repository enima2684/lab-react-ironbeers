import React from "react";
import {View, Text} from 'react-native';
import HeaderBeer from "../components/HeaderBeer";
import {Container} from "native-base";

export default class RandomBeer extends React.Component{

  render(){
    return (
      <Container>
        <HeaderBeer title={'Random Beer'} to={'/'}/>
        <Text>This is RandomBeerr</Text>
      </Container>
    )
  }
}