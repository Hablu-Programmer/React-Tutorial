import { useState, useEffect } from "react";

function DataFetching(){
   const [data, setData] =  useState([]); 
   const [error, setError] = useState(null); 

   useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=> response.json())
        .then((data)=> setData(data) )
        .catch((error)=> setError(error)  )
   }, [])

   if(error) {
    return <div>Error Is{error.message}</div>
   }
    
    return (
        <>
            <h1>My Api Recent Posts</h1>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>
                        {post.id}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default DataFetching; 