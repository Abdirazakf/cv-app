import Button from '../Button'

export default function Education({data, updateField, addEducation, removeEducation}) {
    const handleChange = (id, event) => {
        const {name, value} = event.target
        updateField(id, name, value)
    }

    return(
        <section className="form-section education-section">
            <div className="section-header">
                <h3>Education</h3>
                <Button 
                    type="button"
                    text="+ Add"
                    variant="add"
                    onClick={addEducation}
                />
            </div>
            
            {data.education.map((edu, index) => (
                <div key={edu.id} className="entry-container">
                    {data.education.length > 1 && (
                        <div className="entry-header">
                            <span className="entry-number">Entry {index + 1}</span>
                            <Button 
                                type="button"
                                text="✕"
                                variant="remove"
                                onClick={() => removeEducation(edu.id)}
                            />
                        </div>
                    )}
                    
                    <div className="form-group">
                        <label htmlFor={`school-${edu.id}`}>
                            School
                            <br />
                            <input 
                                type="text"
                                name="school"
                                id={`school-${edu.id}`}
                                value={edu.school}
                                placeholder="Georgia Tech"
                                onChange={(e) => handleChange(edu.id, e)}
                                required
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label htmlFor={`field-${edu.id}`}>
                            Field of Study
                            <br />
                            <input 
                                type="text"
                                name="field"
                                id={`field-${edu.id}`}
                                value={edu.field}
                                placeholder="Bachelors of Science"
                                onChange={(e) => handleChange(edu.id, e)}
                                required
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label htmlFor={`degree-${edu.id}`}>
                            Degree
                            <br />
                            <input 
                                type="text"
                                name="degree"
                                id={`degree-${edu.id}`}
                                value={edu.degree}
                                placeholder="Computer Science"
                                onChange={(e) => handleChange(edu.id, e)}
                                required
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label htmlFor={`gradDate-${edu.id}`}>
                            Graduation Date
                            <br />
                            <input 
                                type="date" 
                                name="gradDate"
                                id={`gradDate-${edu.id}`}
                                value={edu.gradDate}
                                onChange={(e) => handleChange(edu.id, e)}
                                required
                            />
                        </label>
                    </div>
                    
                    {index < data.education.length - 1 && <div className="entry-divider"></div>}
                </div>
            ))}
        </section>
    )
}