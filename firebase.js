var firebaseConfig = {
    apiKey: "AIzaSyA7lPk7Ov0Ti1C11WY3h5oGu5zLb0UwKqA",
    authDomain: "fir-9a0be.firebaseapp.com",
    projectId: "fir-9a0be",
    storageBucket: "fir-9a0be.appspot.com",
    messagingSenderId: "813950343250",
    appId: "1:813950343250:web:e52161d631a2b87370e78b",
    measurementId: "G-L73EKJXRP7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
let dbRef=firebase.database().ref().child("students"); 
  function createStudent(){
      let name=document.getElementById("name").value;
      let branch=document.getElementById("branch").value;
      let rollno=document.getElementById('rollno').value;
      
      dbRef.child(rollno).set({
          name:name,
          branch:branch,
          rollno:rollno
      }); 
      console.log("Student data inserted Successfully");
  }
  function deleteStudent(){
      
      let rollno=window.prompt("Enter the Rollno of the student to be deleted");
      dbRef.child(rollno).remove();
      console.log(rollno+" removed");
  }
  function updateStudent(){
    let name=document.getElementById("name").value;
    let branch=document.getElementById("branch").value;
    let rollno=document.getElementById('rollno').value;
    dbRef.child(rollno).update({
      name:name,
      branch:branch,
      rollno:rollno
    })
    console.log("Updated Succesfully");
  }
  
  function display(){
    var tb=document.createElement("TABLE");
    tb.border="1";
    var row=tb.insertRow(-1)
    var cella1=row.insertCell(-1)
    var cella2=row.insertCell(-1)
    var cella3=row.insertCell(-1)
    cella1.innerHTML="<h5>Student Name</h5>"
    cella2.innerHTML="<h5>Branch</h5>"
    cella3.innerHTML="<h5>Rollno</h5>"
    dbRef.once('value',function(snapshot) {
       
      snapshot.forEach(function(childSnapshot) {
        var row1=tb.insertRow(-1)
        var cell1=row1.insertCell(-1)
        var cell2=row1.insertCell(-1)
        var cell3=row1.insertCell(-1)
          cell1.innerHTML=childSnapshot.val().name;
          cell2.innerHTML=childSnapshot.val().branch;
          cell3.innerHTML=childSnapshot.key;
           
      });
    });
    var Dtable=document.getElementById("students")
    Dtable.append(tb);

  }