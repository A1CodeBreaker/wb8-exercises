'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();

    const courseName = document.getElementById('courseName').value;
    const courseNumber = document.getElementById('courseNumber').value;
    const department = document.getElementById('department').value;
    const instructor = document.getElementById('instructor').value;
    const startDate = document.getElementById('startDate').value;
    const duration = document.getElementById('duration').value;

    const newCourse = {
      courseName,
      courseNumber,
      department,
      instructor,
      startDate,
      duration,
    };

    console.log('New Course:', newCourse);
    form.reset();
  }
});
