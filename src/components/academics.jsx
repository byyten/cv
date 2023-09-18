
function Academics({ academics, props }) {   
    props.hasAdd = false 
    props.hasUpd = true 
    props.hasDel = true 

    return (
        <> 
            {   
                academics.map(academy => {
                    return <>
                        <Academy
                            academy = { academy }
                            props = { props }
                        />
                    </>
                    
                })
            }
        </>
    )
}
    
function Academy({ academy, props }) {
    const { curryr, hasAdd, hasUpd, hasDel, handleAddAcademy, handleUpdateAcademy, handleDeleteAcademy } = props
    return (
        <>
            <form className={"formInstitute " + ( hasAdd ? 'hid' : 'viz')}  key={academy.id } >  
                <div className='eformInputs'>
                    <div className={'education_container' + (hasAdd ? ' inputs' : '')}>
                        <div className="academy">
                            <div className="updown">
                                { hasAdd && (<label htmlFor="institute">Institute</label>) }
                                <input type="text" name="institute" id="institute" placeholder="academic institution"
                                    defaultValue={academy.institute  } 
                                />
                            </div>
                            <div className="updown">
                                { hasAdd && (<label htmlFor="study">Study</label>) }
                                <input type="text" name="study" id="study" placeholder="course of study"
                                    defaultValue={academy.study } 
                                />
                            </div>    
                            <div className="updown">
                                { hasAdd && ( <label htmlFor="graduate">Graduation </label>) }
                                <input type="number"  min="1980" max={ curryr } name="graduate" id="graduate" placeholder="graduation / final year"
                                    defaultValue={academy.graduate }
                                />
                            </div>    
                        </div>
                    </div>
                    <div className="buttons">
                        { hasAdd && (<button className="addAcademicRecord" onClick={(evt) =>{ handleAddAcademy(evt) }}>
                            <span className="material-symbols-outlined"> add </span>
                        </button>) }
                        { hasUpd && (<button className="updateAcademicRecord" onClick={(evt) =>{ handleUpdateAcademy(evt) } }>
                            <span className="material-symbols-outlined"> edit </span>
                        </button>) }
                        { hasDel && (<button className="deleteAcademicRecord" onClick={(evt) =>{ handleDeleteAcademy(evt) } }>
                            <span className="material-symbols-outlined">delete</span>
                        </button>) }
                    </div>                                
                </div>                  
            </form>           
        </>
    )
}

export  { Academics, Academy }

