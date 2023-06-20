'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('#courses');

  fetch('http://localhost:8081/api/courses')
    .then((response) => response.json())
    .then((courses) => {
      renderCourses(courses, table);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  function renderCourses(courses, table) {
    const trTemplate = document.getElementById('courseRowTemplate');
    const thead = findOrCreateElement('thead', table);
    thead.innerHTML = '';
    const theadTr = thead.insertRow();
    const columns = ['Course Name', 'Department', 'Course No.', '', '', ''];
    columns.forEach((column) => {
      const cell = theadTr.insertCell();
      cell.textContent = column;
    });

    const tbody = findOrCreateElement('tbody', table);
    tbody.innerHTML = '';
    courses.forEach((course) => {
      const row = trTemplate.content.cloneNode(true);
      row.querySelector('.course-name').textContent = course.courseName;
      row.querySelector('.course-dept').textContent = course.dept;
      row.querySelector('.course-number').textContent = course.courseNum;

      const deleteLink = document.createElement('a');
      deleteLink.textContent = 'Delete Course';
      deleteLink.href = `./confirm-delete.html?courseId=${course.id}`;
      row.querySelector('.delete-link').appendChild(deleteLink);

      const detailsLink = document.createElement('a');
      detailsLink.textContent = 'Details';
      detailsLink.href = `./details.html?courseId=${course.id}`;
      row.querySelector('.course-details').appendChild(detailsLink);
      tbody.appendChild(row);
    });
  }

  function findOrCreateElement(selector, root = document) {
    let element = root.querySelector(selector);
    if (element) {
      return element;
    }

    element = document.createElement(selector);
    root.appendChild(element);
    return element;
  }
});
