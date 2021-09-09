import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import './Contact.css'

function Contact({modal, toggle}) {
    return (
      <Modal isOpen={modal} toggle={toggle} className = '' >
      <ModalHeader toggle={toggle} > CONTACT US</ModalHeader>
      <ModalBody>
      <Form>
     <FormGroup>
        <Label for="name">Name</Label>
        <Input type='text' placeholder = 'Enter Your Name' required />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type = 'email' placeholder = 'Enter Your Email' required/>
      </FormGroup>
      <FormGroup>
        <Label for="phoneNumber">Phone Number</Label>
        <Input  type = 'tel' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder = 'Enter Your Number' required />
      </FormGroup>
      <FormGroup>
        <Label for="message">Message</Label>
        {/* <Input type='textarea' row='5' placeholder = 'Your Message'/> */}
        <textarea name="message" id="messsage" cols="63" rows="7" placeholder = 'Your Message'></textarea>
      </FormGroup>
      
    </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>Send Message</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
    )
}

export default Contact
