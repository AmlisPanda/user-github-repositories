import React from 'react';
import PropTypes from 'prop-types';
import { RepoResult } from './RepoResult';

/* List of the repositories */
export class RepositoriesList extends React.Component {

    render() {

        const { list, order } = this.props;

        let orderedList;
        if (order === 1) {
            orderedList = list.sort((a, b) => new Date(a.updated_at) - new Date(b.updated_at));
        }
        else
            orderedList = list.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        orderedList = orderedList.slice(0, this.props.top);

        return (
            <div className="reposList">
            {orderedList.map((repo) =>
                <RepoResult key={repo.id} repo={repo} />
            )}
            </div>
        )
    }
}

RepositoriesList.propTypes = {
    list: PropTypes.array,
    order: PropTypes.number,
    top: PropTypes.number
}
