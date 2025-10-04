export default function Experience({data, updateField}) {
    const handleChange = (event) => {
        const {name, value} = event.target
        updateField(name, value)
    }

    return(
        <section className="form-section experience-section">
            <h3>Experience</h3>
            <div className="form-group">
                <label htmlFor="company">
                    Company
                    <br />
                    <input 
                        type="text" 
                        name="company"
                        id="company"
                        value={data.company}
                        placeholder="Google"
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="position">
                    Position
                    <br />
                    <input 
                        type="text" 
                        name="position"
                        id="position"
                        value={data.position}
                        placeholder="Software Engineer"
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="responsibilities">
                    Responsibilities
                    <br />
                    <textarea 
                        name="responsibilities"
                        id="responsibilities"
                        value={data.responsibilities}
                        placeholder="Describe your key responsibilities..."
                        onChange={handleChange}
                        rows="4"
                        required
                    />
                </label>
            </div>
            <div className="form-group date-range">
                <label htmlFor="startDate">
                    Start Date
                    <br />
                    <input 
                        type="date" 
                        name="startDate" 
                        id="startDate" 
                        value={data.startDate} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label htmlFor="endDate">
                    End Date
                    <br />
                    <input 
                        type="date" 
                        name="endDate" 
                        id="endDate" 
                        value={data.endDate} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
            </div>
        </section>
    )
}