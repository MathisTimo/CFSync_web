function sendMessage() {
  event.preventDefault();
  var message = document.getElementById("fieldmessage").value;
  document.getElementById("fieldmessage").value = '';
  var time = new Date();
  db.collection('TP_general').add({
    msg: message,
    time: time,
    user: 'Moi'
  }).then(function(docRef) {
    console.log('ID message:', docRef.id);
  }).catch(function(error) {
    console.log('Error:', error);
  });
}

function onWriting() {
  var writeRef = db.collection("onWrite").doc("main");

  return writeRef.update({
    write: true
  }).then(function() {
    //console.log("Document Updated");
  }).catch(function(error) {
    console.log("Error", error);
  });
}

function stopWriting() {
  var writeRef = db.collection("onWrite").doc("main");

  return writeRef.update({
    write: false
  }).then(function() {
    //console.log("Document Updated");
  }).catch(function(error) {
    console.log("Error", error);
  });
}
