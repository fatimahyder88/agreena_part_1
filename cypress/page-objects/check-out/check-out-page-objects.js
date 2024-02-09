import { checkOutSelectors } from "./check-out-selectors";

export class CheckOut {
   /**
   * Returns the Checkout Button
   */
  static getCheckOutButton() {
    return cy.get(checkOutSelectors.checkoutButton);
  }
  
  /**
   * Clicks on the Checkout Button
   */
  static clickCheckOutButton() {
    return this.getCheckOutButton().click();
  }
}