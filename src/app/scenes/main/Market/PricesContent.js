import React, {Component} from 'react';
import {Container,Content,H2, Title,Text,Header, 
    Left,Body,Right,Icon, Button, Tabs, Tab, Card,CardItem,ListItem } from'native-base';
import { StyleSheet,FlatList,Image } from 'react-native';
import {COLOR_PRIMARY} from '../../../commons/styles';
import AnimatedListItem from './AnimatedListItem';

class PricesContent extends Component{
    lastPrice = {}

    convertDataToObjectArray(object){
        let array = [];
        let trend;
        for(var key in object){
            let assetName = key.replace('_','/').toUpperCase();
            if(object.hasOwnProperty(key)){
                if(object[key]>this.lastPrice[key]){
                    trend = 'up'
                }
                else if(object[key]<this.lastPrice[key]){
                    trend = 'down'
                }
                else{
                    trend = 'same'
                }
                array.push({
                    key : assetName,
                    value : object[key],
                    trend : trend
                });
            };
        }
        this.lastPrice = object;
        return array;
    }

    render(){
        let {prices} =this.props;
        
        return (
            <Content>
                <Card>
                    <CardItem header style={styles.cardHeader}>
                        <Image source={require('../../../../images/default-profile-background.jpg')} 
                               style={styles.backgroundImage}/>
                        <Body>
                            <Text style={styles.textHeader}>Asset</Text>
                        </Body>
                        <Right>
                            <Text style={styles.textHeader}>Last Price</Text>
                        </Right>
                    </CardItem>
                    <FlatList
                        data={this.convertDataToObjectArray(prices)}
                        renderItem = {(
                            {item}) => 
                            // <ListItem icon>
                            //     <Body><Text>{item.key}</Text></Body>
                            //     <Right>
                            //         <Text style={styles.numbers}>
                            //         {item.value} </Text>
                            //     </Right>
                            // </ListItem>
                            <AnimatedListItem name={item.key} lastPrice ={item.value} trend = {item.trend}/>
                        }    
                        />
                </Card>
            </Content>
        );
    }
}

export default PricesContent;


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