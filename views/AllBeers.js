import React from "react";
import {View, Image, ScrollView} from 'react-native';
import HeaderBeer from "../components/HeaderBeer";
import {Container, H1, H2, H3, Text, Header, Content, Card, CardItem} from "native-base";
import axios from "axios";
import {Link} from "react-router-native";


export default class AllBeers extends React.Component{


  constructor(props){
    super(props);

    this.state = {
      beers: [],
    }
  }

  async componentDidMount(){
    let beers = await axios.get('https://ironbeer-api.herokuapp.com/beers/all');
    beers = beers.data;
    this.setState({beers});
  }


  render(){

    let beersHTML = this.state.beers.map(beer => (
      <Link key={beer._id} to={`/single-beer/${beer._id}`}>
        <Card  style={{flexDirection: 'row', marginBottom: 10, marginTop: 10, minHeight: 180, padding: 10}}>
          <View style={{flex: 1}}>
            <Image source={{uri: beer.image_url}} resizeMode={'contain'} style={{flex: 1}}/>
          </View>
          <CardItem cardBody style={{flex: 2, flexDirection:'column', alignItems: 'flexStart', justifyContent: 'space-between'}}>
            <H1>{beer.name}</H1>
            <H3>{beer.tagline}</H3>
            <Text>Created by : {beer.contributed_by}</Text>
          </CardItem>
        </Card>
      </Link>
    ));

    return (
      <Container>
        <HeaderBeer title={'All Beers'} to={'/'}/>
        <Content>
          {beersHTML}
        </Content>
      </Container>
    )
  }
}