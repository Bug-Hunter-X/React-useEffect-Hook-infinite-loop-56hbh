```javascript
//In App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //This is a common mistake that will cause an infinite loop
    setCount(count + 1);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
```