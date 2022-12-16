import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import TelegramIcon from '@mui/icons-material/Telegram';
import Typography from '@mui/material/Typography';
import Stack from '@mui/system/Stack';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

export default function MyCard({ value }) {
    return (
        <Card
            sx={{
                maxWidth: 345,
                border: '2px solid #b2b2b2',
                borderRadius: '10px',
                boxShadow: 'inset 0 -15px 0 0 #750b0b'
            }}
        >
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0}
                sx={{
                    width: '100%',
                    height: '100%',
                    marginBottom: '25px'
                }}
            >
                <CardMedia
                    component="img"
                    image={value.image}
                    alt="tablet-image"
                    sx={{
                        borderRadius: '10px',
                        height: '250px',
                        width: '95%',
                        marginTop: '8px'
                    }}
                />
                <Typography
                    gutterBottom
                    variant="body1"
                    sx={{
                        fontWeight: '800',
                        margin: '0px',
                        marginTop: '10px'
                    }}
                >
                    {value.name}
                </Typography>
                <Typography
                    gutterBottom
                    variant="h6"
                    sx={{
                        fontWeight: '800',
                        margin: '0px'
                    }}
                >
                    <span style={{ color: '#740b09' }}> Rs {value.prize} </span>/
                    <span style={{ color: '#686868', fontSize: '14px' }}> Stripe</span>
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: '600',
                        marginTop: '20px'
                    }}
                >
                    {value.shopName}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        margin: '0px',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        color: '#686868'
                    }}
                >
                    {value.shopAddress}
                </Typography>
            </Stack>
            <Divider />
            <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IconButton sx={{ borderRadius: '0px', color: '#168687', fontWeight: '600', mb: 1 }}>
                    <TelegramIcon fontSize="large" sx={{ mr: 1 }} />
                    Contact Supplier
                </IconButton>
            </CardActions>
        </Card>
    );
}