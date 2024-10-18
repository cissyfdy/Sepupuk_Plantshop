const submitAction = document.getElemenById('myForm');
      submitAction.addEventListener('submit',function(event){
        const fullName = document.getElemenById('fullName').value;
        const email = document.getElemenById('email').value;
        const message = document.getElemenById('pesan').value;
        
        event.preventDefault();
        windows.alert('Test');

      });
