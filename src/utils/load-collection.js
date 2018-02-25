import loadDatabase from './load-database';

export default (db, name, options = {}) => {
  return new Promise((res, rej) => {
    loadDatabase(db)
      .then(() => {
        try {
          const collection = db.getCollection(name);
          if (!collection) rej(`Collection not known: ${name}`);
          else res(collection);
        }
        catch (e) {
          rej(e);
        }
      })
      .catch(e => rej(e));
  });
};
