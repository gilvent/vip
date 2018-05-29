import React, {Component} from 'react';
import {Container,Content,H2, Title,Text,Header, 
    Left,Body,Right,Icon, Button, Tabs, Tab, Card,CardItem,ListItem,Separator } from'native-base';
import { StyleSheet,FlatList,Image } from 'react-native';
import {COLOR_PRIMARY, GRAY_TEXT} from '../../../commons/styles';


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
                    <ListItem itemDivider first>
                        <Text style={styles.headerText}>Currently Active</Text>
                    </ListItem>
                    <ListItem>
                            <Left>
                                <Text>Rp {idr.balance} </Text>  
                            </Left>      
                    </ListItem>
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
                    {
                        Object.keys(activeBalance).length === 0 &&
                        <ListItem icon>
                            <Text style={styles.noDataText}>You have no active coin</Text>        
                        </ListItem>
                    }     


                    <ListItem itemDivider>
                        <Text style={styles.headerText}>On Hold</Text>
                    </ListItem>
                    <ListItem>
                            <Left>
                                <Text>Rp {idr.hold}</Text>       
                            </Left> 
                    </ListItem>
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
                    {
                        Object.keys(activeHold).length === 0 &&
                        <ListItem icon>
                            <Text style={styles.noDataText}>You have no coin on hold</Text>        
                        </ListItem>
                    }                
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
    },
    headerText:{
        fontSize:15,
    },
    noDataText: {
        color: GRAY_TEXT,
        fontSize: 12
    }
});