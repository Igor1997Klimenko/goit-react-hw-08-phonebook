import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('contacts/fetchTodosRequest');
export const fetchContactsSuccess = createAction('contacts/fetchTodosSuccess');
export const fetchContactsError = createAction('contacts/fetchTodosError');