import MovieCard from '../MovieCard.vue'

describe('<MovieCard />', () => {
  it('renders', () => {
    const title = '12 Angry Men'
    const year = '1957'
    const genres = ['Crime', 'Drama']
    const posterurl =
      'https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SY500_CR0,0,333,500_AL_.jpg'

    // see: https://on.cypress.io/mounting-vue
    cy.mount(MovieCard, {
      props: {
        title,
        year,
        genres,
        posterurl
      }
    })

    cy.get('[data-testid="movie-card-title"]').should('have.text', title)
    cy.get('[data-testid="movie-card-year"]').should('have.text', year)
    cy.get('[data-testid="movie-card-genres"]').should('have.text', 'Crime & Drama')
    cy.get('img').should('have.attr', 'src', posterurl)
  })
})
