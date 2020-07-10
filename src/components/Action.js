import React from 'react';
import { Button,Container,Row,Col } from 'reactstrap';
const Action = (props) => {
    return (
        <Container >
            <Row style={{padding:'10px 0'}}>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Button 
                        size="lg"
                        style={{backgroundColor:"purple",color:"silver", display:"block",width:"100%"}}
                        onClick={props.handleAction}
                        disabled={props.disabled}
                    >what should i do?</Button>
                </Col>
            </Row>
        </Container>
    );
}
export default Action;