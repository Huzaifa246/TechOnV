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

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function Dashboard() {

    const data = [
        { name: "Jan", uv: 4000, pv: 2400 },
        { name: "Feb", uv: 3000, pv: 1398 },
        { name: "Mar", uv: 2000, pv: 9800 },
        { name: "Apr", uv: 2780, pv: 3908 },
        { name: "May", uv: 1890, pv: 4800 },
        { name: "Jun", uv: 2390, pv: 3800 },
        { name: "Jul", uv: 3490, pv: 4300 },
        { name: "Aug", uv: 4000, pv: 2400 },
        { name: "Sep", uv: 3000, pv: 1398 },
        { name: "Oct", uv: 2000, pv: 9800 },
        { name: "Nov", uv: 2780, pv: 3908 },
        { name: "Dec", uv: 1890, pv: 4800 }
    ];
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
                <Grid item xs={12} md={4}>
                    <Item>
                        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                            My Cards
                        </Typography>
                        <hr />

                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="https://images.unsplash.com/photo-1613243555988-441166d4d6fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JlZGl0JTIwY2FyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </SwiperSlide>
                        </Swiper>
                    </Item>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Item>
                        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                            Transaction Trending
                        </Typography>
                        <hr />
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart width={1100} height={300} data={data}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer >
                    </Item>
                </Grid>
            </Grid>


        </>
    );
}