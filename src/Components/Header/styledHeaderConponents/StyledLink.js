import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activelassname = "active";

const StyledLink = styled(NavLink).attrs({ activelassname })`
    text-decoration: none;
    color: grey;
    opacity: .5;
    &:hover{
        opacity: .8;
        }
    &.${activelassname}  {
        opacity: 1;
        }
  `;

export default StyledLink;