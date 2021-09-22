const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async index(request, response) {
    const { orderBy } = request.query;
    const users = await UsersRepository.findAll(orderBy);
    response.json(users);
  }

  async show(request, response) {
    const { id } = request.params;
    const user = await UsersRepository.findById(id);

    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(user);
  }

  async store(request, response) {
    const {
      first_name, last_name, email, phone, address,
    } = request.body;

    if (!first_name || !last_name) {
      return response.status(400).json({ error: 'First and Last name is required' });
    }

    const userExists = await UsersRepository.findByEmail(email);
    if (userExists) {
      return response.status(400).json({ error: 'This e-mail is already in use' });
    }

    const userExistsByName = await UsersRepository.findByName(first_name, last_name);
    if (userExistsByName) {
      return response.status(400).json({ error: 'This person is already registered' });
    }

    const user = await UsersRepository.create({
      first_name, last_name, email, phone, address,
    });

    response.json(user);
  }

  async delete(request, response) {
    const { id } = request.params;

    await UsersRepository.delete(id);
    response.sendStatus(204);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      first_name, last_name, email, phone, address,
    } = request.body;

    const userExists = await UsersRepository.findById(id);
    if (!userExists) {
      return response.status(404).json({ error: 'User not found' });
    }

    if (!first_name || !last_name) {
      return response.status(400).json({ error: 'First and Last name is required' });
    }

    const userByEmail = await UsersRepository.findByEmail(email);
    if (userByEmail && userByEmail.id !== id) {
      return response.status(400).json({ error: 'This e-mail is already in use' });
    }

    const user = await UsersRepository.update(id, {
      first_name, last_name, email, phone, address,
    });

    response.json(user);
  }
}

module.exports = new UserController();
