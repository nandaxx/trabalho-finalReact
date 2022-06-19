import React from "react";
import {Form, Button}  from 'react-bootstrap';

export const Registro = () => {
    return (
    <>
    <Form>
    <Form.Text className="text-muted">
       <h4 style={{ color:'black', marginTop:'3px'}}>Registre-se</h4> 
    </Form.Text>
    <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label> Nome e Sobrenome</Form.Label>
    <Form.Control type="nome" placeholder="Nome"s/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCPF">
    <Form.Label>CPF</Form.Label>
    <Form.Control type="CPF" placeholder="... ... ... .." />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicDate">
    <Form.Label>Data de nascimento</Form.Label>
    <Form.Control type="date" placeholder="dd/mm/yyyy"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPhone">
    <Form.Label>Telefone</Form.Label>
    <Form.Control type="phone" placeholder=".. ........." />
  </Form.Group>
  <Button variant="dark" type="submit">
    Registro
  </Button>
</Form>
    </>
    );
}