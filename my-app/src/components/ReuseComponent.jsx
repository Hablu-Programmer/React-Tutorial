function ContactCard(hablu){
    return (
        <>
            <div className="card">
                <h1>{hablu.name} Contact Information</h1>
                <p>{hablu.des}</p>
                <button>Contact</button>
            </div>
        
        </>
    )
}

export default ContactCard; 