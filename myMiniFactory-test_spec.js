/// <reference types = "Cypress" />

context('myMiniFactory', () => {
	it('myMiniFactoryTest', () => {
		cy.viewport(1920,1080);
		cy.visit('https://www.myminifactory.com/')
		cy.get('.login-main > a').click()
		cy.get('#username').type('prolom.zakon@gmail.com')
		cy.get('#password').type('Hellothere1')
		cy.get('#_submit').click()
		cy.get('#search_button').click()
		cy.get('#mymini_userinterfacebundle_search_query_desktop').type('Test')
		cy.get('[data-object=109473]').click()
		cy.get('.align-mid').click({force:true})
		cy.get('#tnphoto').trigger('mouseenter')
		cy.get('body > div.off-canvas-wrap > div.inner-wrap > div > div > div.tab-bar.contain-to-grid.fixed.show-for-large-up > nav > section > ul.right > li:nth-child(5) > ul > li:nth-child(7) > a').click({force: true})
		cy.get('#menu-saved > .title-library').click()
		cy.get('.searchtitle').should('be.visible').and('contain','TEST')
		cy.get('.username').should('be.visible').and('contain','Marius82')
		cy.get('#delete-object').click();
	});
});