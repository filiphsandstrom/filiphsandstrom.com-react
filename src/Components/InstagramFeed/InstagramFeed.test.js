import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter} from 'react-router-dom';

import InstagramFeed from './InstagramFeed';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <InstagramFeed />
        </MemoryRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
});