import React from "react";
import {View, Image, StyleSheet} from "react-native";
import {Container, H1, H2, H3, Content, Text} from "native-base";
import axios from 'axios';
import HeaderBeer from "../components/HeaderBeer";

export default class SingleBeer extends React.Component{


  constructor(props){
    super(props);

    this.state = {};
  }

  getBeerId(){
    return this.props.match.params.id
  }

  async componentDidMount(){

    let data;
    if(this.props.isRandom){
      data = await axios.get(`https://ironbeer-api.herokuapp.com/beers/random`);
      data = data.data[0];
    } else {
      data = await axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${this.getBeerId()}`);
      data = data.data;
    }
    this.setState(data);
  }

  render(){

    return (
      <Container>
        <HeaderBeer title={this.state.name} to={  this.props.isRandom ? '/' : '/beers'}/>

        <Content>

          <View style={styles.imgContainer}>
            <Image source={{uri: this.state.image_url}} style={{flex: 1}} resizeMode={'contain'}/>
          </View>

          <View style={styles.titles}>
            <H1>{this.state.name}</H1>
            <H2>{this.state.attenuation_level}</H2>
          </View>

          <View style={styles.titles}>
            <H3>{this.state.tagline}</H3>
            <Text>{this.state.first_brewed}</Text>
          </View>

          <Text style={styles.descText}>{this.state.description}</Text>

        </Content>
      </Container>
    )
  }

}


const styles = StyleSheet.create({
  imgContainer: {height: 300, width:"40%", marginTop: 20, marginBottom: 20, marginLeft: 'auto', marginRight: 'auto'},
  titles: {flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20},
  descText: {marginLeft: 20, marginRight: 20, marginTop: 30}
});
