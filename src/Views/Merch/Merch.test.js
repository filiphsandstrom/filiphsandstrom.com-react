import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter} from 'react-router-dom';

import Merch from './Merch';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <Merch />
        </MemoryRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
});