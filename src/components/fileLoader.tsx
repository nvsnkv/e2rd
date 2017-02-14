import './fileLoader.css'
import * as React from 'react';
import { Modal, Button, ButtonProps } from 'react-bootstrap';
import { head } from 'lodash';

export interface FileLoaderProps {
    onFileSelected?: () => void;
    onFileLoaded: (data: string) => void;
    errorOccured?: () => void;
}

export class FileLoader extends React.Component<FileLoaderProps, void> {
    constructor(props: FileLoaderProps) {
        super(props);
    }

    render(): JSX.Element {
        return <Modal.Dialog>
                    <Modal.Body>
                        <Button bsSize="large" bsStyle="primary" block onClick={(e) => this.onClick(e)}>
                            Load new image
                        </Button>
                        <input type="file" className="hidden" ref={(input) => this.setReference(input)}/>
                    </Modal.Body>
                </Modal.Dialog>
    }

    private onClick(e: React.MouseEvent<React.ClassicComponent<ButtonProps, {}>>): void {
        this.fileInput.click();
    }

    private setReference(input: HTMLInputElement){
        if (!input) return; // <- it can be null during ui updates

        this.fileInput = input;
        this.fileInput.onchange = (ev: Event) =>  {
            const input = ev.target as HTMLInputElement;
            const file = head(input.files);
            if (file){
                if (this.props.onFileSelected) {
                    this.props.onFileSelected();
                }
                const reader = new FileReader();
                reader.onload = (ev: Event) => {
                    this.props.onFileLoaded(reader.result);
                }
                reader.onerror = reader.onabort = (ev: Event) => {
                    if (this.props.errorOccured) {
                        this.props.errorOccured();
                    }
                }
                reader.readAsDataURL(file);
            }
        }
    }

    private fileInput: HTMLInputElement;
}