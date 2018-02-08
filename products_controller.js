module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const {name, description, price, imageurl } = req.body;

    dbInstance
      .create_product([name, description, price, imageurl])
      .then(() => res.status(200).json())
      .catch(() => res.status(500).json());
  },
  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .read_product([params.id])
      .then(product => res.status(200).json(product))
      .catch(() => res.status(500).json());
  },
  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_products()
      .then(products => res.status(200).json(products))
      .catch(() => res.status(500).json());
  },
  update: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params, query } = req;

    dbInstance
      .update_product([params.id, query.desc])
      .then(() => res.status(200).json())
      .catch(() => res.status(500).json());
  },
  delete: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .delete_product( [params.id]) 
      .then(() => res.status(200).json())
      .catch(() => res.status(500).json());
  }
};
