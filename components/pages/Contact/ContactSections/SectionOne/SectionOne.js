import React, { Component} from 'react';
import { Container } from '../../../../UI/UI';
import {SectionBack, Title, Send} from './SectionComponents';
import { withTranslation } from '../../../../../i18n';

class SectionOne extends Component {
    

    
    render (props) {
        return (
            <SectionBack lang={this.props.t('en')}>
                <Container>
                    <Title>{this.props.t('contactHeader')}</Title>
                    <form>
                        <input type="text" onChange={(event) => this.setState({name: event.target.value})} placeholder={this.props.t('name')} />
                        <input type="email" onChange={(event) => this.setState({email: event.target.value})} placeholder={this.props.t('email')} />
                        <input type="tel" onChange={(event) => this.setState({content: event.target.value})} placeholder={this.props.t('tel')} />
                        <Send onClick={this.post}>{this.props.t('contactBtn')}</Send>
                    </form>
                </Container>
            </SectionBack>
        )
    }
}


export default withTranslation('common')(SectionOne);