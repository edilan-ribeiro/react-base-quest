import './App.css'
import ColorfulParagraph from './components/ColorfulParagraph/ColorfulParagraph'
import Button from './components/Button/Button.jsx'

function App() {
  return (
    <>
      <ColorfulParagraph> 
        Paragrafo 1
      </ColorfulParagraph>

      <ColorfulParagraph textColor='#6aa84f'> 
        Paragrafo 2
      </ColorfulParagraph>

      <ColorfulParagraph textFormat='capitalize' textColor='red'>
      Clique no botão abaixo para receber um alerta
      </ColorfulParagraph>

      <Button label='Botão de alerta'/>
    </>
  )
}

export default App