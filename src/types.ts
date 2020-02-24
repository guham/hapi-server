import { types as userTypes } from './api/users/types';

const TYPES = {
  NewableLogger: Symbol.for('Newable<Logger>'),
  ...userTypes,
};

export { TYPES };
