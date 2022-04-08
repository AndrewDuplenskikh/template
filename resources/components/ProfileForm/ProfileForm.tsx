import React from 'react';
import { TextField, MenuItem, Link, Box, Button } from '@mui/material';
import {
    changeFirstName,
    changeSecondName,
    changeThirdName,
    changePurpose,
    changeEmail,
    changePhone,
    changeError,
    changeShowModal,
    setResp,
} from '../../store/actions/my-form';
import { connect } from 'react-redux';
import { TRootState } from '../../store/reducers/root';
import './ProfileForm.scss';
import { isNameInvalid } from '../../utils/isNameInvalid';
import { isEmailInvalid } from '../../utils/isEmailInvalid';
import { isPhoneInvalid } from '../../utils/isPhoneInvalid';
import axios from 'axios';

const loanPurposes = [
    {
        label: 'Покупка телевизора',
        value: 'tv',
    },
    {
        label: 'Покупка авто',
        value: 'auto',
    },
    {
        label: 'Покупка квартиры',
        value: 'apartment',
    },
];

const ProfileForm: React.FC = (props: any) => {
    async function submitHandler(e: any) {
        e.preventDefault();
        const areErrorsExist = validateFields();
        console.log(areErrorsExist);
        if (areErrorsExist) {
            return;
        }
        const resp = await axios
            .post('https://jsonplaceholder.typicode.com/posts', {
                title: props.purpose,
                body: props.email,
                userId: props.firstName,
                name: props.secondName,
            })
            .then((resp) => {
                props.setResp(resp);
                props.changeShowModal(true);
            });
    }

    function validateFields(): boolean {
        let areErrorsExist = false;
        if (!props.purpose) {
            props.changeError({ purpose: true });
            areErrorsExist = true;
        }
        if (!props.firstName || isNameInvalid(props.firstName)) {
            props.changeError({ firstName: true });
            areErrorsExist = true;
        }
        if (!props.secondName || isNameInvalid(props.secondName)) {
            props.changeError({ secondName: true });
            areErrorsExist = true;
        }
        if (!props.thirdName || isNameInvalid(props.thirdName)) {
            props.changeError({ thirdName: true });
            areErrorsExist = true;
        }
        if (!props.email || isEmailInvalid(props.email)) {
            props.changeError({ email: true });
            areErrorsExist = true;
        }
        if (!props.phone || isPhoneInvalid(props.phone)) {
            props.changeError({ phone: true });
            areErrorsExist = true;
        }
        return areErrorsExist;
    }

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
                variant="filled"
                value={props.purpose}
                error={props.errors.purpose}
                helperText={props.errors.purpose && 'Выберите цель кредита'}
                onChange={(e) => props.changePurpose(e.target.value)}
            >
                {loanPurposes.map((option, index) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                label="Фамилия"
                variant="filled"
                value={props.firstName}
                error={props.errors.firstName}
                helperText={props.errors.firstName && 'Введите корректные данные'}
                onChange={(e) => props.changeFirstName(e.target.value)}
                onFocus={() => props.changeError({ firstName: false })}
                onBlur={(e) => props.changeError({ firstName: isNameInvalid(e.target.value) })}
            />
            <TextField
                label="Имя"
                variant="filled"
                value={props.secondName}
                error={props.errors.secondName}
                helperText={props.errors.secondName && 'Введите корректные данные'}
                onChange={(e) => props.changeSecondName(e.target.value)}
                onFocus={() => props.changeError({ secondName: false })}
                onBlur={(e) => props.changeError({ secondName: isNameInvalid(e.target.value) })}
            />
            <TextField
                label="Отчество"
                variant="filled"
                value={props.thirdName}
                error={props.errors.thirdName}
                helperText={props.errors.thirdName && 'Введите корректные данные'}
                onChange={(e) => {
                    props.changeThirdName(e.target.value);
                }}
                onFocus={() => props.changeError({ thirdName: false })}
                onBlur={(e) => props.changeError({ thirdName: isNameInvalid(e.target.value) })}
            />
            <TextField
                label="Email"
                variant="filled"
                value={props.email}
                error={props.errors.email}
                helperText={props.errors.email && 'Введите корректный email'}
                onChange={(e) => {
                    props.changeEmail(e.target.value);
                }}
                onFocus={() => props.changeError({ email: false })}
                onBlur={(e) => props.changeError({ email: isEmailInvalid(e.target.value) })}
            />
            <TextField
                label="Телефон"
                variant="filled"
                value={props.phone}
                error={props.errors.phone}
                helperText={props.errors.phone && 'Некорректный номер телефона'}
                onChange={(e) => {
                    props.changePhone(e.target.value);
                }}
                onFocus={() => props.changeError({ phone: false })}
                onBlur={(e) => props.changeError({ phone: isPhoneInvalid(e.target.value) })}
            />
            <Button variant="contained" type="submit" onClick={(e) => submitHandler(e)}>
                Submit
            </Button>
        </Box>
    );
};

function mapStateToProps(state: TRootState) {
    return {
        firstName: state.myFormReducer.firstName,
        secondName: state.myFormReducer.secondName,
        thirdName: state.myFormReducer.thirdName,
        purpose: state.myFormReducer.purpose,
        email: state.myFormReducer.email,
        phone: state.myFormReducer.phone,
        errors: state.myFormReducer.errors,
    };
}

function mapDispatchToProps() {
    return {
        changeFirstName,
        changeSecondName,
        changeThirdName,
        changePurpose,
        changeEmail,
        changePhone,
        changeError,
        changeShowModal,
        setResp,
    };
}

export default connect(mapStateToProps, mapDispatchToProps())(ProfileForm);
