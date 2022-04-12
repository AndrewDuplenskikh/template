import React from 'react';
import { Button, Dialog } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '../../../store/reducers/root';
import { changeShowModal } from '../../../store/actions/my-form';

const MyModal: React.FC = () => {
    const showModal = useSelector((state: TRootState) => state.myFormReducer.showModal);
    const text = useSelector((state: TRootState) => state.myFormReducer.modalText);
    const dispatch = useDispatch();

    const closeModal = (): void => {
        dispatch(changeShowModal(false));
    };

    return (
        <Dialog open={showModal} disableEscapeKeyDown={true} onClose={closeModal}>
            <p>{text}</p>
            <Button onClick={closeModal}>close modal</Button>
        </Dialog>
    );
};

export default MyModal;
