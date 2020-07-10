import React,{ useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const OptionModal = (props) => {
  
    const {
        selectedOption,
        handleClearModal
      } = props;
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);
    
      return (
        <div>
          <Modal isOpen={!!selectedOption} modalTransition={{ timeout: 200 }} backdropTransition={{ timeout: 400 }}
            toggle={handleClearModal} size="sm"   centered >
            <ModalHeader 
              
              className="align-self-center"
            >
              <big>Your Option</big>
            </ModalHeader>
            <ModalBody className="align-self-center" 
            ><h2>{selectedOption}</h2></ModalBody>
            <ModalFooter className="align-self-center">
              <Button size="lg" color="danger" onClick={handleClearModal}>Okay</Button>{' '}
            </ModalFooter>
          </Modal>
        </div>
      
    );
  }
  
  export default OptionModal;