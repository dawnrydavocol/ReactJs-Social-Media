import { Box } from '@mui/system';
import { Stack, Avatar, Typography, Divider, IconButton } from '@mui/material';
import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyIcon from '@mui/icons-material/Reply';
import CommentIcon from '@mui/icons-material/Comment';
import CircleIcon from '@mui/icons-material/Circle';
import { PostDescription } from './PostDescription';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PostContent from './PostContent';
interface Props {
    profileImage: String;
    profileName: String;
    numberOfLikes: Number;
    numberOfShares: Number;
    location: String;
}

export function Post() {
    return (
        <Box
            sx={{
                display: 'flex',
                margin: 2
            }}>
            <Stack direction="row" spacing={1} sx={{}}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1
                    }}>
                    <Avatar sx={{ width: 48, height: 48 }}>H</Avatar>
                    <Box sx={{ height: '100%' }}>
                        <Divider orientation="vertical"></Divider>
                    </Box>
                    <CircleIcon color="primary" fontSize="small"></CircleIcon>
                </Box>
                <Box
                    px={2}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: 566,
                        gap: 3
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                        <Stack>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1
                                }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 0.5
                                    }}>
                                    <Typography
                                        fontWeight="bold"
                                        variant="body1"
                                        color="initial">
                                        Tri Dawn
                                    </Typography>
                                    <IconButton size="small">
                                        <CheckCircleIcon fontSize="inherit"></CheckCircleIcon>
                                    </IconButton>
                                </Box>
                                <Typography
                                    fontWeight="regular"
                                    variant="body1"
                                    color="initial">
                                    @tridawn123
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1
                                }}>
                                <Typography
                                    fontWeight="regular"
                                    variant="subtitle1"
                                    color="initial">
                                    40mins
                                </Typography>
                                <Typography
                                    fontWeight="regular"
                                    variant="body1"
                                    color="initial">
                                    Davao City
                                </Typography>
                            </Box>
                        </Stack>
                        <IconButton aria-label="delete" size="large">
                            <MoreHorizIcon fontSize="small" />
                        </IconButton>
                    </Box>
                    {/* Post Descriptions */}
                    <PostDescription
                        descriptionText="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum, in! Ad corrupti quos ipsum alias laudantium
                    expedita accusantium nulla ut voluptatum. Sed accusamus
                    deleniti officia ex natus cupiditate, quam aspernatur. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
                    in! Ad corrupti quos ipsum alias laudantium expedita
                    accusantium nulla ut voluptatum. Sed accusamus deleniti
                    officia ex natus cupiditate, quam aspernatur. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Nostrum, in!
                    Ad corrupti quos ipsum alias laudantium expedita accusantium
                    nulla ut voluptatum. Sed accusamus deleniti officia ex natus
                    cupiditate, quam aspernatur. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Nostrum, in! Ad corrupti quos
                    ipsum alias laudantium expedita accusantium nulla ut
                    voluptatum. Sed accusamus deleniti officia ex natus
                    cupiditate, quam aspernatur."></PostDescription>
                    {/* Post Contents */}
                    <PostContent></PostContent>
                    {/* Interaction Tab */}
                    <Stack direction="row" spacing={2}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            }}>
                            <IconButton aria-label="delete" size="small">
                                <FavoriteIcon fontSize="small" />
                            </IconButton>
                            <Typography variant="caption" color="initial">
                                12.2k
                            </Typography>
                        </Box>
                        {/* Comment */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            }}>
                            <IconButton aria-label="delete" size="small">
                                <CommentIcon fontSize="small" />
                            </IconButton>
                            <Typography variant="caption" color="initial">
                                123.2k
                            </Typography>
                        </Box>
                        {/* Share */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            }}>
                            <IconButton aria-label="delete" size="small">
                                <ReplyIcon fontSize="small" />
                            </IconButton>
                            <Typography variant="caption" color="initial">
                                1.2k
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}
