function createTable() {
  // Ask user for number of rows
  let rn = prompt("Input number of rows");
  // Ask user for number of columns
  let cn = prompt("Input number of columns");

  // Convert inputs to numbers
  rn = parseInt(rn);
  cn = parseInt(cn);

  // Validate user input
  if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
    alert("Please enter valid positive numbers for rows and columns.");
    return;
  }

  // Get the table reference
  const table = document.getElementById("myTable");

  // Clear any previous table data
  table.innerHTML = "";

  // Generate the table dynamically
  for (let i = 0; i < rn; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < cn; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}
