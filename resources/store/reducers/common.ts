import { SET_PAGE_LOADED } from "../actions/common";

export interface ICommonState {
    pageLoaded: boolean;
}

const initialState = (): ICommonState => ({
    pageLoaded: false
});

export function common(state = initialState(), action: any){
    switch (action.type){

        case SET_PAGE_LOADED: {
            return {
                pageLoaded: true
            }
        }

        default:
            return state;
    }
}