import React from "react";
import styled from "@emotion/styled";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import HeaderIcon from "@mui/icons-material/Headphones";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import tinder from "./images/tinder.png";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f9f9f9;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 40px;
  object-fit: contain;
`;

// Your header styles here

const Header = ({ backButton }) => {
  const navigate = useNavigate();
  return (
    //BEM
    <HeaderContainer>
      {backButton ? (
        <IconButton onClick={() => navigate(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header_icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header_icon" fontSize="large" />
        </IconButton>
      )}
      <Link to="/">
        <LogoImage className="header_logo" src={tinder} alt="tinder logo" />
      </Link>
      <Link to="/chat">
        <IconButton>
          <HeaderIcon as={ForumIcon} fontSize="large" />
        </IconButton>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
