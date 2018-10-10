import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {
    constructor() {
        super();
        console.log('Greeting::constructor()');
    }
    render() {
        console.log('Greeting::render()');
        //this.props.message="bla bla bla";  // immutable
        let { message } = this.props;
        return (
            <div className="alert alert-info">
                {message}
            </div>
        );
    }
}

Greeting.defaultProps = {
    message: 'greetings'
};
Greeting.propTypes = {
    message: PropTypes.string
};

export default Greeting;