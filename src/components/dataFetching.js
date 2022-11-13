import React, { useState, useEffect } from 'react'
import axios from 'axios';

export const DataFetching = () => {

    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(0);

    const handleClick = ()=>{
        setIdFromButtonClick(id);
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
            console.log(res.data)
            setPosts([res.data])
        }).catch(err => {
            console.log(err)
        })

        return () => {
           
        }
    }, [idFromButtonClick])

    return (
        <div>
            <input type="number" maxLength={3} value={id} onChange={e=>setId(e.target.value)} />
            <button onClick={handleClick}>Fetch Post</button>
         <div>
        <ul>
            {
                posts.map(post=>
                    <li key={post.id}>{post.title}</li>
                )
            }
        </ul>
    </div></div>
    )
}
