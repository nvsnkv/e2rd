import './e2rd.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import { Panel, Row, Col } from 'react-bootstrap';

export interface E2RDProps {
    width: number,
    height: number
}

export class E2RD extends React.Component<E2RDProps,void> {
    constructor(props: E2RDProps) {
        super(props)
    }

    render(): JSX.Element {
        return <Panel style={this.GetStyle()} className="workbench">

        </Panel>
    }

    private GetStyle(): React.CSSProperties {
        return {
            width: this.props.width + 'px',
            height: this.props.height + 'px'
        }
    }
}

