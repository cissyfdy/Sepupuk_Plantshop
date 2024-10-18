windows.alert('HALO');
const submitAction = document.getElementById('myForm');
      submitAction.addEventListener('submit',function(event){
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('pesan').value;
        
        event.preventDefault();

      });
