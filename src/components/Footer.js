import React from "react"; 
import { 
  Box, 
  Container, 
  Row, 
  Column, 
  FooterLink, 
  Heading, 
} from "./FooterStyles"; 
  
const Footer = () => { 
  return ( 
    <Box> 
      <h1 style={{ color: "black",  
                   textAlign: "center",  
                   marginTop: "-50px",
                   marginBottom: "30px",}}
                   className='navbar-brand text-uppercase ls-1 fw-8'> 
        <span>U</span>demy 
      </h1> 
      <Container> 
        <Row> 
          <Column> 
            {/* <Heading>About Us</Heading>  */}
            <FooterLink href="#">Udemy business</FooterLink>
            <FooterLink href="#">Teach on Udemy</FooterLink> 
            <FooterLink href="#">Get the app</FooterLink> 
            <FooterLink href="#">Investors</FooterLink> 
          </Column> 
          <Column> 
            {/* <Heading>Services</Heading>  */}
            <FooterLink href="#">Careers</FooterLink> 
            <FooterLink href="#">Blog</FooterLink> 
            <FooterLink href="#">About Us</FooterLink> 
            <FooterLink href="#">Contact Us</FooterLink> 
          </Column> 
          <Column> 
            {/* <Heading>Contact Us</Heading>  */}
            <FooterLink href="#">Login</FooterLink> 
            <FooterLink href="#">Join Us</FooterLink> 
            <FooterLink href="#">Courses</FooterLink> 
            <FooterLink href="#">Help and Support</FooterLink> 
          </Column>
          <Column> 
            {/* <Heading>Contact Us</Heading>  */}
            <FooterLink href="#">Terms</FooterLink> 
            <FooterLink href="#">Privacy</FooterLink> 
            <FooterLink href="#">Cookie settings</FooterLink> 
            <FooterLink href="#">Accessibility statement</FooterLink> 
          </Column>
          <p>Taiwo © 2022</p>  
        </Row> 
      </Container> 
    </Box> 
  ); 
}; 
export default Footer;