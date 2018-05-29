import React , {Component} from 'react';
import {Container,Content,H2, Title,Text,Header, 
    Left,Body,Right,Icon, Button, Tabs, Tab, Card,CardItem,ListItem } from'native-base';
import { COLOR_PRIMARY, GRAY_TEXT } from '../../../commons/styles';

class Info extends Component {
    render(){
        return (
            <Container>
                <Header style={{backgroundColor:COLOR_PRIMARY}}>
                    <Left>
                        <Button
                        transparent
                        onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color:"white"}}>Information</Title>
                    </Body>
                </Header>
                <Content>
                    <Card>
                        <CardItem cardHeader>
                            <Title style={{color:COLOR_PRIMARY}}>Application</Title>
                        </CardItem>
                        <CardItem>
                            <Text style={{fontFamily:"Sans Serif",color:GRAY_TEXT}}>
                                This application serves as a demo of React Native. 
                                All data from this app are from bitcoin.co.id API, created by 
                                Indonesia Digital Asset Exchange (indodax.com). 
                                Public functionalities can be used without logging in. 
                                More features are planned to be added in the future.
                            </Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem cardHeader>
                            <Title style={{color:COLOR_PRIMARY}}>Authentication</Title>
                        </CardItem>
                        <CardItem>
                            <Text style={{fontFamily:"Sans Serif",color:GRAY_TEXT}}>                                
                                Authentication is done through API Key and Secret Key
                                as it is the only way provided by bitcoin.co.id. Your API Key and Secret
                                Key are automatically stored in your phone local storage and destroyed
                                upon logout. These important credentials are not used nor be seen by any 
                                means. 
                            </Text>
                        </CardItem>
                    </Card>
                </Content>

            </Container>
        )
    }
}

export default Info;