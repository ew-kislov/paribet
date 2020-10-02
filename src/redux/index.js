import { configureRedux } from './config';

export * from './preferences/actionCreators';
export * from './auth/actionCreators';
export * from './session/actionCreators';
export * from './user/actionCreators';
export * from './game/actionCreators';
export * from './rating/actionCreators'

export * from './hooks';

export const store = configureRedux();