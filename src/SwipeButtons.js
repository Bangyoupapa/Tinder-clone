import React from "react";
import styled from "@emotion/styled";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";

const StyledSwipedButtons = styled.div`
  position: fixed;
  bottom: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const StyledIconButton = styled(IconButton)`
  background-color: white;
  box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.3);
`;

const StyledRepeatButton = styled(StyledIconButton)`
  padding: 3vw;
  color: #f5b748;
`;

const StyledLeftButton = styled(StyledIconButton)`
  padding: 3vw;
  color: #ec5e6f;
`;

const StyledStarButton = styled(StyledIconButton)`
  padding: 3vw;
  color: #62b4f9;
`;

const StyledFavoriteButton = styled(StyledIconButton)`
  padding: 3vw;
  color: #76e2b3;
`;

const StyledFlashOnButton = styled(StyledIconButton)`
  padding: 3vw;
  color: #915dd1;
`;

const SwipeButtons = () => {
  return (
    <StyledSwipedButtons>
      <StyledRepeatButton>
        <ReplayIcon />
      </StyledRepeatButton>
      <StyledLeftButton>
        <CloseIcon />
      </StyledLeftButton>
      <StyledStarButton>
        <StarRateIcon />
      </StyledStarButton>
      <StyledFavoriteButton>
        <FavoriteIcon />
      </StyledFavoriteButton>
      <StyledFlashOnButton>
        <FlashOnIcon />
      </StyledFlashOnButton>
    </StyledSwipedButtons>
  );
};

export default SwipeButtons;
