import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'
import './index.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  //won't console log puppies after setting this line
  // console.log(puppies);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  //console.log(featuredPup);


  return (
    <div className="App">
      {/* Render puppy names as clickable elements */}
      {puppies.map((puppy) => (
        <p key={puppy.id} onClick={() => setFeatPupId(puppy.id)}>
          {puppy.name}
        </p>
        //Click to see details for
      ))}

      {/* Conditionally render puppy details when featPupId is set */}
      {featPupId && featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App

// return (
//   <div className="App">
//     {/* Conditionally render the p tag only if featPupId is not null */}
//     {featPupId && <p>Selected Puppy ID: {featPupId}</p>}
//     {puppies.map((puppy) => {
//       return (
//         <p key={puppy.id} onClick={() => setFeatPupId(puppy.id)}>
//           Click to see Puppy ID: {puppy.name}
//         </p>
//         //Click to see Puppy ID:
//       );
//     })}
//   </div>
// );


// return (
//   <div className="App">
//     {
//       puppies.map((puppy) => {
//         return (
//           const onClick = {() => { console.log("puppy id:", puppy.id) }
//       }
//           <p onClick={ } key={puppy.id}>{puppy.name}</p>

//       ):
//       })}:

//   </div>