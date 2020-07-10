import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    Col,
    Container,
    Row,
    Jumbotron
} from 'reactstrap';
import '../styles/styles.css'
const Header = () => {
    return (
        <Jumbotron fluid>
            <Container >
                <Row className="d-flex justify-content-left" style={{paddingTop:'50px 0'}} >
                    <Col sm="12" md={{ size: 6, offset: 3 }} style={{color:"#4c49cc"}}>
                        <h1 style={{color:"#8986f0"}}>Indecison</h1>
                        <h3 style={{color:"#8b7ad6"}}>Put your life in hands of a computer</h3>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        );
}
export default Header;