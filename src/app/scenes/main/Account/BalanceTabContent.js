import React, {Component} from 'react';
import {Container,Content,H2, Title,Text,Header, 
    Left,Body,Right,Icon, Button, Tabs, Tab, Card,CardItem,ListItem } from'native-base';
import { StyleSheet,FlatList,Image } from 'react-native';
import {COLOR_PRIMARY} from '../../../commons/styles';


class BalanceTabContent extends Component{
    convertDataToObjectArray(object){
        let array = [];
        for(var key in object){
            if(object.hasOwnProperty(key)){ 
                array.push({
                    key : key,
                    value : object[key]
                });
            };
        }
        return array;
    }

    render(){
        let {activeBalance,activeHold, idr} =this.props;
        
        return (
            <Content>
                <Card>
                    <CardItem header style={styles.cardHeader}>
                        <Image source={require('../../../../images/default-profile-background.jpg')} 
                               style={styles.backgroundImage}/>
                        <Text style={styles.textHeader}>Current Balance</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <H2 style={styles.numbers}>Rp {idr.balance} </H2>
                        </Body>
                    </CardItem>
                    <FlatList
                    data={this.convertDataToObjectArray(activeBalance)}
                    renderItem = {(
                        {item}) => 
                        <ListItem icon>
                            <Body><Text>{item.key}</Text></Body>
                            <Right>
                                <Text style={styles.numbers}>{item.value} </Text>
                            </Right>
                        </ListItem>}    
                    />
                </Card>
                
                <Card>
                    <CardItem header style={styles.cardHeader}>
                        <Image source={require('../../../../images/default-profile-background.jpg')} 
                               style={styles.backgroundImage}/>
                        <Text style={styles.textHeader}>Balance On Hold</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <H2 style={styles.numbers}>Rp {idr.hold} </H2>
                        </Body>
                    </CardItem>
                    <FlatList
                    data={this.convertDataToObjectArray(activeHold)}
                    renderItem = {(
                        {item}) => 
                        <ListItem icon>
                            <Body><Text>{item.key}</Text></Body>
                            <Right>
                                <Text style={styles.numbers}>{item.value} </Text>
                            </Right>
                        </ListItem>}
                    />
                </Card>
                
            </Content>
        );
    }
}

export default BalanceTabContent;


const styles = StyleSheet.create({
    cardHeader : {
        backgroundColor : COLOR_PRIMARY,
    },
    textHeader : {
        color : "white"
    },
    numbers : {
        color : COLOR_PRIMARY
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch',
        position: "absolute"
    }
});