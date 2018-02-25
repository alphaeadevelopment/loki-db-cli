import Loki from 'lokijs';
import { closeDatabase, saveDatabase } from '../utils';

const builder = () => { };

const handler = ({ name, filename }) => {
  const db = new Loki(filename);
  db.removeCollection(name);
  saveDatabase(db);
  closeDatabase(db)
    .catch((err) => {
      console.error(err); // eslint-disable-line no-console
      process.exit(1);
    });
};

export default ({
  command: 'removeCollection',
  desc: 'Removes the given collection',
  builder,
  handler,
});
