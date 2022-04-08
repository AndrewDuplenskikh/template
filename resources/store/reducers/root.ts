import { combineReducers } from 'redux';
import { common, ICommonState } from './common';
import { IMyFormState, myFormReducer } from './my-form';

export const rootReducer = combineReducers({
    common,
    myFormReducer,
});

export type TRootState = {
    common: ICommonState;
    myFormReducer: IMyFormState;
};
