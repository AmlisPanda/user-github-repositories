import React from 'react';

export class UserSearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }

        this.usernameChange = this.usernameChange.bind(this);
    }

    usernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            <form className="reposSearch" onSubmit={(e) => this.props.onSearch(e, this.state.username)}>
                <label htmlFor="githubUsername">Github username</label>
                <input type="text" name="githubUsername" value={this.state.username} onChange={this.usernameChange} placeholder="Enter username here" />

                <button>GO</button>
            </form>
        )
    }
}
