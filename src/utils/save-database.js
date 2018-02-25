export default (db) => {
  return new Promise((res, rej) => {
    db.saveDatabase((err) => {
      if (err) {
        rej(err);
      }
      else res();
    });
  });
}
