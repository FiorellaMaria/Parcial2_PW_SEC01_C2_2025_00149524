const cuentas = require("../cuentas.json");

// Obtener todas las cuentas
const getAllCuentas = (req, res) => {
  res.json({
    count: cuentas.length,
    data: cuentas
  });
};

// Obtener una cuenta por ID
const getCuentaById = (req, res) => {
  const { id } = req.params;
  const account = cuentas.find(c => c._id === id);

  res.json({
    finded: !!account,
    account: account || {}
  });
};

// Obtener cuenta(s) por query parameter
const getCuentaByQuery = (req, res) => {
  const queryParam = req.query.queryParam;

  if (!queryParam) {
    return res.status(400).json({ error: "Debe proporcionar queryParam" });
  }

  // Buscar coincidencias por _id, client o gender
  const matched = cuentas.filter(c =>
    c._id === queryParam ||
    c.client.toLowerCase() === queryParam.toLowerCase() ||
    c.gender.toLowerCase() === queryParam.toLowerCase()
  );

  if (matched.length === 0) {
    return res.json({
      finded: false,
      account: {}
    });
  } else if (matched.length === 1) {
    return res.json({
      finded: true,
      account: matched[0]
    });
  } else {
    return res.json({
      finded: true,
      data: matched
    });
  }
};

module.exports = {
  getAllCuentas,
  getCuentaById,
  getCuentaByQuery
};
