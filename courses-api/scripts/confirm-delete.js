'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const deleteButton = document.getElementById('deleteCourseBtn');
  deleteButton.addEventListener('click', confirmDeleteCourse);

  function confirmDeleteCourse() {
    const confirmation = confirm('Are you sure you want to delete this course?');

    if (confirmation) {
      
      console.log('Course deleted!');
    }
  }
});
