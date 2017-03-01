import './fileLoader.css'
import * as React from 'react';
import { Modal, Button, ButtonProps } from 'react-bootstrap';
import { head } from 'lodash';

export interface FileLoaderProps {
    onFileSelected: (file: Promise<string>) =>  void;
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
            
            if (file) {
                const promise = new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = (data) => {
                        resolve(reader.result);
                    }
                    reader.onerror =(e) => reject(e);
                    reader.readAsDataURL(file);
                });

                this.props.onFileSelected(promise);
            }
        }
    }

    private fileInput: HTMLInputElement;
}