import React, {Component} from 'react';

class User extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <h1>Hello {this.props.name},welcome {this.props.addr}!</h1>
        )
    }
}
export default User;