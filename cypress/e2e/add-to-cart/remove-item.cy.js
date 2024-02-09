import { MainPage } from "../../page-objects/main-page/main-page-objects";
import { CartPage } from "../../page-objects/basket/cart-page-objects";
/**
 * Preconditions:
 * - Requires the user to be on the main page
 *
 * Validations:
 * - Validates that an added item can be removed from the cart
 */
describe("Remove item from Cart", () => {
    let itemDetails;

    before(() => {
        // Get the data from the fixtures file
        cy.fixture("cart-items").then((item) => {
            itemDetails = item;
        })
        // Visit the website
        cy.visit(Cypress.env("baseUrl"));
        // Validate that the products are visible
        MainPage.getAllProducts().should("be.visible");

        // Add the item to cart
        MainPage.getAddToCartButton(0);

        // Validate that the cart opens up and is visible
        CartPage.getCart().should("be.visible");
    })

    it("As a user I can remove an item from my cart", () => {
        // Click on the remove item button
        CartPage.clickRemoveButton();

        // Validate the empty cart
        CartPage.getEmptyCart().should("contain", "Add some products in the cart")
    })
})