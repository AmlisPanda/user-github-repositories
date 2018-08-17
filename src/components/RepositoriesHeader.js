import React from 'react';
import PropTypes from 'prop-types';

/* Header of the list : results count & top */
export class RepositoriesHeader extends React.Component {

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

RepositoriesHeader.propTypes = {
    reposNb: PropTypes.number,
    top: PropTypes.number,
    onSort: PropTypes.func.isRequired
}
