import React, { Component} from 'react';
import { Container } from '../../../../UI/UI';
import {SectionBack, Title, Send, Overlay, Message, InnerLay} from './SectionComponents';
import { withTranslation } from '../../../../../i18n';
import { connect } from 'react-redux';
import { send } from '../../../../../store/public';


class SectionOne extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        subject: '',
        website: '',
        phone: '',
    }

    post = (e) => {

        e.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            subject: this.state.subject,
            website: this.state.website,
            message: this.state.message,
        }

        this.props.onSendingContact(data);
        this.props.onSend()

        this.setState({
            name: '',
            email: '',
            message: '',
            subject: '',
            website: '',
            phone: ''
        })
    }

    
    render () {
        return (
            <SectionBack lang={this.props.t('en')}>
                <Container>
                    <Overlay send={this.props.send}>
                        <InnerLay>
                            <Message>Your Contact Details Has Been Send  </Message>
                            <Send onClick={this.props.onFinish}>OK</Send>
                        </InnerLay>  
                    </Overlay>
                    <Title>{this.props.t('contactHeader')}</Title>
                    <form>
                        <input  value={this.state.name} type="text" onChange={(event) => this.setState({name: event.target.value})} placeholder={this.props.t('name')} />
                        <input value={this.state.phone} type="tel" onChange={(event) => this.setState({phone: event.target.value})} placeholder={this.props.t('tel')} />
                        <input value={this.state.email} type="email" onChange={(event) => this.setState({email: event.target.value})} placeholder={this.props.t('email')} />
                        <input value={this.state.website} type="text" onChange={(event) => this.setState({website: event.target.value})} placeholder={this.props.t('website')} />
                        <input value={this.state.subject} type="text" onChange={(event) => this.setState({subject: event.target.value})} placeholder={this.props.t('subject')} />
                        <textarea value={this.state.message} type="text" onChange={(event) => this.setState({message: event.target.value})} placeholder={this.props.t('message')}></textarea>
                        <Send onClick={this.post}>{this.props.t('contactBtn')}</Send>
                    </form>
                </Container>
            </SectionBack>
        )
    }
}


const mapStateToProps = state => {
    return {
        send: state.send
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSendingContact: (data) => dispatch(send(data)),
        onSend: () => dispatch({type: 'SEND'}),
        onFinish: () => dispatch({type: 'DONE'}),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(SectionOne));