fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.createElement('tbody');
    data.forEach(person => {
      const row = document.createElement('tr');

      const fullNameCell = document.createElement('td');
      fullNameCell.textContent = getFullName(person);
      row.appendChild(fullNameCell);

      const ageCell = document.createElement('td');
      ageCell.textContent = getAge(person);
      row.appendChild(ageCell);

      const genderCell = document.createElement('td');
      genderCell.textContent = getGender(person);
      row.appendChild(genderCell);

      tableBody.appendChild(row);
    });

    // Append the table body to the desired location in the DOM
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.appendChild(tableBody);
  })
  .catch(error => {
    console.error(error);
  });

function getFullName(person) {
  return `${person.fName} ${person.lName}`;
}

function getAge(person) {
  const birthdate = new Date(person.birthdate);
  const currentYear = new Date().getFullYear();
  return `${person.fName} is ${currentYear - birthdate.getFullYear()} years old`;
}

function getGender(person) {
  return `${person.fName} is ${person.gender}`;
}