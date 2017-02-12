import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Cropper, CropperProps } from './components/cropper'

export function  CreateCropper(props: CropperProps, element: Element) {
    const e2rd = React.createElement(Cropper, props);
    ReactDOM.render(e2rd, element);
}

