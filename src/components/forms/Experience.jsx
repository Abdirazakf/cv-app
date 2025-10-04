import Button from '../Button'

export default function Experience({data, updateField, addExperience, removeExperience}) {
    const handleChange = (id, event) => {
        const {name, value} = event.target
        updateField(id, name, value)
    }

    return(
        <section className="form-section experience-section">
            <div className="section-header">
                <h3>Experience</h3>
                <Button 
                    type="button"
                    text="+ Add"
                    variant="add"
                    onClick={addExperience}
                />
            </div>
            
            {data.experience.map((exp, index) => (
                <div key={exp.id} className="entry-container">
                    {data.experience.length > 1 && (
                        <div className="entry-header">
                            <span className="entry-number">Entry {index + 1}</span>
                            <Button 
                                type="button"
                                text="✕"
                                variant="remove"
                                onClick={() => removeExperience(exp.id)}
                            />
                        </div>
                    )}
                    
                    <div className="form-group">
                        <label htmlFor={`company-${exp.id}`}>
                            Company
                            <br />
                            <input 
                                type="text" 
                                name="company"
                                id={`company-${exp.id}`}
                                value={exp.company}
                                placeholder="Google"
                                onChange={(e) => handleChange(exp.id, e)}
                                required
                            />
                        </label>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor={`position-${exp.id}`}>
                            Position
                            <br />
                            <input 
                                type="text" 
                                name="position"
                                id={`position-${exp.id}`}
                                value={exp.position}
                                placeholder="Software Engineer"
                                onChange={(e) => handleChange(exp.id, e)}
                                required
                            />
                        </label>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor={`responsibilities-${exp.id}`}>
                            Responsibilities
                            <br />
                            <textarea 
                                name="responsibilities"
                                id={`responsibilities-${exp.id}`}
                                value={exp.responsibilities}
                                placeholder="Describe your key responsibilities..."
                                onChange={(e) => handleChange(exp.id, e)}
                                rows="4"
                                required
                            />
                        </label>
                    </div>
                    
                    <div className="form-group date-range">
                        <label htmlFor={`startDate-${exp.id}`}>
                            Start Date
                            <br />
                            <input 
                                type="date" 
                                name="startDate" 
                                id={`startDate-${exp.id}`} 
                                value={exp.startDate} 
                                onChange={(e) => handleChange(exp.id, e)} 
                                required 
                            />
                        </label>
                        <label htmlFor={`endDate-${exp.id}`}>
                            End Date
                            <br />
                            <input 
                                type="date" 
                                name="endDate" 
                                id={`endDate-${exp.id}`} 
                                value={exp.endDate} 
                                onChange={(e) => handleChange(exp.id, e)} 
                                required 
                            />
                        </label>
                    </div>
                    
                    {index < data.experience.length - 1 && <div className="entry-divider"></div>}
                </div>
            ))}
        </section>
    )
}