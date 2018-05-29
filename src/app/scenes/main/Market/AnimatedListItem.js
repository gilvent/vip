import React, {Component} from 'react';
import { Animated, StyleSheet } from 'react-native'
import {Content,H2, Title,Text,Header, 
    Left,Body,Right,Icon,ListItem,Spinner } from'native-base';
import {COLOR_PRIMARY} from '../../../commons/styles';

class AnimatedListItem extends Component {
    state = {
        backgroundColor: new Animated.Value(0),  // Initial value background color
    }

    greenHighlight = this.state.backgroundColor.interpolate({
        inputRange: [0,1],
        outputRange: ['#FFFFFF', '#b8ecd8']
    });
    redHighlight = this.state.backgroundColor.interpolate({
        inputRange: [0,1],
        outputRange: ['#FFFFFF', '#e88383']
    });

    componentDidUpdate() {
        Animated.sequence([
            Animated.timing(this.state.backgroundColor, {
                toValue: 1
            }),
            Animated.timing(this.state.backgroundColor, {
                duration: 1000,
                toValue: 0
            })
        ]).start();
    }

    render(){
        const {name,lastPrice,trend} = this.props;
        let highlight;
        if(trend == 'up'){
            highlight = this.greenHighlight;
        }
        else if(trend =='down'){
            highlight = this.redHighlight;
        }
        const AnimatedItem = Animated.createAnimatedComponent(ListItem);
        const AnimatedBody = Animated.createAnimatedComponent(Body);
        const AnimatedRight = Animated.createAnimatedComponent(Right);
        return (
            <AnimatedItem icon>
                <AnimatedBody style={{backgroundColor: highlight}}><Text>{name}</Text></AnimatedBody>
                <AnimatedRight style={{backgroundColor: highlight}}>
                    <Text style={{color : COLOR_PRIMARY}}>
                    {lastPrice} </Text>
                    {!lastPrice && <Spinner color={COLOR_PRIMARY}/>}
                </AnimatedRight>
            </AnimatedItem>
        )
    }
}

export default AnimatedListItem;

