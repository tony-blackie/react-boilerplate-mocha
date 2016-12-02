import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default class Landing extends Component {
    render() {
        return(
            <section className="landing">
                <Nav />
                {this.props.children}
                <Footer />
            </section>
        );
    }
};