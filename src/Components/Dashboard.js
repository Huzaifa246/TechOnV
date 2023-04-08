import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BarChartIcon from '@mui/icons-material/BarChart';
import LineChart from './LineChart';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Dashboard() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Item>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                            Open Another Account
                                            <br />
                                            Transactions accounts
                                        </Typography>
                                        <Button size="small" style={{ border: "outline" }}>Now</Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Item>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <Button style={{ border: "outline", fontSize: "xx-large" }}>
                                            <MonetizationOnIcon sx={{ fontSize: 50 }} />
                                        </Button>
                                        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                            Open Another Account
                                            <br />
                                            Transactions accounts
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Item>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <Button style={{ border: "outline", fontSize: "xx-large" }}>
                                            <MonetizationOnIcon sx={{ fontSize: 50 }} />
                                        </Button>
                                        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                            Open Another Account
                                            <br />
                                            Transactions accounts
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Item>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <Button style={{ border: "outline", fontSize: "xx-large" }}>
                                            <MonetizationOnIcon sx={{ fontSize: 50 }} />
                                        </Button>
                                        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                            Open Another Account
                                            <br />
                                            Transactions accounts
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Item>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
                <br />
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                                        Credit Card
                                        <br />
                                        <b>$35000</b>
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <BarChartIcon sx={{ fontSize: 50, margin: '0', marginRight: '-14px' }} color="primary" />
                                    <BarChartIcon sx={{ fontSize: 50, margin: '0' }} color="primary" />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', border: "none" }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                                        Debit Card Balance
                                        <br />
                                        <b>$35000</b>
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <BarChartIcon sx={{ fontSize: 50, margin: '0', marginRight: '-14px' }} color="secondary" />
                                    <BarChartIcon sx={{ fontSize: 50, margin: '0' }} color="secondary" />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', border: "none" }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                                        Current Balance
                                        <br />
                                        <b>$35000</b>
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <BarChartIcon sx={{ fontSize: 50, margin: '0', marginRight: '-14px' }} color="primary" />
                                    <BarChartIcon sx={{ fontSize: 50, margin: '0' }} color="primary" />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', border: "none" }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                                        Current Balance
                                        <br />
                                        <b>$35000</b>
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <BarChartIcon sx={{ fontSize: 50, margin: '0', marginRight: '-14px' }} color="secondary" />
                                    <BarChartIcon sx={{ fontSize: 50, margin: '0' }} color="secondary" />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <br />
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item>Swiper COMING SOON</Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>
                        LineChart Coming SOON!!!
                    </Item>
                </Grid>
            </Grid>
        </>
    );
}