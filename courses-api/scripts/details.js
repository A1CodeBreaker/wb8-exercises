'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const courseDetails = document.querySelector('#courseDetails');
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('courseId');

  if (courseId) {
    fetch(`http://localhost:8081/api/courses/${courseId}`)
      .then((response) => response.json())
      .then((course) => {
        renderCourseDetails(course, courseDetails);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function renderCourseDetails(course, courseDetails) {
    const detailsHTML = `
      <h2>${course.courseName}</h2>
      <p><strong>Course ID:</strong> ${course.courseId}</p>
      <p><strong>Department:</strong> ${course.department}</p>
      <p><strong>Course Number:</strong> ${course.courseNumber}</p>
      <p><strong>Instructor:</strong> ${course.instructor}</p>
      <p><strong>Start Date:</strong> ${course.startDate}</p>
      <p><strong>Duration:</strong> ${course.duration} days</p>
    `;
    courseDetails.innerHTML = detailsHTML;
  }
});