import React from 'react';
import { Button,Container,Row,Col, ListGroupItem } from 'reactstrap';
const Option = (props) => {

    return (
        <ListGroupItem style={{display:"flex",justifyContent:"space-between",backgroundColor:"#815cb8"}}>

            
                    <big style={{fontSize:"1.25rem",color:"#d7c4f2"}}>{props.index+1}. {props.option}</big>
                    
                       
                            <Button 
                            color=""
                            style={{color:"#d7c4f2",padding:"0"}} 
                            onClick={() => props.handleRemoveOne(props.option)}>
                                <big>Remove</big>
                            </Button>
                    

        </ListGroupItem>

    );
}
export default Option;