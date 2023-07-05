'use client';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import  { create }  from '../api';

import 'bootstrap/dist/css/bootstrap.min.css';

function FoodModalForm() {
  const [show, setShow] = useState(false);
  const [food, setFood] = useState({
    nameFood: '',
    valueFood: '',
    imgFood: '',
    descFood: '',
    categoryFood: '',
  });
  const [saved, setSaved] = useState(false); // Novo estado para indicar se a comida foi salva

  const handleClose = () => {
    setShow(false);
    setSaved(false); // Reinicia o estado ao fechar o modal
  };

  const handleShow = () => {
    setShow(true);
    setSaved(false); // Reinicia o estado ao abrir o modal
  };

  const handleTypedChar = (event) => {
    const { name, value } = event.target;
    setFood({
      ...food,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      const savedFood = await create(food);
      onAddFood(savedFood); // Adicionar o novo item à lista de comidas
      handleClose();
    } catch (error) {
      console.error('Erro ao salvar a comida:', error);
    }
  };

  return (
    <>
      <p className='text-right'>
        <Button variant='secondary' onClick={handleShow}>
          +
        </Button>
      </p>

      <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
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
          <Button variant='primary' onClick={handleSave}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FoodModalForm;
