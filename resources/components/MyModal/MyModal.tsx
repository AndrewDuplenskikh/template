import React from 'react';
import { Button, Dialog } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '../../store/reducers/root';
import { changeShowModal } from '../../store/actions/my-form';

const MyModal: React.FC = () => {
    const isOpen = useSelector((state: TRootState) => state.myFormReducer.showModal);
    const resp = useSelector((state: TRootState) => state.myFormReducer.resp);
    const dispatch = useDispatch();

    return (
        <Dialog
            open={isOpen}
            disableEscapeKeyDown={true}
            onClose={() => {
                dispatch(changeShowModal(false));
            }}
        >
            <p>{JSON.stringify(resp)}</p>
            <Button
                onClick={() => {
                    dispatch(changeShowModal(false));
                }}
            >
                close modal
            </Button>
        </Dialog>
    );
};

export default MyModal;
