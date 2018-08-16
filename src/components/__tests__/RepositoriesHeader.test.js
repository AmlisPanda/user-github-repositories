import React from 'react';
import renderer from 'react-test-renderer';
import { RepositoriesHeader } from '../RepositoriesHeader';

describe('RepositoriesHeader', () => {
    it('renders the component', () => {
        const tree = renderer.create(<RepositoriesHeader />).toJSON();
        expect(tree).toMatchSnapshot();
    });

})
