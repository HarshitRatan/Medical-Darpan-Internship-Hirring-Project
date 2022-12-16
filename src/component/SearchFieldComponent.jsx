import React from 'react'
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

const SearchFieldComponent = ({ value, setValue, handleSearch }) => {

    const Search = styled('div')(() => ({
        border: '2px solid #dfdfdf',
        position: 'relative',
        borderRadius: '10px',
        backgroundColor: '#f5f5f5',
        width: 'auto',
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('xs')]: {
                width: '10ch',
            },
            [theme.breakpoints.up('sm')]: {
                width: '20ch',
            },
            [theme.breakpoints.up('md')]: {
                width: '30ch',
            },
        },
    }));

    return (
        <div>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search..."
                    autoFocus={true}
                    inputProps={{ 'aria-label': 'search' }}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
                <Button
                    variant='container'
                    sx={{
                        backgroundColor: '#00a69c',
                        color: '#e8f1f8',
                        borderRadius: '0px',
                        border: '3px solid #00a69c',
                        borderTopRightRadius: '9px',
                        borderBottomRightRadius: '9px',
                        "&:hover": {
                            backgroundColor: '#00a69c'
                        }
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Search>
        </div>
    )
}

export default SearchFieldComponent
