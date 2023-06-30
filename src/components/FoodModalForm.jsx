'use client';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';
function FoodModalForm() {
  const [show, setShow] = useState(false);
  const [food, setFood] = useState({
    nameFood: '',
    valueFood: '',
    imgFood:'',
    descFood: '',
    categoryFood: ''

  });


  const handleClose = () => setShow(false);

  function handleShow() {
    setShow(true);
  }

  function handleTypedChar(event) {
    const { name, value } = event.target;

    setFood({
      ...food,
      [name]: value,
    });
  };
  
  return (
    <>
    <p className='text-right'>
      <Button variant='secondary' onClick={handleShow}>
        +
      </Button>
    </p>
    
    <Modal
      show={show}
      onHide={handleClose}
      backdrop='static'
      keyboard={false}
    >
        <Modal.Header closeButton>
          <Modal.Title>Nova Comida</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicFood'>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type='text'
                placeholder='Informe o nome da comida'
                name='nameFood'
                value={food.nameFood}
                onChange={handleTypedChar}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicFood'>
              <Form.Label>Preço</Form.Label>
              <Form.Control
                type='text'
                placeholder='Preço da comida'
                name='valueFood'
                value={food.valueFood}
                onChange={handleTypedChar}
                pattern="\d+(\.\d{2})?"
                title="Insira apenas nmeros com duas casas decimais separados por ponto."
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicFood'>
              <Form.Label>Imagem</Form.Label>
              <Form.Control
                type='file'
                placeholder='Imagem'
                name='imgFood'
                value={food.imgFood}
                onChange={handleTypedChar}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicFood'>
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type='text'
                placeholder='Descrição'
                name='descFood'
                value={food.descFood}
                onChange={handleTypedChar}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicFood'>
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                type='select'
                placeholder='Categoria'
                name='categoryFood'
                value={food.categoryFood}
                onChange={handleTypedChar}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Fechar
          </Button>
          <Button variant='primary'>Salvar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FoodModalForm;