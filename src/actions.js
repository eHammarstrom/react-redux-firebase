export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_DATABASE = 'SET_DATABASE';

export function addMessage(channelId, user, text) {
  return { type: ADD_MESSAGE, channelId, user, text };
}

export function setDatabase(database) {
  return { type: SET_DATABASE, database };
}
