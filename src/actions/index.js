/* eslint-disable import/prefer-default-export */
export const signIn = (userId) => ({
  type: 'SIGN_IN',
  payload: userId,
});

export const signOut = () => ({
  type: 'SIGN_OUT',
});
