

import './login.cy';

export function cartValidation() {
  cy.get('.shopping_cart_link', { timeout: 15000 }).click();
  cy.get('.cart_list').then(($cartList) => {
    if ($cartList.find('.cart_item').length === 0) {
      cy.get('[data-test="continue-shopping"]').click();
      cy.wait(1000);
      cy.log('No item present and clicked on Continue shopping');
    }
  });
  cy.get('.inventory_item_name').each(($allitemsinlist) => {
    const productName = $allitemsinlist.text();
    cy.log(productName);
    if (productName.includes('Shirt')) {
      cy.wrap($allitemsinlist).parents('.inventory_item').find('.btn_inventory').click();
    }
  });
}