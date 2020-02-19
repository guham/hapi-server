import { injectable } from 'inversify';

import { PostgresRepository } from '../../../lib/postgres';
import { User } from '../models';

@injectable()
export class UserRepository extends PostgresRepository<User> {}
