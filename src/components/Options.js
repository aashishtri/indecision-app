import React from 'react'
import Option from './Option';
import { Button, Container, Row, Col, ListGroup,ListGroupItem, ListGroupItemHeading } from 'reactstrap';
const Options = (props) => {
    return (
        <div>
            <Container>
                <Row >
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <ListGroup >
                        <ListGroupItem style={{display:"flex",justifyContent:"space-between",backgroundColor:"purple"}}>
                            <strong style={{fontSize:"1.25rem",color:"#8b8fb5"}}>Your Option</strong>
                            <Button 
                                color=""
                                style={{color:"#8b8fb5",padding:"0"}}
                                onClick={props.handleRemoveAll}
                                
                            ><big>Remove All</big></Button>
                        </ListGroupItem>
                        
                        {props.options.map((option, index) => {
                                return (
                                    
                                    <Option key={index} option={option} handleRemoveOne={props.handleRemoveOne} index={index} />
                                    
                                );
                                
                            })}
                        
                            
                        
                        
                        {props.options.length === 0 && 
                        <ListGroupItem style={{backgroundColor:"purple",display:"flex",justifyContent:"center"}}>
                        <p style={{fontSize:"1.25rem",color:"silver", alignSelf :"center"}}>Please add an option to get started</p>
                        </ListGroupItem>}
                        </ListGroup>
                        </Col>
                </Row>
            </Container>


        </div >
    );

}
export default Options;