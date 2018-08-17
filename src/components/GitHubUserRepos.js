import React from 'react';
import PropTypes from 'prop-types';
import { UserSearchBar } from './UserSearchBar';
import { RepositoriesHeader } from './RepositoriesHeader';
import { RepositoriesList } from './RepositoriesList';

import './GitHubUserRepos.css';

/* Component GitHubUserRepos that returns <top> repositories of a given user */
export class GitHubUserRepos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sortOrder: 0,
            reposList: []
        }
    }

    search = (event, username) => {
        event.preventDefault();
        if (username)
            this.handleFetch(username);
    }

    handleFetch = (username) => {

        fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => { return response.json();})
        .then((json) => {
            this.setState({
                reposList: json
            });
        });
    }

    sort = (event) => {
        this.setState({
            sortOrder: parseInt(event.target.value, 10)
        })
    }

    render() {

        return (
            <div className="reposContainer">
                <UserSearchBar onSearch={this.search} />

                <RepositoriesHeader onSort={this.sort} reposNb={this.state.reposList.length} top={this.props.top} />

                <RepositoriesList list={this.state.reposList} order={this.state.sortOrder} top={this.props.top} />

            </div>
        )
    }
}

GitHubUserRepos.propTypes = {
    top: PropTypes.number
}
GitHubUserRepos.defaultProps = {
    top: 10
}