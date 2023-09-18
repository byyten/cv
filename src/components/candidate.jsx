
function Candidate({ candidate, setName, setEmail, setPhone, setLocation }) { 
    return (
        <div className="formInputs">
            <div className="headline">
                <div className="updown">
                    <label htmlFor="name">Candidate Name</label>
                    <input type="text" className="name" id="name" onChange={(evt) => setName(evt.target.value)} 
                        value={candidate.name}
                    />
                </div>
                <div className="updown">
                    <label htmlFor="phone">Phone</label>
                    <input type="text"className="phone" id="phone" onChange={(evt) => setPhone(evt.target.value)} 
                        value={candidate.phone}
                    />
                </div>
            </div>
            <div className="headline">
                <div className="updown">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="email" id="email" onChange={(evt) => setEmail(evt.target.value)} 
                        value={candidate.email}
                    />
                </div>
                <div className="updown">
                    <label htmlFor="location">Location</label>
                    <input type="text"className="location" id="location" onChange={(evt) => setLocation(evt.target.value)} 
                        value={candidate.location}
                    />
                </div>         
            </div>
        </div>
    )
}

export { Candidate }

