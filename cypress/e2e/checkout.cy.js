

import './login.cy';
import {cartValidation} from './cartValidation.cy';

export function checkout() {
  cy.get('.shopping_cart_link', { timeout: 15000 }).click();
  cy.get('.cart_list').then(($cartList) => {
    if ($cartList.find('.cart_item').length > 0) {
      cy.get('checkout').click();
      cy.wait(1000);
    }
  });
}