let btnAdd = document.querySelector('.btn-ad-tarefa')
let input = document.getElementById('input')



let listaTarefas = []
carregarTarefas()


btnAdd.onclick = () => {

    if (input.value == '') {
        window.alert('[ERRO] Insira uma Tarefa!')
    } else {

        listaTarefas.push({
            tarefa: input.value,
            concluido: false
        })

        input.value = ""

        mostrarTarefas()
        guardarTarefas()
    }
}

function mostrarTarefas(){

    let novaTarefa = ' '

    listaTarefas.forEach((item, posicao) =>{

        novaTarefa = novaTarefa + 
        
            `<li class="tarefa ${item.concluido && 'done'}">
                    <img class="concluir-tarefa" src="/img/checked.png" alt="" onclick="concluirTarefa(${posicao})">
                    <div class="tarefa-a-fazer">${item.tarefa}</div>
                    <img class="eliminar-tarefa" src="/img/trash.png" alt="" onclick="eliminarTarefa(${posicao})">
                </li>`

    })

    document.querySelector('.lista-tarefas').innerHTML = novaTarefa
}

function eliminarTarefa(posicao){

    listaTarefas.splice(posicao, 1)

    guardarTarefas()
    mostrarTarefas()

}

function concluirTarefa(posicao){

    listaTarefas[posicao].concluido = !listaTarefas[posicao].concluido
    
    guardarTarefas()
    mostrarTarefas()
}

function guardarTarefas(){
    localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas))
}

function carregarTarefas(){
    tarefasGuardadas = localStorage.getItem('listaTarefas')

    if(tarefasGuardadas != null){
        listaTarefas = JSON.parse(tarefasGuardadas)
        mostrarTarefas()
    }else{
        listaTarefas = []
        alert('Não existem tarefas!')
    }
}