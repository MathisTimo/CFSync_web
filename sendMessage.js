function sendMessage() {
  event.preventDefault();
  var message = document.getElementById("fieldmessage").value;
  db.collection('TP_general').add({
    msg: message,
    time: 'NOW',
    user: 'Moi'
  }).then(function(docRef) {
    console.log('ID message:', docRef.id);
  }).catch(function(error) {
    console.log('Error:', error);
  });
}
