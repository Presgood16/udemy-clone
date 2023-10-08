import styled from 'styled-components'; 

export const Box = styled.div` 
padding: 120px 40px 30px; 
background: #F0F8FF; 
font-family: 'Raleway', sans-serif;
margin-top: 100px;
width: 100%; 
color: black;


@media (max-width: 1000px) { 
	padding: 70px 30px; 
} 
`; 

export const Container = styled.div` 
	display: flex; 
	flex-direction: column; 
	justify-content: center; 
	max-width: 1000px; 
	margin: 0 auto; 
	/* background: red; */
` 

export const Column = styled.div` 
display: flex; 
flex-direction: column; 
text-align: left; 
margin-left: 60px; 
`; 

export const Row = styled.div` 
display: grid; 
grid-template-columns: repeat(auto-fill, 
						minmax(185px, 1fr)); 
grid-gap: 20px; 

@media (max-width: 1000px) { 
	grid-template-columns: repeat(auto-fill, 
						minmax(200px, 1fr)); 
} 
`; 

export const FooterLink = styled.a` 
color: #000; 
margin-bottom: 20px; 
font-size: 18px; 
text-decoration: none; 
font-weight: 500;

&:hover { 
	color: #D2B48C; 
	transition: 200ms ease-in; 
} 
`; 

export const Heading = styled.p` 
font-size: 24px; 
color: #fff; 
margin-bottom: 40px; 
font-weight: bold; 
`; 
