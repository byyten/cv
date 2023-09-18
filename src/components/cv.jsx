
function CV( {candidate, academics, employment }) {
    console.log(employment)
    return (
        <>
            {/* whatever design is appropriate ....   */}
        <div className="page">
            <div className="cv head">
                <h3 className='cv candidate'> { candidate.name } </h3>
                <div className="cv candidate"> 
                    <div className="icon_label">
                        <span className='material-symbols-outlined'> phone </span>
                        <span className='phone label'> { candidate.phone } </span>
                    </div>   
                    <div className="icon_label">
                        <span className='material-symbols-outlined'> email </span>
                        <span className='email label'> { candidate.email } </span>
                    </div>   
                    <div className="icon_label">
                        <span className='material-symbols-outlined'> home_pin </span>
                        <span className="location label"> {candidate.location } </span>
                    </div>   
                </div>
            </div>
            <div className="banner">Education</div>
            <div className="education">
                
                {/* <div className="education"> */}
                
                    {   academics.map(academy => { 
                        return <>
                            <div className="cv academy">
                                <div className="cv inst_study">
                                    <div className="cv company">
                                        <span className="company"> { academy.institute } </span>
                                    </div>
                                    
                                </div>
                                <div className="cv dates">
                                    <span className="graduate"> { academy.graduate } </span>
                                </div>
                            
                            </div>
                            <div className="cv position">
                                        <span className="study"> { academy.study } </span>
                                    </div>

                        </>})
                    }
                {/* </div> */}
            </div>
            <div className="banner">Employment History</div>
            <div className="employment">
                
                {/* <div className="employment"> */}
                    {   employment.map(employ => { 
                            return <>
                            <div className="cv company">
                                <div className="cv employ">
                                    <div className="cv headline">
                                        <div className="cv company">
                                            <span className="company"> { employ.company } </span>
                                        </div>
                                        <div className="cv dates">
                                            <span className="from"> {  employ.from + (employ.to ? '-' + employ.to : '') } </span>
                                        </div>
                                    </div>

                                </div>
                                <div className="cv position">
                                    <span className="position"> { employ.position } </span>
                                </div>
                                <div className="cv responsibilities">
                                    <span className="responsibilities"> { employ.responsibilities } </span>
                                </div>
                            </div>
                           
                        </>})
                    }
                {/* </div> */}
            </div>

        </div>





        </>
    )
}

export { CV }