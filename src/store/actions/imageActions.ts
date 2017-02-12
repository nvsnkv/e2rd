import { Action } from 'redux';

export class ActionType {
    static readonly Clear = "Image.Clear";
    static readonly SetLoading = "Image.SetLoading";
    static readonly Update = "Image.Update";
}

export interface ImageAction extends Action {
    type: ActionType;
    data?: string;
}