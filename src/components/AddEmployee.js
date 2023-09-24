import "../styles.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from ".././Data.json";

export default function AddEmployee(props) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        epmId: Math.random(),
        email: "",
        contactNumber: "",
        dob: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const back = () => {
        navigate("/");
    };

    // useEffect(() => { });

    const handleSubmit = (event) => {
        event.preventDefault();
        Data.push(formData);
        navigate("/");
    };
    return (
        <div className="employee-form">
            <form onSubmit={handleSubmit}>
                <h1> Employee Registration </h1>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Number:</label>
                    <input
                        type="text"
                        name="contactNumber"
                        placeholder="Enter Mobile Number"
                        value={formData.contactNumber}
                        className="form-control"
                        maxLength={10}
                        pattern="^[0-9]*$"
                        onChange={handleInputChange}
                    />
                    { formData.contactNumber.length < 9 && <span>Invalid Number{formData.contactNumber.length} </span> }
                </div>
                <div>
                    <label>DOB:</label>
                    <input
                        type="date"
                        name="dob"
                        placeholder="Enter your Date of Birth"
                        value={formData.dob}
                        onChange={handleInputChange}
                    />
                    
                </div>
                <div className="action_button">
                    <button className="danger" onClick={back}> Back </button>
                    <button className="sucess" type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}
