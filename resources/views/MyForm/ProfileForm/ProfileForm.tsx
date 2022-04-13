import React, { useEffect, useState } from 'react';
import { Box, Button, MenuItem, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeError, changeFieldValue, sendData } from '../../../store/actions/my-form';
import { TRootState } from '../../../store/reducers/root';
import { isEmailInvalid, isNameInvalid, isPhoneInvalid } from '../../../utils/fieldsValidations';
import { TFields } from '../../../store/reducers/my-form/types';
import { ILoanPurpose, myFormAPI } from '../../../api/my-form/api';
import './ProfileForm.scss';

const ProfileForm: React.FC = () => {
    const fields = useSelector((state: TRootState) => state.myFormReducer.fields);
    const errors = useSelector((state: TRootState) => state.myFormReducer.errors);
    const dispatch = useDispatch();
    const [loanPurposes, setLoanPurposes] = useState<ILoanPurpose[]>([]);

    useEffect(() => {
        myFormAPI.getPurposes().then((response) => {
            setLoanPurposes(response);
        });
    }, []);

    /**
     * Слушатель onSubmit на форме
     *
     * @param event событие
     */
    function submitHandler(event: any) {
        event.preventDefault();
        validateFields();
        dispatch(sendData());
    }

    /**
     * Проходит по значениям полей и проводит валидацию
     */
    const validateFields = () => {
        Object.keys(fields).forEach((key: TFields) => {
            validateField(key, fields[key]);
        });
    };

    /**
     * Слушатель onChange на полях ввода
     *
     * @param event событие
     */
    const fieldChangeHandler = (event: any) => {
        const fieldName: TFields = event.target.name;
        const value: string = event.target.value;
        dispatch(changeFieldValue({ fieldName, value }));
    };

    /**
     * Слушатель onFocus на полях ввода, скрывает состояние ошибки
     *
     * @param event событие
     */
    const fieldFocusHandler = (event: any) => {
        const fieldName: TFields = event.target.name;
        dispatch(changeError({ fieldName, value: false }));
    };

    /**
     * Слушатель onBlur на полях ввода, при выходе с поля ввода проверяет введенное значение
     *
     * @param event событие
     */
    const fieldBlurHandler = (event: any) => {
        const fieldName: TFields = event.target.name;
        const value = event.target.value;
        validateField(fieldName, value);
    };

    /**
     * Слушатель onChange на селекторе, при выборе значения скрывает состояние ошибки
     *
     * @param event событие
     */
    const changePurposeHandler = (event: any) => {
        const fieldName: TFields = event.target.name;
        const value: string = event.target.value;
        dispatch(changeFieldValue({ fieldName, value }));
        dispatch(changeError({ fieldName, value: false }));
    };

    /**
     * Проверяет введенное значение и их наличие, показывает состояние ошибки
     *
     * @param fieldName имя поля
     * @param value значение поля
     */
    const validateField = (fieldName: TFields, value: string) => {
        switch (fieldName) {
            case 'firstName':
            case 'secondName':
            case 'thirdName': {
                if (isNameInvalid(value) || !value) {
                    dispatch(changeError({ fieldName, value: true }));
                }
                break;
            }
            case 'email': {
                if (isEmailInvalid(value) || !value) {
                    dispatch(changeError({ fieldName, value: true }));
                }
                break;
            }
            case 'phone': {
                if (isPhoneInvalid(value) || !value) {
                    dispatch(changeError({ fieldName, value: true }));
                }
                break;
            }
            case 'purpose': {
                if (!value) {
                    dispatch(changeError({ fieldName, value: true }));
                }
                break;
            }
            default: {
            }
        }
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '90%' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                select
                label="Цель кредита"
                name="purpose"
                variant="filled"
                value={fields.purpose}
                error={errors.purpose}
                helperText={errors.purpose && 'Выберите цель кредита'}
                onChange={changePurposeHandler}
            >
                {loanPurposes.map((option, index) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                label="Фамилия"
                name="firstName"
                variant="filled"
                value={fields.firstName}
                error={errors.firstName}
                helperText={errors.firstName && 'Введите корректные данные'}
                onChange={fieldChangeHandler}
                onFocus={fieldFocusHandler}
                onBlur={fieldBlurHandler}
            />
            <TextField
                label="Имя"
                name="secondName"
                variant="filled"
                value={fields.secondName}
                error={errors.secondName}
                helperText={errors.secondName && 'Введите корректные данные'}
                onChange={fieldChangeHandler}
                onFocus={fieldFocusHandler}
                onBlur={fieldBlurHandler}
            />
            <TextField
                label="Отчество"
                name="thirdName"
                variant="filled"
                value={fields.thirdName}
                error={errors.thirdName}
                helperText={errors.thirdName && 'Введите корректные данные'}
                onChange={fieldChangeHandler}
                onFocus={fieldFocusHandler}
                onBlur={fieldBlurHandler}
            />
            <TextField
                label="Email"
                name="email"
                variant="filled"
                value={fields.email}
                error={errors.email}
                helperText={errors.email && 'Введите корректный email'}
                onChange={fieldChangeHandler}
                onFocus={fieldFocusHandler}
                onBlur={fieldBlurHandler}
            />
            <TextField
                label="Телефон"
                name="phone"
                variant="filled"
                value={fields.phone}
                error={errors.phone}
                helperText={errors.phone && 'Некорректный номер телефона'}
                onChange={fieldChangeHandler}
                onFocus={fieldFocusHandler}
                onBlur={fieldBlurHandler}
            />
            <Button variant="contained" type="submit" onClick={submitHandler}>
                Submit
            </Button>
        </Box>
    );
};

export default ProfileForm;
