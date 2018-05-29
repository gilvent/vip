import React, {Component} from 'react';
import {Container,Content,H2, Title,Text,Header, 
    Left,Body,Right,Icon, Button, Tabs, Tab,List,ListItem } from'native-base';
import {StyleSheet} from 'react-native';
import {COLOR_PRIMARY} from '../../../commons/styles';

class InfoTabContent extends Component{

    render(){
        let {userInfo,asset} =this.props;
        return (
            <Content style={{paddingTop:10}}>
                 <List>
                    <ListItem icon>
                        <Left>
                            <Icon name="mail" style={{color:COLOR_PRIMARY}}/>
                        </Left>
                        <Body>
                            <Text>Email</Text>
                        </Body>
                        <Right>
                            <Text style={{fontSize:12}}>{userInfo.email} </Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="calculator" style={{color:COLOR_PRIMARY}}/>
                        </Left>
                        <Body>
                            <Text>Estimated Asset</Text>
                        </Body>
                        <Right>
                            <Text style={{fontSize:12}}>{asset}</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="jet" style={{color:COLOR_PRIMARY}}/>
                        </Left>
                        <Body>
                            <Text>Highest Profit</Text>
                        </Body>
                        <Right>
                            <Text style={{fontSize:12}}>Coming soon</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="flame" style={{color:COLOR_PRIMARY}}/>
                        </Left>
                        <Body>
                            <Text>Highest Loss</Text>
                        </Body>
                        <Right>
                            <Text style={{fontSize:12}}>Coming soon</Text>
                        </Right>
                    </ListItem>
                </List>
                
            </Content>
        );
    }
}

export default InfoTabContent;