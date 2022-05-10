import React from 'react';
import { Box, height, padding } from '@mui/system';
import {
    Stack,
    Avatar,
    Typography,
    Divider,
    IconButton,
    Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
interface DescriptionPanelProps {
    descriptionText: string;
}

export const PostDescription: React.FC<DescriptionPanelProps> = (props) => {
    const [panelExpanded, setPanelExpanded] = React.useState(false);
    const sliceParagraph = (isExpanded: boolean, paragraph: string) => {
        if (!isExpanded && paragraph.length >= 200) {
            return paragraph.substring(0, 200) + '...';
        }

        return paragraph;
    };
    const onPanelCollapse = () => {
        setPanelExpanded(!panelExpanded);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1
            }}>
            <Box
                sx={{
                    maxHeight: panelExpanded ? '100%' : '8rem',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    transition: 'max-height 0.15s ease-out'
                }}>
                <Typography variant="body1" color="initial">
                    {sliceParagraph(panelExpanded, props.descriptionText)}
                </Typography>
            </Box>
            <Box>
                <Divider textAlign="right">
                    <Chip
                        label={panelExpanded ? 'View Less' : 'View More'}
                        onDelete={onPanelCollapse}
                        onClick={onPanelCollapse}
                        deleteIcon={
                            panelExpanded ? (
                                <ExpandLessIcon />
                            ) : (
                                <ExpandMoreIcon />
                            )
                        }
                        variant="outlined"
                    />
                </Divider>
            </Box>
        </Box>
    );
};
