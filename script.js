// BOTAO ADDTASK ///////////////////////////////////////////
//importações
botao = document.querySelector(".mais");
span = document.querySelector(".tarefas")


botao.addEventListener("click", function addTask() {
    span.innerHTML = `<span class = "tarefa-shape-aberto"> tarefa </span>`
    }
)
     









// DATA /////////////////////////////////////////////////////////////

class ExibirData {
    constructor (element) {
        this.element = document.querySelector(".today")
        this.date = new Date()


    }

    updateElement() {
        this.element.innerText = new Intl.DateTimeFormat("pt-Br").format(this.date)
    }

    init() {
        if (this.element) this.updateElement();
        return this
    }  
    
}

