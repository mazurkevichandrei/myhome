import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

const StyledLink = styled(NavLink).attrs({ activeClassName })`
    text-decoration: none;
    color: grey;
    opacity: .5;
    &:hover{
        opacity: .8;
        }
    &.${activeClassName}  {
        opacity: 1;
        }
  `;

export default StyledLink;