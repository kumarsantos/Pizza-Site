
import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaPizzaSlice} from 'react-icons/fa';

export const Nav=styled.nav`
background:#242424;
height:80px;
display:flex;
justify-content:center;
font-weight:700;
`;

export const NavLink=styled(Link)`
color:#fff;
font-size:3rem;
display:flex;
align-items:center;
text-decoration:none;
cursor:pointer;
&:hover{text-decoration:none;color:#fff;}
@media screen and (max-width:400px)
{
    position:absolute;
    top:10px;
    left:25px;  
}
`;

export const NavIcon=styled.div`
display:block;
position:absolute;
display:flex;
top:0;
right:0;
cursor:pointer;
color:#fff;
p{
    transform:translate(-120%,100%);
    font-weight:bold;
    &:hover{
        color:yellow;
    }
    
}
`;

export const Bars=styled(FaPizzaSlice)`
display:block;
position:absolute;
top:25px;
right:10;
cursor:pointer;
color:#fff;
font-size:26px;
&:hover{
    color:yellow;
}
`;