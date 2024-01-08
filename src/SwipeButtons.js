import React from "react";
import styled from "@emotion/styled";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";

const StyledSwipedButtons = styled.div``;

const StyledIcon = styled(IconButton)``;

const SwipeButtons = () => {
  return (
    <StyledSwipedButtons>
      <StyledIcon>
        <ReplayIcon />
      </StyledIcon>
      <StyledIcon>
        <CloseIcon />
      </StyledIcon>
      <StyledIcon>
        <StarRateIcon />
      </StyledIcon>
      <StyledIcon>
        <FavoriteIcon />
      </StyledIcon>
      <StyledIcon>
        <FlashOnIcon />
      </StyledIcon>
    </StyledSwipedButtons>
  );
};

export default SwipeButtons;
