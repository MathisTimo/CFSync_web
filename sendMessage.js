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
