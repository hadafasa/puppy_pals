import { useState } from 'react'
import { puppyList } from './data.js';
import './App.css';

function App() {
  const [puppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find(puppy => puppy.id === featPupId);

  return (
    <div className="App">
      <div className="puppy-list">
        {puppies.map((puppy) => {
          return (
            <p className="puppy-name" onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>
              {puppy.name}
            </p>
          );
        })}
      </div>

      {featPupId && featuredPup && (
        <div className="featured-puppy">
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

export default App;
