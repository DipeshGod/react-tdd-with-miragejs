import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';
import { IUser } from '@/lib/types/User';

export const userFactory = Factory.extend<IUser>({
  id() {
    return faker.random.numeric();
  },
  name() {
    return faker.name.firstName();
  },
});
