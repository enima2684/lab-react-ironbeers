import React from "react";
import {View, Text} from 'react-native';
import HeaderBeer from "../components/HeaderBeer";
import { Container, Content, Form, Item, Input, Label, Textarea, Button} from 'native-base';
import {Redirect} from 'react-router-native';
import axios from 'axios';

export default class NewBeer extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      form: {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: '',
      },
      redirect: false
    };
  }

  onSubmitForm = async ()=> {
    try {
      await axios.post('https://ironbeer-api.herokuapp.com/beers/new', this.state.form);
      alert(`The beer ${this.state.form.name} was successfully added`);
      this.setState({redirect: true});

    } catch (err) {
      alert('An error occured while transmitting the beer ' + this.state.form.name);
    }
  };

  render(){

    if(this.state.redirect){
      return (<Redirect to={'/'}/>)
    }

    return (
      <Container>
        <HeaderBeer title={'New Beer'} to={'/'}/>
        <Content padder>
          <Form>

            <Item floatingLabel >
              <Label>Name</Label>
              <Input name={'name'}
                     onChangeText={name => this.setState({form: {...this.state.form, name}})}
                     value={this.state.form.name}/>
            </Item>

            <Item floatingLabel>
              <Label>Tagline</Label>
              <Input name={'tagline'}
                     onChangeText={tagline => this.setState({form: {...this.state.form, tagline}})}
                     value={this.state.form.tagline}/>
            </Item>

            <Item floatingLabel>
              <Label>Description</Label>
              <Input rowSpan={3} style={{width:'100%'}} name={'description'}
                        onChangeText={description => this.setState({form: {...this.state.form, description}})}
                        value={this.state.form.description}/>
            </Item>

            <Item floatingLabel>
              <Label>First Brewed</Label>
              <Input name={'first_brewed'}
                     onChangeText={first_brewed => this.setState({form: {...this.state.form, first_brewed}})}
                     value={this.state.form.first_brewed}/>
            </Item>

            <Item floatingLabel>
              <Label>Brewer Tips</Label>
              <Input name={'brewers_tips'}
                     onChangeText={brewers_tips => this.setState({form: {...this.state.form, brewers_tips}})}
                     value={this.state.form.brewers_tips}/>
            </Item>

            <Item floatingLabel>
              <Label>Attenuation Level</Label>
              <Input name={'attenuation_level'}
                     onChangeText={attenuation_level => this.setState({form: {...this.state.form, attenuation_level}})}
                     value={this.state.form.attenuation_level}/>
            </Item>

            <Item floatingLabel last>
              <Label>Contributed By</Label>
              <Input name={'contributed_by'}
                     onChangeText={contributed_by => this.setState({form: {...this.state.form, contributed_by}})}
                     value={this.state.form.contributed_by}/>
            </Item>


          </Form>

          <Button block style={{marginTop: 30}} onPress={this.onSubmitForm}>
            <Text style={{color: "#fff"}}>ADD NEW</Text>
          </Button>

        </Content>
      </Container>
    )
  }
}