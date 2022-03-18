import styled from 'styled-components'
import Section from '../components/Section'

function Home() {
  return (
    <Container>
      <Section
        title='Model 3'
        description='Order Online for'
        descriptionLink='Touchless Delivery'
        buttonOne='custom order'
        buttonTwo='existing inventory'
        bgImg='model-3.jpg'
        showDownArrow
      />
      <Section
        title='Model Y'
        description='Order Online for'
        descriptionLink='Touchless Delivery'
        buttonOne='custom order'
        buttonTwo='existing inventory'
        bgImg='model-y.jpg'
      />
      <Section
        id='model-s'
        title='Model S'
        description='Order Online for'
        descriptionLink='Touchless Delivery'
        buttonOne='custom order'
        buttonTwo='existing inventory'
        bgImg='model-s.jpg'
      />

      <Section
        title='Model X'
        description='Order Online for'
        descriptionLink='Touchless Delivery'
        buttonOne='custom order'
        buttonTwo='existing inventory'
        bgImg='model-x.jpg'
      />
      <Section
        title='Solar Panels'
        description='Lowest Cost Solar Panels in America'
        buttonOne='order now'
        buttonTwo='learn more'
        bgImg='solar-panel.jpg'
      />
      <Section
        title='Solar Roof'
        description='Produce Clean Energy From Your Roof'
        buttonOne='order now'
        buttonTwo='learn more'
        bgImg='solar-roof.jpg'
      />
      <Section
        title='Accessories'
        buttonOne='shop now'
        bgImg='accessories.jpg'
      />
    </Container>
  )
}
export default Home

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 100vh; */
`
