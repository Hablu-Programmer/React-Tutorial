function Greetings({IsLogin}){
    return(
        <>
            {
                IsLogin ? <h1>Welcome back</h1> : <h1>Please Login First</h1>
            }
        </>
    )

}

export default Greetings; 