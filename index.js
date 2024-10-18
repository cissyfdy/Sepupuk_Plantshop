
const submitAction = document.getElementById('myForm');
      submitAction.addEventListener('submit',function(event){
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('pesan').value;
        
        event.preventDefault();
            if (fullName && email && message) {
            // Perform additional validation if needed
              window.alert('Form submitted successfully!');
            } else {
              window.alert('Please fill in all required fields.');
            }

      });
