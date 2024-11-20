// src/components/ClassSchedule.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClassSchedule = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get('/api/classes'); // Adjust the API endpoint accordingly
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []);

  return (
    <div>
      <h2>Class Schedule</h2>
      <ul>
        {classes.map(classItem => (
          <li key={classItem.id}>{classItem.name} - {classItem.time}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClassSchedule;
