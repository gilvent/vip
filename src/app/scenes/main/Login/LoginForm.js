import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { reduxForm, Field, reset } from 'redux-form';
import { Form, Item, Input, Button,Text,Label,Content} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { COLOR_SECONDARY } from '../../../commons/styles';


class LoginForm extends Component{
    
    renderInput({input,label,meta: { touched, error, warning }}){
        var hasError= false;
        if(error !== undefined){
        hasError= true;
        }
        return (
            <Item error= {hasError} inlineLabel>
                <Label>{input.name}</Label>
                <Input {...input}
                    onChangeText = {input.onChangeText} 
                    onBlur={input.onBlur}
                    onFocus={input.onFocus}
                    value={input.value} />
                {hasError ? <Text>{error}</Text> : <Text />}
            </Item>
        )
        
    }
    render(){
        const {handleSubmit,login} = this.props;
        return (
           <Content>
                <Form>
                    <Field
                        label={'API Key'}
                        name={'APIKey'}
                        component={this.renderInput}
                    /> 
                    <Field
                        label={'Secret'}
                        name={'Secret'}
                        component={this.renderInput}
                    />
                    
                    <Button style={styles.loginButton} onPress={handleSubmit(login)}>
                        <Text>Login</Text>
                    </Button>
                    
                </Form>
               
            </Content>
        );
    }
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('LoginForm'));


export default reduxForm({
    form : 'LoginForm',
    onSubmitSuccess: afterSubmit
})(LoginForm);

const styles = StyleSheet.create({
    loginButton :{
        backgroundColor :COLOR_SECONDARY,
        marginTop: 10
    }
});

