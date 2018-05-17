import React, {Component} from 'react'

class Ajax extends Component {

    state = {
        loading: true,
        error: null,
        data: null
    };

    // 通过fetch方法，发送ajax请求
    componentDidMount() {
        fetch(this.props.url)
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        loading: false,
                        data: result
                    });
                },
                error => {
                    this.setState({
                        isLoaded: false,
                        error: error
                    });
                }
            )
    }

    render() {
        // ajax请求内容还未返回，显示loading
        if (this.state.loading) {
            return <span>请稍等...</span>
        } else if (this.state.error !== null) {
            return <span>Error: {this.state.error.message}</span>;
        } else {
            var repos = this.state.data.items;
            var repoList = repos.map(function (repo) {
                return (
                    <li>
                        <a href={repo.html_url}>{repo.name}</a>
                    </li>
                )
            })
        }
        return (
            <main>
                <ol>{repoList}</ol>
            </main>
        )
    }
}

export default Ajax;