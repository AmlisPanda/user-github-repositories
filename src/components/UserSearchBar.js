import React from 'react';
import PropTypes from 'prop-types';

/* Search bar for the Github user */
export class UserSearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }

    usernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            <form className="reposSearch" onSubmit={(e) => this.props.onSearch(e, this.state.username)}>
                <label htmlFor="githubUsername">Github username</label>
                <input type="text" name="githubUsername" value={this.state.username} onChange={(e) => this.usernameChange(e)} placeholder="Enter username here" />

                <button>GO</button>
            </form>
        )
    }
}

UserSearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
}
