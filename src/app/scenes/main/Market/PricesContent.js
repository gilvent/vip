import React, {Component} from 'react';
import {Container,Content,H2, Title,Text,Header, 
    Left,Body,Right,Icon, Button, Tabs, Tab, Card,CardItem,ListItem } from'native-base';
import { StyleSheet,FlatList,Image } from 'react-native';
import {COLOR_PRIMARY, COLOR_SECONDARY, GRAY_TEXT} from '../../../commons/styles';
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
                    <FlatList
                        data={this.convertDataToObjectArray(prices)}
                        renderItem = {(
                            {item}) => 
                            <AnimatedListItem name={item.key} lastPrice={item.value} trend={item.trend}/>
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
        backgroundColor : GRAY_TEXT,
    },
    textHeader : {
        color : COLOR_SECONDARY
    },
    numbers : {
        color : COLOR_PRIMARY
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch',
        position: 'absolute'
    }
});