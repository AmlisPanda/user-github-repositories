import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

/* Repository item : name, url, description, updated at */
export class RepoResult extends React.Component {

    render() {

        const updAt = moment(this.props.repo.updated_at).utc();
        return (
            <article>
                <h3><a href={this.props.repo.svn_url} target="_blank">{this.props.repo.name}</a></h3>
                <p>{this.props.repo.description}</p>
                <div className="updatedInfo" title={this.props.repo.updated_at}>Updated {updAt.fromNow()}</div>
            </article>
        )
    }
}

RepoResult.propTypes = {
    repo: PropTypes.object.isRequired
}
