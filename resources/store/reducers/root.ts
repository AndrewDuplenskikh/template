import { combineReducers } from 'redux';
import {common, ICommonState} from "./common";

export const rootReducer = combineReducers({
    common
});

export type TRootState = {
    common: ICommonState
};