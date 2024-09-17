function StudentInfo({username, number, Address, Role}){
    
    return (
        <>
            <h2>{username}</h2>
            <p>Phone Number: {number}</p>
            <p>user Address: {Role}</p>
            <p>user Address: {Address}</p>
           
        </>
    )
}

export default StudentInfo