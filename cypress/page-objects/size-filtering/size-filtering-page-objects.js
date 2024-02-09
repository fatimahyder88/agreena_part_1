import { sizeFilterSelectors } from "./size-filtering-selectors";

export class SizeFilters {
   /**
   * Returns the size filer container
   */
  static getFilterContainer() {
    return cy.get(sizeFilterSelectors.filterContainer);
  }

  /**
   * Returns the filter title
   */
  static getFilterTitle(title) {
    return cy.get(sizeFilterSelectors.filterTitle).should('contain', title);
  }
  
  /**
   * Gets the size filter
   */
  static getSizeFilter(size) {
    return cy.get(sizeFilterSelectors.sizeFilter).contains(size);
  }

   /**
   * Clicks on the desired size filter
   * @param {string} size - the size we want to select, the sizes include XS,S,M,L,XL,XXL
   * 
   */
    static clickSizeFilter(size) {
        return this.getFilterContainer().within(() => {
            this.getSizeFilter(size).click();
        })
      }
}