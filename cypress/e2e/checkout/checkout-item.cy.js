import { MainPage } from "../../page-objects/main-page/main-page-objects";
import { CartPage } from "../../page-objects/basket/cart-page-objects";
import { CheckOut } from "../../page-objects/check-out/check-out-page-objects";
/**
 * Preconditions:
 * - Requires the user to be on the main page
 *
 * Validations:
 * - Validates that an added item can be checked out
 * - Validates the success pop-up
 */
describe("Add item to Cart", () => {
    let itemDetails;
    
    before(() => {
        // Get the data from the fixture file
        cy.fixture("cart-items").then((item) => {
            itemDetails = item;
        })
    
        // Visit the website
        cy.visit(Cypress.env("baseUrl"));

        // Validate that the products are visible
        MainPage.getAllProducts().should("be.visible");

        // Add the item to cart
        MainPage.getAddToCartButton(0);
    })

    it("As a user I can add an item to my cart and proceed to checkout", () => {
        // Validate that the Cart opens up and is visible
        CartPage.getCart().should("be.visible");

        // Validate that the added item is in the cart
        CartPage.getItemInCart().should("be.visible");

        // Click on the checkout button
        CheckOut.clickCheckOutButton() 

        // Validate that the alert pop-up contain the success text
        cy.on('window:alert',(text)=>{
            //assertions
            expect(text).to.contain("Checkout - Subtotal: $ 10.90");
         })
    })
})