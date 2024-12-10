import './App.css'
import Person from './components/Person/Person'
import Header from './components/Restaurant/Header'
import Home from './components/Restaurant/Home'


function App() {

  const dishes = [
    {
      id:1,
      name:'plato 1',
      description:'Este es el plato 1',
      price:10
    },
    {
      id:2,
      name:'plato 2',
      description:'Este es el plato 2',
      price:20
    },
    {
      id:3,
      name:'plato 3',
      description:'Este es el plato 3',
      price:15
    }
  ]
  

  return (
   <div>
    <h2 className='ej'>Ejercicio 1</h2>
    <Person name="Cristiano" surname="Ronaldo" age="39"/>
    <Person name="Iago" surname="Aspas" age="37"/>
    <Person name="Lamine" surname="Yamal" age="17"/>
    <h2 className='ej'>Ejercicio 2</h2>
    <Header/>
    <Home dishes={dishes}/>
    </div>
  )
}

export default App
