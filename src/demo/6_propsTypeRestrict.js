import React, {Component} from 'react'
import PropTypes from 'prop-types';

class StringInput extends Component {
    render() {
        return (
            <h1>___ {this.props.title}</h1>
        );
    }
}

StringInput.propTypes = {
    title: PropTypes.bool
};

export default StringInput;