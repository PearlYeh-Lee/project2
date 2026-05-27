import { useEffect, useState } from 'react'
import axios from 'axios'

function Submit({newName, newAge, newBreed, clickInputHandler}){
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
  const [chickenList, setChickenList]=useState([])
  // To-do: use useEffect and axios to get chickens from server using api/chickens and set chickenList to chickens using setchickenList

useEffect(() => {
  const fetchChickens = async () => {
    // Axios handles the promise and the JSON conversion automatically
    const response = await axios.get('http://localhost:5000/api/storedChickens');
    setChickenList(response.data); 
  };
  fetchChickens();
}, []);

  function onClickSubmit(){
    console.log(inputName, inputAge, inputBreed)
    newChickenAdder(inputName, inputAge, inputBreed)    
  }
  function newChickenAdder(inputName, inputAge, inputBreed){
    const currentChickenList = [...chickenList]
    const newChickenDictionary = {id: currentChickenList.length, name: inputName, age: inputAge, breed: inputBreed};
    currentChickenList.push(newChickenDictionary)
    axios.post('http://localhost:5000/api/postChicken', newChickenDictionary).then((response)=>{
      console.log(response.status, response.data.token);
    });
    // TODO: Send newly Created chicken to Server using a POST, then check to see if duplicates happen

  };

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
    <Submit newName={newNameListener} newAge={newAgeListener} newBreed={newBreedListener} clickInputHandler={()=> onClickSubmit()}/>
    {/* <Display chickenListProp={chickenList}></Display> */}
    <div> {chickenList.map (chicken =>
    <li key={chicken.id}> {chicken.name} {chicken.age} {chicken.breed} </li>
    )
      } </div>
    </>
  )
}

export default App
