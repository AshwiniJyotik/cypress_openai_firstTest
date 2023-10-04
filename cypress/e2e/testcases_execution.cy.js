 function from 'cartValidation.cy'
       - 'addItem' function from 'cartValidation.cy'

import { login } from './login.cy';
import { cartValidation } from './cartValidation.cy';

describe('Cart and Checkout Validation', () => {
  beforeEach(() => {
    login();
  });

  it('Cart validation & add item have a word shirt', () => {
    cartValidation();
    cartValidation.addItem('shirt');
  });
});