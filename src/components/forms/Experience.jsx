export default function Experience({data, updateField}) {
    const handleChange = (event) => {
        const {name,value} = event.target
        updateField(name,value)
    }

    return(
        <section className="form-section experience-section">
            <h3>Experience</h3>
            <div className="form-group">
                <label htmlFor="company">
                    Company
                    <input 
                    type="text" 
                    name="company"
                    id="company"
                    value={data.company}
                    onChange={handleChange}
                    required
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="position">
                Position
                <input 
                type="text" 
                name="position"
                id="position"
                value={data.position}
                onChange={handleChange}
                required
                />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="responsibilities">
                    Responsibilities
                    <input 
                    type="text" 
                    name="responsibilities"
                    id="responsibilities"
                    value={data.responsibilities}
                    onChange={handleChange}
                    required
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="startDate">
                    Start Date
                    <input type="date" name="startDate" id="startDate" value={data.startDate} onChange={handleChange} required />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="endDate">
                    End Date
                    <input type="date" name="endDate" id="endDate" value={data.endDate} onChange={handleChange} required />
                </label>
            </div>
        </section>
    )
}