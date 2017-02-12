import './cropper.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';

import { Panel } from 'react-bootstrap';
import { FileLoader } from './fileLoader'

export interface CropperProps {
    ImageLoaded: boolean;
}

export class Cropper extends React.Component<CropperProps,void> {
    constructor(props: CropperProps) {
        super(props)
    }

    render(): JSX.Element {
        return <Panel className="workbench modal-container">
            <FileLoader onFileLoaded={(d) => console.log(d) } />
        </Panel>
    }
}

