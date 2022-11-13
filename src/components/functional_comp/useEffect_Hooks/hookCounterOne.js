import React, { useEffect, useState } from 'react'

const HOOKCOUNTERONE = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  useEffect(()=>{
    console.log('Updating document title');
    document.title = `Functional Comp clicked ${count} times `;
  },[count]);

  return (
    <div>

<h1>{name}</h1>
      <input type="text" value={name} onChange={el=> setName(el.target.value)} />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default HOOKCOUNTERONE