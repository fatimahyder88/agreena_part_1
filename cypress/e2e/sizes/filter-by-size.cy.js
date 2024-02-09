import { MainPage } from "../../page-objects/main-page/main-page-objects";
import { SizeFilters } from "../../page-objects/size-filtering/size-filtering-page-objects";
/**
 * Preconditions:
 * - Requires the user to be on the main page
 *
 * Validations:
 * - Validates that the items can be filtered by size
 * - 
 */
describe("Filter items by size", () => {
    let titleText;

    before(() => {
        // Get the data from the fixtures file
        cy.fixture("item-main").then((item) => {
            titleText = item;
        })

        // Visit the website
        cy.visit(Cypress.env("baseUrl"));

        // Validate that the products are visible
        MainPage.getAllProducts().should("be.visible");
    })

    it("As a user I can filter the items by size", () => {
        // Validate the filter title
        SizeFilters.getFilterTitle("Sizes:");

        // Click on the desired filter size
        SizeFilters.clickSizeFilter('XS');

        // Validate the header title
        MainPage.getTotalItemHeader().should("contain",titleText.headerTitle)

        // Validate the item title
        MainPage.getItemTitle().should("contain", titleText.title)
    })
})