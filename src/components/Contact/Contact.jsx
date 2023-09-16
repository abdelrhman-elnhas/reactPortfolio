import React , {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import {Section , Container , Title , Desc, Form , Input , TextArea , Button , Notification} from "./Contact.styles";



function Contact() {

  const ref = useRef();
  const [success , setSuccess] = useState(null);
  const [emptyName , setEmptyName] = useState("");
  const [emptyEmail , setEmptyEmail] = useState("");
  const [emptyPhone , setEmptyPhone] = useState("");
  const [emptyMessage , setEmptyMessage] = useState("");

  const handleSubmit = e =>{
    e.preventDefault();


    emailjs.sendForm('service_1785r9m', 'template_z6ijbov', ref.current, 'FOrDf5VMHPSlY4dhW')
        .then((result) => {
            console.log(result.text);
            setSuccess(true);
        }, (error) => {
            console.log(error.text);
            setSuccess(false);
        });
      setEmptyName("");
      setEmptyEmail("");
      setEmptyPhone("");
      setEmptyMessage("");
    };
  
  return (
    <Section id='contact'>
      <Container>
          <Title>&lt; Contact Us &gt;</Title>
          <Desc>Any Questions or Remarks? Just write me a message</Desc>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Input placeholder='Name' required type='name' name="name"  onChange={(e)=> setEmptyName(e.target.value)} value={emptyName}></Input>
            <Input placeholder='Email' required type='email' name="email"  onChange={(e)=> setEmptyEmail(e.target.value)} value={emptyEmail}></Input>
            <Input placeholder='Phone Number'  type='number' name="phone"  onChange={(e)=> setEmptyPhone(e.target.value)} value={emptyPhone}></Input>
            <TextArea placeholder='Write Your Message Here...' required name="message" rows={5} onChange={(e)=> setEmptyMessage(e.target.value)} value={emptyMessage}></TextArea>
            <Button type='submit'>Send Message</Button>
            {success && <Notification>Your message has been sent. We'll get back to you soon... </Notification>}
          </Form> 
      </Container>
    </Section>
  )
}

export default Contact