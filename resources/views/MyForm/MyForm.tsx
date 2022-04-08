import React from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { Box, Link } from '@mui/material';
import MyModal from '../../components/MyModal/MyModal';

const MyForm: React.FC = () => {
    return (
        <Box>
            <Link href="/">Back to main page</Link>
            <ProfileForm />
            <MyModal />
        </Box>
    );
};

export default MyForm;
