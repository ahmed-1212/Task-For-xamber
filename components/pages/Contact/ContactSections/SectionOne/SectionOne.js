import React, { Component} from 'react';
import { Container } from '../../../../UI/UI';
import {SectionBack, Title, Send, Overlay, Message, InnerLay} from './SectionComponents';
import { withTranslation } from '../../../../../i18n';
import { connect } from 'react-redux';
import { send } from '../../../../../store/public';
class SectionOne extends Component {

    post = (e) => {
        e.preventDefault();
        const data = {
            name: this.props.name,
            email: this.props.email,
            phone: this.props.phone,
            subject: this.props.subject,
            website: this.props.website,
            message: this.props.message,
        }

        this.props.onAddCounter(data);
        this.props.onSend()
    }

    
    render () {
        return (
            <SectionBack lang={this.props.t('en')}>
                <Container>
                    <Overlay send={this.props.send}>
                        <InnerLay>
                            <Message>Your Contact Details Has Been Send :) </Message>
                            <Send onClick={this.props.onFinish}>OK</Send>
                        </InnerLay>  
                    </Overlay>
                    <Title>{this.props.t('contactHeader')}</Title>
                    <form>
                        <input  value={this.props.name} type="text" onChange={(event) => this.setState({name: event.target.value})} placeholder={this.props.t('name')} />
                        <input value={this.props.phone} type="tel" onChange={(event) => this.setState({website: event.target.value})} placeholder={this.props.t('tel')} />
                        <input value={this.props.email} type="email" onChange={(event) => this.setState({email: event.target.value})} placeholder={this.props.t('email')} />
                        <input value={this.props.website} type="text" onChange={(event) => this.setState({phone: event.target.value})} placeholder={this.props.t('website')} />
                        <input value={this.props.message} type="text" onChange={(event) => this.setState({message: event.target.value})} placeholder={this.props.t('message')} />
                        <input value={this.props.subject} type="tel" onChange={(event) => this.setState({subject: event.target.value})} placeholder={this.props.t('subject')} />
                        <Send onClick={this.post}>{this.props.t('contactBtn')}</Send>
                    </form>
                </Container>
            </SectionBack>
        )
    }
}

const setPropsToState = state => {
    return {
        name: state.name,
        email: state.email,
        message: state.message,
        subject: state.subject,
        website: state.website,
        phone: state.phone,
        send: state.send
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddCounter: (data) => dispatch(send(data)),
        onSend: () => dispatch({type: 'SEND'}),
        onFinish: () => dispatch({type: 'DONE'}),
    }
};


export default connect(setPropsToState, mapDispatchToProps)(withTranslation('common')(SectionOne));