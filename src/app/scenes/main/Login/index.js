import React , {Component} from 'react';
import { reduxForm , Field } from 'redux-form';
import { Container, Text, Content,Spinner,Button,Icon } from 'native-base';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, Image } from 'react-native';
import authActions from '../../../redux-core/actions/auth';
import authSelectors from '../../../redux-core/selectors/entities/auth';
import loginUISelectors from '../../../redux-core/selectors/ui/loginUI';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../../commons/styles';

class Login extends Component{

    componentWillMount(){
        let {firstLogin,InitialLogin} = this.props;
        if(firstLogin){
            InitialLogin();
        }
    }

    render(){
        const {Login, isLoading} =  this.props;
        const {navigate} = this.props.navigation;
        return (
            <Container style={{backgroundColor:"#FFFFFF"}}>
                    <Grid>
                        <Row size={3} style={{padding:20}}>
                            <Col>
                                <Image source={require('../../../../images/logo.png')} 
                                    style={styles.commonImage}/>
                            </Col>
                        </Row>
                        <Row size={1} style={{alignItems:"center"}}>
                            <Col>
                                <Button iconLeft block bordered onPress={()=>navigate("Market")}>
                                    <Icon name='pricetags' />
                                    <Text>Market</Text>
                                </Button>
                            </Col>
                            <Col>
                                <Button iconLeft block bordered onPress={()=>navigate("Info")}>
                                    <Icon name='information' />
                                    <Text>Info</Text>
                                </Button>
                            </Col>
                        </Row>
                        <Row size={2} style={{padding:20}}>
                            <Col style={{}}>
                            {
                                isLoading == false &&
                                <LoginForm navigation ={this.props.navigation} login={Login}/>
                            }
                            {
                                isLoading == true &&
                                <Col style={{alignItems:"center"}}>
                                    <Spinner color={COLOR_PRIMARY}/>
                                    <Row>
                                        <Text style={{color:COLOR_SECONDARY}}>Authenticating. . .</Text>
                                    </Row>
                                </Col>
                            }    
                            </Col>
                        </Row>
                    </Grid>
            </Container>
        );
    }
}

function mapStateToProps(state){
    return {
        firstLogin : authSelectors.getFirstLogin(state),
        isLoading : loginUISelectors.getIsLoading(state) 
    }
}

function mapDispatchToProps(dispatch){
    return {
        Login : (credentials) => dispatch(authActions.Login(credentials)),
        InitialLogin : () => dispatch(authActions.InitialLogin())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);


const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', 
        position: "absolute",
        padding :10
    },
    commonImage: {
        flex:1,
        width: undefined,
        height: undefined,
        resizeMode: "contain"
      },
});