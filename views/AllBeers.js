import React from "react";
import {View, Text} from 'react-native';
import HeaderBeer from "../components/HeaderBeer";
import {Container} from "native-base";

export default class AllBeers extends React.Component{
  
  render(){
    return (
      <Container>
        <HeaderBeer title={'All Beers'}/>
        <Text>This is All Beers</Text>
      </Container>
    )
  }
}