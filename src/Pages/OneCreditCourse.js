import React, { useState } from 'react';
import './OneCreditCourse.css';
import courseImage from '../Images/LDO Book pg1.jpeg';
const OneCreditCourse = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        course: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const response = await fetch('http://localhost:8080/backend/saveData.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
      });
  
      const result = await response.json();
  
      if (result.status === "success") {
          alert('Data submitted successfully!');
          setShowModal(false);
      } else {
          alert('Submission failed. Please try again.');
      }
  };
  

    return (
        <div className="course-container">
            <div className="image-wrapper">
            <img src={courseImage} alt="Course" className="course-image" />
            <div className="blurred-content">
                    <button onClick={() => setShowModal(true)} className="read-more-btn">
                        Read More
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Student Details</h2>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your Name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                            />
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Your Email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                            <input 
                                type="text" 
                                name="course" 
                                placeholder="Course Name" 
                                value={formData.course} 
                                onChange={handleChange} 
                                required 
                            />
                            <button type="submit">Submit</button>
                            <button type="button" onClick={() => setShowModal(false)}>
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OneCreditCourse;
