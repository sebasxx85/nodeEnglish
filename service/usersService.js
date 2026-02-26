// service/usersService.js

import * as mockService from './usersServiceMock.js';
import * as firestoreService from './usersServiceFirestore.js';

const useFirestore = process.env.USE_FIRESTORE === 'true';

const service = useFirestore ? firestoreService : mockService;

export const getUsers = service.getUsers;
export const findUser = service.findUser;
export const addUser = service.addUser;