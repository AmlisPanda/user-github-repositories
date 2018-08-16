import React from 'react';
import renderer from 'react-test-renderer';
import { UserSearchBar } from '../UserSearchBar';

describe('UserSearchBar', () => {
    it('renders the component', () => {
        const tree = renderer.create(<UserSearchBar />).toJSON();
        expect(tree).toMatchSnapshot();
    });

})
