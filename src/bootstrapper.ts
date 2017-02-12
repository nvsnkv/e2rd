import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { E2RD, E2RDProps } from './components/e2rd'

export function  CreateCropper(props: E2RDProps, element: Element) {
    const e2rd = React.createElement(E2RD, props);
    ReactDOM.render(e2rd, element);
}

