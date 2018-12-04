import React from "react";
import {View, Text} from 'react-native';
import HeaderBeer from "../components/HeaderBeer";
import {Container} from "native-base";

export default class NewBeer extends React.Component{

  render(){
    return (
      <Container>
        <HeaderBeer title={'New Beer'}/>
        <Text>This is New Beer</Text>
      </Container>
    )
  }
}