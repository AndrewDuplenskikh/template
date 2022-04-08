import { IErrorsPayload } from '../reducers/my-form';

export const CHANGE_FIRST_NAME = 'MY_PAGE:CHANGE_FIRST_NAME';
export const CHANGE_SECOND_NAME = 'MY_PAGE:CHANGE_SECOND_NAME';
export const CHANGE_THIRD_NAME = 'MY_PAGE:CHANGE_THIRD_NAME';
export const CHANGE_PURPOSE = 'MY_PAGE:CHANGE_PURPOSE';
export const CHANGE_EMAIL = 'MY_PAGE:CHANGE_EMAIL';
export const CHANGE_PHONE = 'MY_PAGE:CHANGE_PHONE';
export const CHANGE_ERROR = 'MY_PAGE:CHANGE_ERROR';
export const CHANGE_SHOW_MODAL = 'MY_PAGE:CHANGE_SHOW_MODAL';
export const SET_RESP = 'MY_PAGE:SET_RESP';

export const changeFirstName = (value: string) => {
    return {
        type: CHANGE_FIRST_NAME,
        payload: value,
    };
};

export const changeSecondName = (value: string) => {
    return {
        type: CHANGE_SECOND_NAME,
        payload: value,
    };
};

export const changeThirdName = (value: string) => {
    return {
        type: CHANGE_THIRD_NAME,
        payload: value,
    };
};

export const changePurpose = (value: string) => {
    return (dispatch: any) => {
        dispatch(changeError({ purpose: false }));
        dispatch({
            type: CHANGE_PURPOSE,
            payload: value,
        });
    };
};

export const changeEmail = (value: string) => {
    return {
        type: CHANGE_EMAIL,
        payload: value,
    };
};

export const changePhone = (value: string) => {
    return {
        type: CHANGE_PHONE,
        payload: value,
    };
};

export const changeError = (value: IErrorsPayload) => {
    return {
        type: CHANGE_ERROR,
        payload: value,
    };
};

export const changeShowModal = (value: boolean) => {
    return {
        type: CHANGE_SHOW_MODAL,
        payload: value,
    };
};

export const setResp = (value: any) => {
    return {
        type: SET_RESP,
        payload: value,
    };
};
