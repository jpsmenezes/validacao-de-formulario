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
              if (send) {
                     form.submit();
              }
       },
       checkInput:(input) => {
              //O método getAttribute () retorna o valor do atributo com o nome especificado de um elemento.
              let rules = input.getAttribute('data-rules'); 

              if(rules !== null){
                     rules = rules.split('|');
                     for (let k in rules){
                            let rDetails = rules[k].split('=');
                            switch(rDetails[0]){
                                   case 'required':
                                          if(input.value == ""){
                                                 return 'Campo Obrigatório'
                                          }
                                          break
                                   case 'min':

                                          break
                            } 
                     }
              }
              return true;
       }
};

let form = document.querySelector("#validador");
form.addEventListener('submit', B7validator.handleSubmit);