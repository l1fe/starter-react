import { typeCreator } from 'redux/utils';

const prefix = 'todos';

export const fetch = typeCreator(`${prefix}/fetch`);
