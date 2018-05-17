import React, {Component} from 'react';

class Button extends Component {

    render() {
        var users = ['小明', '小红', '小芳'];
        return (
            <div>
                {
                    users.map(function (user) {
                        return <li>{user}</li>
                    })
                }
            </div>);
    }
}

export default Button