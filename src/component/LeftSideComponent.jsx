import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const LeftSideComponent = ({ value, heading, filterArray, setFilterArray }) => {

    const style_Before = {
        width: '100%',
        maxHeight: '80px',
        display: 'flex',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px'
    }

    const handleClick = (item) => {
        if (!filterArray.includes(item)) {
            const newFilterArray = [...filterArray, item];
            setFilterArray(newFilterArray);
        } else {
            const newFilterArray = filterArray.filter((value) => value !== item);
            setFilterArray(newFilterArray);
        }
    }
    return (
        <Box sx={{ maxWidth: '150px', padding: '5px', mb: 1 }}>
            <Box
                sx={{
                    width: '100%',
                    maxHeight: '80px',
                    backgroundColor: '#d9d9d9',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '5px'
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: '600'
                    }}
                >
                    {heading}
                </Typography>
            </Box>
            {
                value.map((val) => (
                    <Box
                        key={val}
                        sx={style_Before}
                        onClick={() => handleClick(val)}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: '400'
                            }}
                        >
                            {val}
                        </Typography>
                    </Box>
                ))
            }
        </Box>
    )
}

export default LeftSideComponent;
