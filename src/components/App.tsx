import { Card } from "./Card"
import imgRunning from 'assets/img/test.jpg'

function App() {
  return (
    <div className='bg-secondary flex flex-col justify-center h-screen items-center'>
        <Card>
          <Card.Media 
            src={imgRunning}
            alt="illustration d'une personne qui cours"
            component="img"
          />
          <Card.Content>
            <Card.Body>
              <Card.HighlightText>Highlight text</Card.HighlightText>
              <Card.Description>“Shortney” – The running shorts by Courtney Dauwalter</Card.Description>
            </Card.Body>
            <Card.Footer>
              <Card.ReadingTime>5 min</Card.ReadingTime>
              <Card.Chip>Label</Card.Chip>
            </Card.Footer>
          </Card.Content>
        </Card>
    </div>
  )
}

export default App
