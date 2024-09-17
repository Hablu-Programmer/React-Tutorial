function MyDate(){
    const Time = new Date();

    return (
        <>
        <h3>Local date & time</h3>
        <p>{Time.toLocaleString()}</p>
        </>
    )
}

export default MyDate; 