let B7validator = {
       handleSubmit:(event)=>{
              event.preventDefault();
              let send = true;

              let inputs = form.querySelectorAll('input');
              for(let i = 0; i < inputs.length; i++){
                     let input = inputs[i];
                     let check = B7validator.checkInput(input);
                     if (check !== true) {
                            send = false;
                            //exibir o erro
                     }
              }
              send = false;
              if (send) {
                     form.submit();
              }
       }
};

let form = document.querySelector("#validador");
form.addEventListener('submit', B7validator.handleSubmit);