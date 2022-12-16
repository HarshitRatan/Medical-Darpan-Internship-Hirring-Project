import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const MyBreadCrumbs = () => {
    return (
        <div>
            <Breadcrumbs separator="›" sx={{ mb: 2 }}>
                <Link underline="hover" sx={{ color: '#6f6a6a', fontWeight: '550' }}>
                    Medical Darpan
                </Link>
                <Link underline="hover" sx={{ color: '#6f6a6a', fontWeight: '550' }}>
                    Search
                </Link>
                <Link underline="hover" sx={{ color: '#131313', fontWeight: '550' }}>
                    FabiFlu Tablet
                </Link>
            </Breadcrumbs>
        </div>
    )
}

export default MyBreadCrumbs
