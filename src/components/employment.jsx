
function Employ({ employ, props }) { //
    const { curryr, hasAdd, hasUpd, hasDel, handleAddEmploy, handleUpdateEmploy, handleDeleteEmploy } = props
    
    return (
        <>
            <form className={"formEmploy " + ( hasAdd ? 'hid' : 'viz')} key={employ.id} >  
                <div className={'employ_container' + (hasAdd ? ' inputs' : '')}>
                    <div className="headline">
                        <div className="company">
                            <div className="updown">
                                { hasAdd && (<label htmlFor="company">Company</label>) }
                                <input type="text" name="company" id="company" placeholder="company"
                                    defaultValue={employ.company  } 
                                />
                            </div>
                                                
                        </div>
                        <div className="dates">
                            <div className="updown">
                            { hasAdd && ( <label htmlFor="from">From </label>) }
                                <input type="number"  min="1980" max={ curryr } name="from" id="from" placeholder="from"
                                    defaultValue={employ.from  }
                                />
                            </div>
                            <div className="updown">
                                { hasAdd && ( <label htmlFor="to">Until </label>) }
                                <input type="number"  min="1980" max={ curryr } name="to" id="to" placeholder="until"
                                    defaultValue={employ.to  }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="position">
                        { hasAdd && (<label htmlFor="position">Position</label>) }
                        <input type="text" name="position" id="position" placeholder="position / job title"
                            defaultValue={employ.position } 
                        />
                    </div>
                    <div className="responsibilities">
                        { hasAdd && ( <label htmlFor="responsibilities">Responsibilities </label>) }
                        <textarea name="responsibilities" id="responsibilities" placeholder="responsibilities"
                            defaultValue={employ.responsibilities  }
                        />
                    </div>
                    <div className="buttons">
                        { hasAdd && <button className="addEmployRecord" title="Add employment record" onClick={(evt) =>{ handleAddEmploy(evt) }}>
                            <span className="material-symbols-outlined"> add </span>
                            
                        </button> }
                        { hasUpd && <button className="updateEmployRecord"title="Update employment record" onClick={(evt) =>{ handleUpdateEmploy(evt) } }>
                            <span className="material-symbols-outlined"> edit </span>
                        </button> }
                        { hasDel && <button className="deleteEmployRecord" title="Delete employment record"onClick={(evt) =>{ handleDeleteEmploy(evt) } }>
                            <span className="material-symbols-outlined">delete</span>
                        </button> }
                    </div>
                    
                </div>                  
            </form>           
        </>
    )

}

function Employment({ employment, props }) { 

    props.hasAdd = false 
    props.hasUpd = true 
    props.hasDel = true 
    
    return (
        <>
            { employment.map(employ => {
                return <>
                    <Employ
                        employ = { employ }
                        props = { props }
                    />
                </>
                }) 
            }
        </>
    )
}

export  { Employment, Employ }


