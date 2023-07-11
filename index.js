let selectedRows = null;

// show alert

const showAlert = (message, className) => {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);
  setTimeout(() => document.querySelector(".alert").remove(), 3000);
};
// clear fields function
const clearFields = () => {
  document.querySelector("#firstName").value = "";
  document.querySelector("#lastName").value = "";
  document.querySelector("#rollNo").value = "";
};

// add data

document.querySelector("#student-form").addEventListener("submit", (e) => {
  e.preventDefault();
  //   get-form values
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const rollNo = document.querySelector("#rollNo").value;

  // validate
  if (firstName == "" || lastName == "" || rollNo == "") {
    showAlert("please fiil in all ", "danger");
  }
  else {
    if (selectedRows == null) {
      const list = document.querySelector("#student-list");
      const row = document.createElement("tr");

      row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${rollNo}</td>
            <td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm delete ">Delete</a>
            </td>
            `;
      list.appendChild(row);
      selectedRows = null;

      showAlert("student added", "success");
     
    }
    else{
        selectedRows.children[0].textcontent = firstName;
        selectedRows.children[1].textcontent = lastName;
        selectedRows.children[2].textcontent = rollNo;
        selectedRows = null;
        showAlert("student info Edited" , "info")
    }
    clearFields()
  }
});

// edit the data
document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("edit")) {
      selectedRows = target.parentElement.parentElement;
      document.querySelector("#firstName").value =
        selectedRows.children[0].textContent;
      document.querySelector("#lastName").value =
        selectedRows.children[1].textContent;
      document.querySelector("#rollNo").value =
        selectedRows.children[2].textContent;
      showAlert("Student info edited", "danger");
    }
  });

// Delete Alert
document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    showAlert("student Data Deleted", "danger");
  } 
});

// https://www.youtube.com/watch?v=KiRKUTDYlG8
