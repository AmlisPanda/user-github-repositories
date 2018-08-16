import React from 'react';
import {RepoResult} from './RepoResult';

export class RepositoriesList extends React.Component {

    render() {

        const list = this.props.list;
        const order = this.props.order;

        let orderedList;
        if (order == 1) {
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
