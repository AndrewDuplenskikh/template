import { instanceAxios } from './main';
import { IFields } from '../../store/reducers/my-form/types';

export const myFormAPI = {
    /**
     * Получение целей кредита для селектора в MyForm.tsx
     */
    getPurposes: () => {
        return instanceAxios.get<ILoanPurpose[]>('/loanpurposes').then((response) => {
            return response.data;
        });
    },
    /**
     * Отправление данных формы
     *
     * @param data данные заемщика
     */
    sendData: (data: IFields) => {
        return instanceAxios.post<sendDataResponse>('/sendData', data).then((response) => {
            return response.data;
        });
    },
};

/**
 * Опция для селектора в MyForm.tsx
 */
export interface ILoanPurpose {
    value: string;
    label: string;
}

/**
 * Ответ на отправление данных формы
 */
export interface sendDataResponse {
    firstName: string;
    secondName: string;
    thirdName: string;
    purpose: string;
    email: string;
    phone: string;
    modalText: string;
}
