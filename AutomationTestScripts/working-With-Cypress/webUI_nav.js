/*Setup environment to run
/// <reference types = "Cypress" />
*/
describe('My button selection test', function () {
      it('Test cases for selection', function () {
            cy.visit('https://rahulshettyacademy.com/AutomationPractice')
            cy.wait(4000)
            //checkbox
            cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
            cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
            cy.get('input[type="checkbox"]').check(['option2', 'option3']).should('be.checked')
            cy.get('#checkBoxOption3').uncheck('option3').should('not.be.checked').and('have.value', 'option3')
            cy.get('select').select('Option2').should('have.value', 'option2')
            //Dynamic dropdown. you will have to input to select a field
            cy.get('#autocomplete').type('india')

            // Assert that the input field now contains the selected value
            //cy.get('#autocomplete').should('have.text', 'india');


            cy.get('.ui-menu-item div').each(($el, index, $list) => {
                  if ($el.text() === "india") {
                        cy.wrap($el).select()
                  }
            })
            cy.get('#autocomplete').should('have.value', 'india')
            //handling invicible elements
            cy.get('#displayed-text').should('be.visible')
            cy.get('#hide-textbox').click()
            cy.get('#displayed-text').should('not.be.visible')
            cy.get('#show-textbox').click()
            cy.get('#displayed-text').should('be.visible')
            //radio  button, behaves just like checkbox
            //get('[value="radio3"]').check().should('be.checked')
      })
})
