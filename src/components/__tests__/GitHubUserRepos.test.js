import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { GitHubUserRepos } from '../GitHubUserRepos';

describe('GitHubUserRepos', () => {

	let mockedEvent;
	let wrapper;
	let repoUser;

	beforeEach(() => {

		mockedEvent = { preventDefault: jest.fn() };

		repoUser = [
		    {
			id: 2,
			updated_at: "2018-04-15T19:00:53Z"
		    }
		];

		wrapper = mount(<GitHubUserRepos />)
	})


	it('renders component correctly with "top" = 10 if not defined', () => {

		expect(wrapper.prop("top")).toBe(10);
    	});


    	it('should change "sortOrder" state when sort order changes', () => {

		wrapper.find("#sortList").simulate("change", { target : { value: "1" } });
		expect(wrapper.state("sortOrder")).toBe(1);
    	});


    	it("verify that handleFetch isn't called when the username is null", () => {

		const instance = wrapper.instance();
		const username = "";

		instance.search = jest.fn();
		instance.handleFetch = jest.fn();
		instance.search(mockedEvent, username);

		expect(instance.search).toHaveBeenCalled();
		expect(instance.handleFetch).toHaveBeenCalledTimes(0);
    	});


  	it("verify that handleFetch is called when the username is defined", () => {

		const instance = wrapper.instance();
		const username = "username";

		instance.search = jest.fn();
		instance.handleFetch = jest.fn().mockReturnValue(repoUser);
		instance.search(mockedEvent, username);

		expect(instance.search).toHaveBeenCalled();
		expect(instance.search).toHaveBeenCalledWith(mockedEvent, username);
		expect(instance.handleFetch()).toEqual(repoUser);
    	});
});
