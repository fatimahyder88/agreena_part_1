import { MainPage } from "../../page-objects/main-page/main-page-objects";
import { CartPage } from "../../page-objects/basket/cart-page-objects";
/**
 * Preconditions:
 * - Requires the user to be on the main page
 *
 * Validations:
 * - Validates that an item can be added to cart
 * - Validates that the item is visible in the cart
 * - Validates the item title and description
 */
describe("Add item to Cart", () => {
    let itemDetails;
    before(() => {
        cy.visit(Cypress.env("baseUrl"));
        cy.fixture("cart-items").then((item) => {
            itemDetails = item;
        })
    })

    it("As a user I can add an item to my cart", () => {
        // Validate that the products are visible
        MainPage.getAllProducts().should("be.visible");

        // Add the item to cart
        MainPage.getAddToCartButton(0);

        // Validate that the Cart opens up and is visible
        CartPage.getCart().should("be.visible");

        // Validate that the added item is in the cart
        CartPage.getItemInCart().should("be.visible");

        // Validate the item title and description of the added item
        CartPage.getItemTitle().should("have.text", itemDetails.title);
        CartPage.getItemDescription().should("have.text", itemDetails.description);
    })
})