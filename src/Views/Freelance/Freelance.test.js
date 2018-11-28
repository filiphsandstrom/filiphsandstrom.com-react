import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter} from 'react-router-dom';

import Freelance from './Freelance';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <Freelance />
        </MemoryRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
});