import { IUser } from '@/lib/types/User';
import { Model } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';

export const UserModel: ModelDefinition<IUser> = Model.extend({});
