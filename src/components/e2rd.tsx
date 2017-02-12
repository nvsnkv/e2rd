import './e2rd.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import { Panel, Modal, Button } from 'react-bootstrap';

export interface E2RDProps {
    ImageLoaded: boolean;
}

export class E2RD extends React.Component<E2RDProps,void> {
    constructor(props: E2RDProps) {
        super(props)
    }

    render(): JSX.Element {
        return <Panel className="workbench modal-container">
            <Modal.Dialog>
                <Modal.Body>
                    <Button bsSize="large" bsStyle="primary" block>
                        Load new image
                    </Button>
                </Modal.Body>
            </Modal.Dialog>
        </Panel>
    }
}

