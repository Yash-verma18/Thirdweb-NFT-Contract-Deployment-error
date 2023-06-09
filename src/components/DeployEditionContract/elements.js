import { Box, styled } from "@mui/material";

export const SubHeading = styled(Box)(({ theme }) => ({
  ...theme?.typography?.h6,
  color: theme?.palette.text.primary,
}));

export const InformationDescription = styled(Box)(({ theme, type, color }) => ({
  ...theme?.typography?.h9,
  color: color
    ? color
    : type === "error"
    ? theme?.palette?.red?.main
    : theme?.palette.text.label,
}));
