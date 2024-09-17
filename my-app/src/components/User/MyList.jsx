function MyList(){
    const User = [ 
        {
            id:1,
            name:"eshan",
            prof:"programmer"
        },
        {
            id:2,
            name:"tutul",
            prof:"programmer"
        },
        {
            id:3,
            name:"Salman",
            prof:"programmer"
        }
    ]
    return (
        <>
           <ul>
                {User.map((MyUsers)=> (
                      <li key={MyUsers.id}>
                      {MyUsers.name}, {MyUsers.prof}, {MyUsers.id}
                  
                      </li>
                ))

                }
           </ul>

           <button className="btn btn-secondary">Bootstrap Button</button>
        </>

    )
}

export default MyList; 