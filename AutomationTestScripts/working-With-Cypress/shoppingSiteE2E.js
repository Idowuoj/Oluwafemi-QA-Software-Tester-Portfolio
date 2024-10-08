/*// for Cypress autocomplete
/// <reference types="Cypress" />
*/
describe('my full shopping test', function () {
      it('first procedure', function () {
            // Visit the website
            cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

            // Wait for 2 seconds to ensure the page is fully loaded
            cy.wait(2000)

            // Type 'ca' in the search input field
            cy.get('.search-keyword').type('ca')

            // Store the products element in an alias called 'locate'
            cy.get('.products').as("locate")

            // Iterate over each product element
            cy.get('@locate').find('.product').each(($el, index, $list) => {
                  // Get the text of the product name
                  const textid = $el.find('h4.product-name').text()

                  // If the product name includes 'Cashews', add it to the cart
                  if (textid.includes("Cashews")) {
                        cy.wrap($el).contains('ADD TO CART').click()
                        cy.wait(2000) // wait for 2 seconds after adding to cart
                  }
            })

            // Click the 'ADD TO CART' button for the 3rd product
            cy.get(':nth-child(3) > .product-action > button').click()
            cy.wait(2000)

            // Click the 'ADD TO CART' button for the 2nd product
            cy.get(':nth-child(2) > .product-action > button').click()
            cy.wait(2000)

            // Click the 'ADD TO CART' button for the 1st product
            cy.get(':nth-child(1) > .product-action > button').click()
            cy.wait(2000)

            // Click the cart icon
            cy.get('.cart-icon > img').click()

            // Click the 'PROCEED TO CHECKOUT' button
            cy.contains('PROCEED TO CHECKOUT').click()
            cy.wait(4000) // wait for 4 seconds after proceeding to checkout

            // Click the 'Place Order' button
            cy.contains('Place Order').click()
            cy.wait(4000) // wait for 4 seconds after placing the order

            // Select 'Nigeria' from the country dropdown
            cy.get('select').select('Nigeria')

            // Check the agreement checkbox
            cy.get('.chkAgree').check()

            // Click the 'Proceed' button
            cy.get('a').click()
            cy.wait(4000) // wait for 4 seconds after proceeding

            // Visit the policy page
            cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/policy')

            // Click the 'Proceed' button on the policy page
            cy.get('a').click()

            // Repeat the same steps as above to add products to the cart and checkout
            cy.get('.search-keyword').type('ca')
            cy.get('.products').as("locate")
            cy.get('@locate').find('.product').each(($el, index, $list) => {
                  const textid = $el.find('h4.product-name').text()
                  if (textid.includes("Cashews")) {
                        cy.wrap($el).contains('ADD TO CART').click()
                        cy.wait(2000)
                  }
            })
            cy.get(':nth-child(3) > .product-action > button').click()
            cy.wait(2000)
            cy.get(':nth-child(2) > .product-action > button').click()
            cy.wait(2000)
            cy.get(':nth-child(1) > .product-action > button').click()
            cy.wait(2000)
            cy.get('.cart-icon > img').click()
            cy.contains('PROCEED TO CHECKOUT').click()
            cy.wait(4000)
            cy.contains('Place Order').click()
            cy.wait(4000)
            cy.get('select').select('Nigeria')
            cy.get('.chkAgree').check()
            cy.get('button').click()
      })
})