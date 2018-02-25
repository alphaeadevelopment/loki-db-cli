export default (db) => {
  return new Promise((res, rej) => {
    db.close((err) => {
      if (err) {
        rej(err);
      }
      else res();
    });
  });
}
