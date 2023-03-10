import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import CloseIcon from '@mui/icons-material/Close';

const LeftSideComponent = ({ value, heading }) => {

    const style_Before = {
        width: '100%',
        maxHeight: '80px',
        display: 'flex',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px'
    }

    const style_After = {
        width: '100%',
        maxHeight: '80px',
        display: 'flex',
        backgroundColor: '#00a69c',
        color: '#e8f1f8',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px'
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
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: '#fff',
                    padding: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}
            >
                {
                    value.map((val) => (
                        <Box key={val}>
                            <Checkbox
                                sx={{
                                    borderRadius: '0px',
                                    "&:hover": {
                                        backgroundColor: '#fff'
                                    }
                                }}
                                checked={val === "Aceclofenac" || val === "500mg"}
                                icon={
                                    <>
                                        <Box sx={style_Before}>
                                            <Typography variant="body2" sx={{ fontWeight: '400' }}>
                                                {val}
                                            </Typography>
                                        </Box>
                                    </>
                                }
                                checkedIcon={
                                    <>
                                        <Box sx={style_After}>
                                            <Typography variant="body2" sx={{ fontWeight: '400' }}>
                                                {val}
                                            </Typography>
                                            <CloseIcon />
                                        </Box>
                                    </>
                                }
                            />
                            <br />
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}

export default LeftSideComponent;
