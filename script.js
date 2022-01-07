let B7validator = {
    handleSubmit: (event) => {
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');

        B7validator.clearError(); // Limpar os error dos inputs

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let check = B7validator.checkInput(input);
            if (check !== true) {
                send = false;
                B7validator.showError(input, check);          
            }
        }
        if (send) {
            form.submit();
        }
    },
    checkInput: (input) => {
        //O método getAttribute () retorna o valor do atributo com o nome especificado de um elemento.
        let rules = input.getAttribute('data-rules');

        if (rules !== null) {
            rules = rules.split('|');
            for (let k in rules) {
                let rDetails = rules[k].split('=');
                switch (rDetails[0]) {
                    case 'required':
                        if (input.value == "") {
                            return 'Campo Obrigatório'
                        }
                        break;
                    case 'min':
                        if(input.value.length < rDetails[1]){
                            return 'Obrigatório ter ao menos ' + rDetails[1] + ' Caracteres';
                        }
                        break;
                        case 'email':
                            if(input.value != '') {
                                let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                if(!regex.test(input.value.toLowerCase())) {
                                    return 'E-mail digitado não é válido!';
                                }
                            }
                        break;
                }
            }
        }
        return true;
    },
    showError:(input, erro) => {
        input.style.borderColor = '#ff0000'; // adicionando uma borda vermelha no input com o erro

        let errorElement = document.createElement('div'); // criando uma div 
        errorElement.classList.add('error'); // adiciionando uma class na div
        errorElement.innerHTML = erro;

        //A propriedade parentElement retorna o elemento pai do elemento especificado.
        //O método insertBefore () insere um nó como filho, logo antes de um filho existente, que você especifica.
        //A propriedade nextElementSibling retorna o elemento imediatamente após o elemento especificado, no mesmo nível de árvore.
        input.parentElement.insertBefore(errorElement, input.ElementSibling);
    },
    clearError: () => {
        let inputs = form.querySelectorAll('input');
        for(let i = 0; i < inputs.length; i++){
            inputs[i].style = '';
        }

        let errorElement = document.querySelectorAll('.error');
        for(let i = 0; i < errorElement.length; i++){
            errorElement[i].remove();
        }
    }
};

let form = document.querySelector("#validador");
form.addEventListener('submit', B7validator.handleSubmit);