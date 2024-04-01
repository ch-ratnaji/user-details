
function calculateAge(dateOfBirth) {
  var today = new Date();
  var birthDate = new Date(dateOfBirth);
  var ageee = today.getFullYear() - birthDate.getFullYear();
  var monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    ageee--;
  }
  return ageee;
}

function saveUserData() {

  var name = document.getElementById("name").value;
  var dob = document.getElementById("dob").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var placeOfBirth = document.getElementById("placeOfBirth").value;
  var address = document.getElementById("address").value;
  //var age = document.getElementById("age").value;

  var age = calculateAge(dob);
 


  var user = {
    name: name,
    dob: dob,
    gender: gender,
    placeOfBirth: placeOfBirth,
    address: address,
    age: age,
  };


  var users = JSON.parse(localStorage.getItem("users")) || [];

  var isDuplicate = users.some(function (existingUser) {
    return existingUser.name === user.name &&
      existingUser.dob === user.dob &&
      existingUser.gender === user.gender &&
      existingUser.placeOfBirth === user.placeOfBirth &&
      existingUser.address === user.address;
  });

  // If user data is not duplicate, save it
  if (!isDuplicate) {

    // Filter out redundant user data
    // users = users.filter(function(existingUser) {
    //   return existingUser.name !== user.name ||
    //          existingUser.dob !== user.dob ||
    //          existingUser.gender !== user.gender ||
    //          existingUser.placeOfBirth !== user.placeOfBirth ||
    //          existingUser.address !== user.address;
    // });
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));



    document.getElementById("name").value = "";
    document.getElementById("dob").value = "";
    // document.querySelector('input[name="gender"]:checked').forEach((radio)=>{radio.checked = false;}) ;
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("placeOfBirth").value = "";
    // document.getElementById("age").value = "";
    document.getElementById("address").value = "";

    alert("User information saved successfully!");
    displaySavedUsers();
  }
}



function displaySavedUsers() {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  var tableBody = document.getElementById("userTable").getElementsByTagName("tbody")[0];


  tableBody.innerHTML = "";


  users.forEach(function (user) {
    var row = tableBody.insertRow();
    row.insertCell(0).innerHTML = user.name;
    row.insertCell(1).innerHTML = user.dob;
    row.insertCell(2).innerHTML = user.age;
    row.insertCell(3).innerHTML = user.gender;
    row.insertCell(4).innerHTML = user.placeOfBirth;
    row.insertCell(5).innerHTML = user.address;
  });
}



