import React from 'react';
import renderer from 'react-test-renderer';
import { RepositoriesHeader } from '../RepositoriesHeader';

describe('RepositoriesHeader', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<RepositoriesHeader />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with props', () => {
        const tree = renderer.create(<RepositoriesHeader top={20} reposNb={15} />).toJSON();
        expect(tree).toMatchSnapshot();
    });


})
