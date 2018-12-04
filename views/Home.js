import React from "react";
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body , H1} from 'native-base';
import {Link} from "react-router-native";

export class Home extends React.Component{


  render(){



    return (
      <Container>

        <ScrollView>
          <Link to={'/beers'}>
            <Card style={styles.CardItem}>
              <CardItem>
                <Body>
                  <Image source={require('../assets/images/photo-1.png')} resizeMode={'cover'} style={{height: 200, width:"100%"}}/>
                </Body>
              </CardItem>
              <CardItem style={styles.CardItemTitle}>
                <H1 style={styles.title}>All beers</H1>
                <Text style={styles.textDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a nisi placerat, lobortis nibh et, scelerisque ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</Text>
              </CardItem>
            </Card>
          </Link>

          <Link to={'/random-beer'}>
            <Card style={styles.CardItem}>
              <CardItem>
                <Body>
                  <Image source={require('../assets/images/photo-2.png')} resizeMode={'cover'} style={{height: 200, width:"100%"}}/>
                </Body>
              </CardItem>
              <CardItem style={styles.CardItemTitle}>
                <H1 >Random Beer</H1>
                <Text style={styles.textDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a nisi placerat, lobortis nibh et, scelerisque ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. </Text>
              </CardItem>
            </Card>
          </Link>

          <Link to={'/new-beer'}>
            <Card style={styles.CardItem}>
              <CardItem>
                <Body>
                  <Image source={require('../assets/images/photo-3.png')} resizeMode={'cover'} style={{height: 200, width:"100%"}}/>
                </Body>
              </CardItem>
              <CardItem style={styles.CardItemTitle}>
                <H1>New Beer</H1>
                <Text style={styles.textDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a nisi placerat, lobortis nibh et, scelerisque ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</Text>
              </CardItem>
            </Card>
          </Link>
        </ScrollView>
      </Container>
      )
  }
}



const styles = StyleSheet.create({

  CardItemTitle:{
    flexDirection: "column",
    alignItems: "flex-start",
  },
  CardItem:{
    flex: 0
  },
  textDescription:{
    color: "#979797",
    fontSize: 14
  }
});