import { cartSelectors } from "./cart-selectors";

export class CartPage {
   /**
   * Returns All items details contains
   */
  static getCart() {
    return cy.get(cartSelectors.cartPage);
  }
  
  /**
   * Returns All items details contains
   */
     static getItemInCart() {
        return cy.get(cartSelectors.itemInCart);
      }

   /**
   * Returns the item title
   */
    static getItemTitle() {
        return cy.get(cartSelectors.itemInCart);
     }

   /**
   * Returns items description & quantity
   */
  static getItemDescription() {
    return cy.get(cartSelectors.itemDescription);
    }

   /**
   * Returns items description & quantity
   */
  static getRemoveButton() {
    return cy.get(cartSelectors.itemDescription);
    }

    /**
   * Returns empty cart container
   */
    static getEmptyCart() {
        return cy.get(cartSelectors.emptyCart);
     }

  /**
   * Returns items description & quantity
   */
  static clickRemoveButton() {
    return cy.get(cartSelectors.removeItem).click();
    }
}