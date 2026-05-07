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
// function Display(chickenListProp){
//   return(
//     <>
//     <div> {chickenListProp.map
//     (chicken =>
//     <li key={chicken}> {chicken} </li>
//     )
//       } </div>
//     </>
//   )
// }
function App() {
  // Mapping:https://www.w3schools.com/react/react_es6_array_map.asp
  const [inputName, setInputName]=useState("Name")
  const [inputAge, setInputAge]=useState("Age")
  const [inputBreed, setInputBreed]=useState("Breed")
  const [chickenList, setChickenList]=useState([{id: 0, name: 'Chippy', age: 6},{id:1, name: 'Buffy', age: 6}])
  
  function onClickSubmit(){
    console.log(inputName, inputAge, inputBreed)
    newChickenAdder(inputName, inputAge)
    
  }
  function newChickenAdder(inputName, inputAge){
    const currentChickenList = [...chickenList]
    currentChickenList.push({id: currentChickenList.length, name: inputName, age: inputAge})
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
    <li key={chicken.id}> {chicken.name} {chicken.age} </li>
    )
      } </div>
    </>
  )
}

export default App
