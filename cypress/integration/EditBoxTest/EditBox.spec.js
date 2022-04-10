/// <reference types="cypress" />
/*
allows us to leverage VS Code 
Intellisense for the autocompletion
*/

describe('drag and drop tests', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:3000/Editor#')
    })

    it("Should drag text into the editor", () => {
        const dataTransfer = new DataTransfer()

        cy.get("[data-testid=drag-plain-text]").trigger('dragstart', {dataTransfer})
        cy.get("[data-testid=editor-spacing]").trigger('drop', {dataTransfer})

        let droppedElement = cy.xpath("//*[@id=\"root\"]/div[2]/div[2]/div[1]/p")
        droppedElement.should('not.be.null').and('have.text', "text")
    })


    it("Should have list element available",() => {
        const dataTransfer = new DataTransfer()

        cy.get("[data-testid=drag-list]").trigger('dragstart', {dataTransfer})
        cy.get("[data-testid=editor-spacing]").trigger('drop', {dataTransfer})

        let droppedElement = cy.xpath("//*[@id=\"root\"]/div[2]/div[2]/div[1]/ul")
        droppedElement.should('not.be.null').and('have.text', "list")
    })

    
    it("Should be able move element left and right",() => {
        const dataTransfer = new DataTransfer()

        cy.get("[data-testid=drag-list]").trigger('dragstart', {dataTransfer})
        cy.get("[data-testid=editor-spacing]").trigger('drop', {dataTransfer})

        dataTransfer.clearData()


        cy.get("[data-testid=drag-plain-text]").trigger('dragstart', {dataTransfer})
        cy.get("[data-testid=editor-spacing]").trigger('drop', {dataTransfer})

        dataTransfer.clearData()
        let droppedText = cy.xpath("//*[@id=\"root\"]/div[2]/div[2]/div[1]/p")
        droppedText.should('not.be.null').and('have.text', "text")

        let droppedList = cy.xpath("//*[@id=\"root\"]/div[2]/div[2]/div[1]/ul")
        droppedList.should('not.be.null').and('have.text', "list")

        droppedList.trigger('dragstart', {DataTransfer})
        cy.get("[data-testid=spacer00").trigger('drop', {DataTransfer})

        cy.xpath("//*[@id=\"root\"]/div[2]/div[2]/div[1]").first().should('have.text', 'list')
    })
})
