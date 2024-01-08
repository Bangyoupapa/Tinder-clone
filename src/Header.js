import React from "react";
import styled from "@emotion/styled";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import HeaderIcon from "@mui/icons-material/Headphones";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import tinder from "./images/tinder.png";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f9f9f9;
`;
// Your header styles here

function Header({ backButton }) {
  const history = useNavigate();
  return (
    //BEM
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" claaName="header_icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header_icon" fontSize="large"></PersonIcon>
        </IconButton>
      )}

      <StyledHeader>
        <IconButton>
          <HeaderIcon fontSize="large" />
        </IconButton>
        <img src={tinder} height={50} width={50} alt="tinder logo" />
        <Link to="/">
          <img
            className="header_logo"
            height={50}
            width={50}
            src={tinder}
            alt="tinder logo"
          />
        </Link>
        <Link to="/chat">
          <IconButton>
            <HeaderIcon as={ForumIcon} fontSize="large" />
          </IconButton>
        </Link>
      </StyledHeader>
    </div>
  );
}

export default Header;
