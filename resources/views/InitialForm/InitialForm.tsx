import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '../../store/reducers/root';
import { setPageLoaded } from '../../store/actions/common';
import { Link } from '@mui/material';

export const InitialForm: React.FC = () => {
    const dispatch = useDispatch();
    const pageLoaded = useSelector((state: TRootState) => state.common.pageLoaded);

    dispatch(setPageLoaded());

    console.log({ pageLoaded });

    return (
        <>
            InitialForm
            <p>{pageLoaded && 'pageLoaded'}</p>
            <Link href="/myform">to my form page</Link>
        </>
    );
};
