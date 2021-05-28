import './App.css';


import PeopleList from "./components/PeopleList";

const peoples = [
  {picture : "https://picsum.photos/100", name :"Pierre", age : 20},
  {picture : "https://picsum.photos/100", name :"Sarah", age : 45},
  {picture : "https://picsum.photos/100", name :"Loic", age : 76},
  {picture : "https://picsum.photos/100", name :"Susane", age :45},
  {picture : "https://picsum.photos/100", name :"Jean", age : 28},
  {picture : "https://picsum.photos/100", name :"Arthur", age : 98},
  {picture : "https://picsum.photos/100", name :"Lucie", age : 65},
  {picture : "https://picsum.photos/100", name :"Christian", age : 54},
  {picture : "https://picsum.photos/100", name :"Oumay", age : 56},
  {picture : "https://picsum.photos/100", name :"Maxime", age : 67},
  {picture : "https://picsum.photos/100", name :"Julie", age : 66},
]

function App() {
  return (
    <div style={{padding: 10}}>
      <PeopleList peoples={peoples} />
    </div>
  );
}

export default App;
