import React, {useState} from 'react'

const HookCounterThree = () => {

    const [name, setName] = useState({firstName:'', lastName:''});

  return (
    <div>
        <form>
            <input type="text" placeholder='First Name' value={name.firstName} onChange={e=>setName({...name, firstName: e.target.value})}  />
            <input type="text" placeholder='Last Name' value={name.lastName} onChange={e=>setName({...name,lastName: e.target.value})}  />


            <h4>Your First Name Is: {name.firstName}</h4>
            <h4>Your Last Name Is: {name.lastName}</h4>

        </form>
    </div>
  )
}

export default HookCounterThree