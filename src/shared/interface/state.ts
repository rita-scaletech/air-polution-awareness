export interface IState {
    loading: ILoadingState;
    auth: any;
}

export interface ILoadingState {
    api: {
        [key: string]: boolean;
    };
}

export interface IAction {
    type: string;
    payload: any;
}
