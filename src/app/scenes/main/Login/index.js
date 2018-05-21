import React , {Component} from 'react';
import { reduxForm , Field } from 'redux-form';
import { Container, Text, Content,Spinner } from 'native-base';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, Image } from 'react-native';
import authActions from '../../../redux-core/actions/auth';
import authSelectors from '../../../redux-core/selectors/entities/auth';
import loginUISelectors from '../../../redux-core/selectors/ui/loginUI';

class Login extends Component{

    componentWillMount(){
        let {firstLogin,InitialLogin} = this.props;
        if(firstLogin){
            InitialLogin();
        }
    }

    render(){
        const {Login, isLoading} =  this.props ;
        return (
            <Container>
                    <Grid>
                        <Row size={2} style={{padding:20,backgroundColor:"#428bca",}}>
                            <Col>
                                <Image source={require('../../../../images/logo.png')} 
                                    style={styles.commonImage}/>
                            </Col>
                        </Row>
                        <Row size={1} style={{backgroundColor:"#428bca",padding:20}}>
                            <Col style={{}}>
                            {
                                isLoading == false &&
                                <LoginForm navigation ={this.props.navigation} login={Login}/>
                            }
                            {
                                isLoading == true &&
                                <Spinner />
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