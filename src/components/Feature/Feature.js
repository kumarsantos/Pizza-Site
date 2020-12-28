import styled from 'styled-components'
import Img4 from '../../images/pizza-6.jpg'

export const FeatureContainer=styled.div`
background:linear-gradient(to right,rgba(0,0,0,0.2),
rgba(0,0,0,0.1)), url(${Img4});
height:100vh;
max-height:610px;
background-position:center;
background-size:cover;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:0 1rem;
color:#fff;
text-align:center;
h1{
    font-size:clamp(3rem,5vw,5rem);
}
p{
    margin-bottom:1rem;
    font-size:clamp(1rem,3vw,2rem);
}
`;

export const FeatureButton=styled.button`
font-size:1.4rem;
padding: 0.6rem 3rem;
border:none;
background:#ffc500;
color:#000;
transition: 0.2s ease-out;

&:hover{
    background:#e31837;
    color:#fff;
    transition:0.2s ease-out;
    cursor:pointer;
    
}
`;