import React, {Component} from 'react'
import PropTypes from 'prop-types';

class StringInput extends Component {

    props = {title:'11'}
    render() {
        return (
            <h1>___ {this.props.title}</h1>
        );
    }
}

StringInput.propTypes = {
    title: PropTypes.string
};
// 为属性赋值，和java不一样写到类外面去了
StringInput.defaultProps = {
    title:'11'
}

export default StringInput;