import React from 'react';

export class RepositoriesHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="reposHeader">
                <h2>Repositories</h2>

                <div>Found {this.props.reposNb} repositories. Showing top {this.props.top}.</div>

                <select id="sortList" onChange={this.props.onSort}>
                    <option value="0">Most recent first</option>
                    <option value="1">Oldest first</option>
                </select>
            </div>
        )
    }
}
