import menu from '../json-server/data'


async function create(food) {}
async function readAll() {}
async function readByName(name) {}
async function readById(id) {}

async function create(food) {
    const res = await fetch(`${menu}/foods`, {
      method: 'post',
      body: JSON.stringify(food),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
  
    return await res.json();
  }