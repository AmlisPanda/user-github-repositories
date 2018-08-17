import React from 'react';
import { mount } from 'enzyme';
import { RepositoriesList } from '../RepositoriesList';
import { RepoResult } from '../RepoResult';

describe('RepositoriesList', () => {

	let repos;
	let oldestRepo;
	let mostRecentRepo;

	beforeEach(() => {

	 	repos = [
            {
                id: 1,
                updated_at: "2018-05-15T19:00:00Z"
            },
            {
            	id: 2,
                updated_at: "2018-04-15T19:00:00Z"
            },
            {
            	id: 3,
                updated_at: "2018-06-15T19:00:00Z"
            },
            {
            	id: 4,
                updated_at: "2018-03-15T19:00:00Z"
            }
        ];

        oldestRepo = {
			id: 4,
        	updated_at: "2018-03-15T19:00:00Z"
        };

        mostRecentRepo = {
    		id: 3,
            updated_at: "2018-06-15T19:00:00Z"
        }

	})


    it('renders the correct number of repositories', () => {
    	const wrapper = mount(<RepositoriesList list={repos} top={2} />);
        expect(wrapper.find(RepoResult)).toHaveLength(2);
    });

    
    it('renders the repositories in the default order', () => {

    	const wrapper = mount(<RepositoriesList list={repos} top={10} />);

        expect(wrapper.find(RepoResult).get(0).props).toEqual({ "repo" : mostRecentRepo });
        expect(wrapper.find(RepoResult).get(3).props).toEqual({ "repo" : oldestRepo });
	});


    it('renders the repositories, "oldest first"', () => {

    	const wrapper = mount(<RepositoriesList list={repos} top={10} order={1} />);
    	
    	expect(wrapper.find(RepoResult).get(0).props).toEqual({ "repo" : oldestRepo });
        expect(wrapper.find(RepoResult).get(3).props).toEqual({ "repo" : mostRecentRepo });
        
	});

})
