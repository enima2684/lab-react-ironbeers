import React from "react";
import { Container, Header, Title, Button, Icon, Left, Right, Body } from "native-base";
import {Link} from 'react-router-native';

export default class HeaderBeer extends React.Component{


  render(){
    return (
       <Container>
        <Header noShadow>
          <Left>
            <Button transparent>
              <Link to={'/'}>
                <Icon name="ios-arrow-back" />
              </Link>
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right></Right>
        </Header>
      </Container>
    )
  }

}