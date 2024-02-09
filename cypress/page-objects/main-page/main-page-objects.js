import { mainPageSelectors } from "./main-page-selectors";

export class MainPage {
  /**
   * Returns All items
   */
  static getAllProducts() {
    return cy.get(mainPageSelectors.allProducts);
  }

  /**
   * Returns the total items header
   */
    static getTotalItemHeader() {
      return cy.get(mainPageSelectors.totalProducts);
    }

  /**
   * Returns the total items header
   */
    static getItemTitle() {
      return cy.get(mainPageSelectors.itemTitle);
    }
    
  /**
   * Returns a single item
   */
  static getSingleProduct() {
    return this.getAllProducts()
  }

  /**
   * Returns and clicks on the Add to Cart button
   */
  static getAddToCartButton(itemNumber) {
    return this.getSingleProduct().within(() => {
      cy.get("div").eq(itemNumber).within(() => {
        cy.contains("Add to cart").click({ force: true })
      })
    })
  }
  }
