import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { create } from '../api';

import 'bootstrap/dist/css/bootstrap.min.css';

function FoodModalForm({ onAddFood }) {
  const [show, setShow] = useState(false);
  const [food, setFood] = useState({
    nameFood: '',
    valueFood: '',
    imgFood: '',
    descFood: '',
    categoryFood: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFood((prevFood) => ({
      ...prevFood,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const regex = /^\d+\.\d{2}$/;
      if (!regex.test(food.valueFood)) {
        alert('Insira um preço válido (ex: 10.00)');
        return;
      }

      const savedFood = await create(food);
      onAddFood(savedFood);
      handleClose();
    } catch (error) {
      console.error('Erro ao salvar a comida:', error);
    }
  };

  const handleClose = () => {
    setShow(false);
    setFood({
      nameFood: '',
      valueFood: '',
      imgFood: '',
      descFood: '',
      categoryFood: '',
    });
  };

  const handleShow = () => {
    setShow(true);
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
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicFood'>
              <Form.Label>Preço</Form.Label>
              <Form.Control
                type='text'
                placeholder='Preço da comida'
                name='valueFood'
                value={food.valueFood}
                onChange={handleInputChange}
                isInvalid={!!food.valueFood && !/^\d+\.\d{2}$/.test(food.valueFood)}
              />
              {!!food.valueFood && !/^\d+\.\d{2}$/.test(food.valueFood) && (
                <Form.Control.Feedback type='invalid'>
                  Insira um preço válido (ex: 10.00)
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicFood'>
              <Form.Label>Imagem</Form.Label>
              <Form.Control
                type='file'
                placeholder='Imagem'
                name='imgFood'
                value={food.imgFood}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicFood'>
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type='text'
                placeholder='Descrição'
                name='descFood'
                value={food.descFood}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicFood'>
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                type='select'
                placeholder='Categoria'
                name='categoryFood'
                value={food.categoryFood}
                onChange={handleInputChange}
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
