import { types as userTypes } from './api/users/types';
import { TYPES as libTypes } from './lib';

const TYPES = {
  ...libTypes,
  ...userTypes,
};

export { TYPES };
