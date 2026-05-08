import { useEffect, useState } from 'react'
import axios from 'axios'

function Submit({newName, newAge, newBreed, name, age, breed, clickInputHandler}){
  function newNameSetter (event){
    newName(event.target.value)
  }
  function newAgeSetter (event){
    newAge(event.target.value)
  }
  function newBreedSetter (event){
    newBreed(event.target.value)
  }
  return (
    <>
    <h1>Chicken Database!</h1>
    <div>Name</div>
    <input onChange={newNameSetter}type="text" />
    <div>Age</div>
    <input onChange={newAgeSetter} type="text" />
    <div>Breed</div>
    <input onChange={newBreedSetter} type="text" />
    <button onClick={clickInputHandler}> Submit </button>
    </>
    )
  }

function App() {
  const [inputName, setInputName]=useState("Name")
  const [inputAge, setInputAge]=useState("Age")
  const [inputBreed, setInputBreed]=useState("Breed")
  const [chickenList, setChickenList]=useState([{id: 0, name: 'Chippy', age: 6, breed: 'Easter Egger'},{id:1, name: 'Buffy', age: 6, breed: 'Buff Orpington'}])
  
  function onClickSubmit(){
    console.log(inputName, inputAge, inputBreed)
    newChickenAdder(inputName, inputAge, inputBreed)
    
  }
  function newChickenAdder(inputName, inputAge, inputBreed){
    const currentChickenList = [...chickenList]
    currentChickenList.push({id: currentChickenList.length, name: inputName, age: inputAge, breed: inputBreed})
    setChickenList(currentChickenList)
  }
  function newNameListener (value){
    setInputName(value)
  }
  function newAgeListener (value){
    setInputAge(value)
  }
  function newBreedListener (value){
    setInputBreed(value)
  }
  return (
    <>
    <Submit newName={newNameListener} newAge={newAgeListener} newBreed={newBreedListener} name={inputName} age={inputAge} breed={inputBreed} clickInputHandler={()=> onClickSubmit()}/>
    {/* <Display chickenListProp={chickenList}></Display> */}
    <div> {chickenList.map (chicken =>
    <li key={chicken.id}> {chicken.name} {chicken.age} {chicken.breed} </li>
    )
      } </div>
    </>
  )
}

export default App
