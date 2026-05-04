import { useEffect, useState } from 'react'
import axios from 'axios' // Make sure you've run: npm install axios



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
    <input onChange={newNameSetter}type="text" defaultValue={name}/>
    <input onChange={newAgeSetter} type="text" defaultValue={age}/>
    <input onChange={newBreedSetter} type="text" defaultValue={breed}/>
    <button onClick={clickInputHandler}> Submit </button>
    </>
    )
  }
function Display(name){
  return(
    <>
    <div> {name} </div>
    </>
  )
}
function App() {
  const [inputName, setInputName]=useState("Name")
  const [inputAge, setInputAge]=useState("Age")
  const [inputBreed, setInputBreed]=useState("Breed")
  function onClickSubmit(){
    console.log(inputName, inputAge, inputBreed)
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
    <Display name={inputName}></Display>
    </>
  )
}

export default App
