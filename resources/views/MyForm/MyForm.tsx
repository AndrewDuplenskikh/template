import React from 'react';
import ProfileForm from './ProfileForm/ProfileForm';
import { Box, Link } from '@mui/material';
import MyModal from './MyModal/MyModal';

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
