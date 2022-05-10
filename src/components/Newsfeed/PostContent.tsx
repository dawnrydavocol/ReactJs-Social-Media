import React from 'react';
import { Box, Card, CardMedia, Typography, CardContent } from '@mui/material';

export default function PostContent() {
    return (
        <Card variant="outlined">
            <CardMedia
                component="img"
                alt="green iguana"
                height="420"
                image="https://picsum.photos/200/300"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lorem Ipsum
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Amet, veniam similique laborum repellat optio corrupti
                    consequuntur? Magnam cupiditate magni enim totam, ratione
                    vero quo voluptatum aut, eveniet eligendi explicabo a.
                </Typography>
            </CardContent>
        </Card>
    );
}
