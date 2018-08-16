import React from 'react';
import { UserSearchBar } from './UserSearchBar';
import { RepositoriesHeader } from './RepositoriesHeader';
import { RepositoriesList } from './RepositoriesList';

import './GitHubUserRepos.css';

export class GitHubUserRepos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sortOrder: 0,
            reposList: []
        }
        this.search = this.search.bind(this);
        this.sort = this.sort.bind(this);
    }


    search(event, username) {
        event.preventDefault();
        if (username) {
            fetch("https://api.github.com/users/" + username + "/repos")
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                this.setState({
                    reposList: json
                });
            }.bind(this));
        }
    }

    sort(event) {
        this.setState({
            sortOrder: event.target.value
        })
    }

    render() {

        let top = (this.props.top) ? this.props.top : 10;

        return (
            <div className="reposContainer">
                <UserSearchBar onSearch={this.search} />

                <RepositoriesHeader onSort={this.sort} reposNb={this.state.reposList.length} top={top} />

                <RepositoriesList list={this.state.reposList} order={this.state.sortOrder} top={top} />

            </div>
        )
    }
}
