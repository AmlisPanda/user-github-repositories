import React from 'react';
import renderer from 'react-test-renderer';
import { RepoResult } from '../RepoResult';

describe('RepoResult', () => {
    it('renders the component with props', () => {
        const repo = {
            updated_at: "",
            name: "Androguard",
            svn_url: "https://github.com/google/androguard",
            description: "Reverse engineering, Malware and goodware analysis of Android applications ... and more (ninja !)"
        }
        const tree = renderer.create(<RepoResult repo={repo} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

})
