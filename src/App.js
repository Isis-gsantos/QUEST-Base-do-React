import './App.css';
import Button from './components/button/button'
import Text from './components/texts/texts'

function App() {
  return (
    <>
      <Text color='red'/>
      <Text color='pink'/>
      <Text color='purple'/>
      

      <Button label='Clique aqui' />
      <Button label='Baixar CV'/>
      <Button label='Compre aqui'/>
    </>
  );
}

export default App;