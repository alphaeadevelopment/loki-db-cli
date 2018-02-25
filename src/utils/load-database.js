export default (db, name, options = {}) => {
  return new Promise((res, rej) => {
    db.loadDatabase(options, (err) => {
      if (err) rej(err);
      else res();
    });
  });
};
