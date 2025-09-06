

const ProcesoModel = require('../Models/procesos.model');

const index = async (req, res) => {
  try {
    const carts = await ProcesoModel.getAllCarts(req.query);
    res.render('procesos', { carts });
  } catch (err) {
    console.error('Error cargando /carts:', err.message);
    res.status(500).send('Error al obtener carritos de FakeStore');
  }
};

module.exports = { index };
