import React from 'react';
import Button from '@mui/material/Button';
import '../Button/allButton.scss';
export default function ViewMoreButton() {
    return (
        <Button className='view_more' size="medium" variant="text" color="primary">View more<span>→</span></Button>
    );
}