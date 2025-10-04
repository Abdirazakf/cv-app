export default function Education({data, updateField, addEntry, removeEntry}) {
    const handleChange = (event) => {
        const {name,value} = event.target
        updateField(name,value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Education submitted: ', data)
    }

    return(
        <section className="form-section education-section">
            <h3>Education</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="school">
                        School
                        <br />
                        <input 
                        type="text"
                        name="school"
                        id="school"
                        value={data.school}
                        placeholder="Georgia Tech"
                        onChange={handleChange}
                        required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="field">
                        Field of Study
                        <br />
                        <input 
                        type="text"
                        name="field"
                        id="field"
                        value={data.field}
                        placeholder="Bachelors of Science"
                        onChange={handleChange}
                        required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="degree">
                        Degree
                        <br />
                        <input 
                        type="text"
                        name="degree"
                        id="degree"
                        value={data.degree}
                        placeholder="Computer Science"
                        onChange={handleChange}
                        required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="gradDate">
                        Graduation Date
                        <br />
                        <input 
                        type="date" 
                        name="gradDate"
                        id="gradDate"
                        value={data.gradeDate}
                        onChange={handleChange}
                        required
                        />
                    </label>
                </div>
            </form>
        </section>
    )
}