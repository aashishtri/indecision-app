import React from 'react';
import ReactDOM from 'react-dom';
import { Button,Container,Row,Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            options: this.props.options,
        }

    }
    addOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value;
        e.target.elements.option.value = '';
        this.props.handleAddOption(option.trim());
    }
    render() {

        return (
            <Container style={{marginTop:"10px"}}>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Form onSubmit={this.addOption} display="block">
                        <FormGroup >
                            <Row>
                            <Col md="8">
                            <Input   type="text" name="option" id="exampleEmail" placeholder="with a placeholder" />
                            </Col>
                            <Col md="4">
                            <Button className="btn-block"
                            color="primary"
                            type="submit"
                            >Add option</Button>
                            </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                    </Col>
                </Row>
            </Container>
            
        );
    }
};