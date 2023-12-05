let cont = 0;
let marcado = false;
let desc = document.getElementById('descricao');
let resp = document.getElementById('responsavel');
let table = document.getElementById('lista-de-tarefas');

function add(event){
    event.preventDefault();

    let descInput = desc.value;
    let respInput = resp.value;

    if(descInput !== "" && descInput !== null && descInput !== undefined && respInput !== "" && respInput !== null && respInput !== undefined){
        cont++

    let add = `
    <tr id="${cont}"> 
    <td id="tarefa-${cont}" onclick="trocarT(${cont})" class="tarefas"> ${descInput}</td>
    <td id="status-${cont}">Pendente</td> 
    <td onclick="trocarN(${cont})" id="nome-${cont}" class="responsaveis">${respInput} </td>
    <td>
    <button onclick="concluido(${cont})" class="concluir">Concluir</button>
    <button onclick="cancelar(${cont})" class="cancelar">Cancelar</button>
    <button onclick="remover(${cont})" class="remover">Remover</button>
    </td>
    </tr>`;

    table.innerHTML += add;
    marcado = false;
    
    
    desc.value = '';
    desc.focus();
    resp.value = '';
    }
}

function concluido(id){
    let status = document.getElementById("status-" + id);
    if(marcado == false){
        status.replaceChildren("Concluído");
    }
}

function trocarT(id){
    let tarefa = document.getElementById("tarefa-" + id);
    let novoT = prompt("Informe a nova tarefa: ");
    if(novoT !== "" && novoT !== null && novoT !== undefined){
        tarefa.replaceChildren(novoT);
    }
}

function trocarN(id){
    let nome = document.getElementById("nome-" + id);
    let novoN = prompt("Informe o novo responsavel: ");
    if(novoN !== "" && novoN !== null && novoN !== undefined){
        nome.replaceChildren(novoN);
    }
}

function cancelar(id){
    let status = document.getElementById("status-" + id);
    let tarefa = document.getElementById("tarefa-" + id);
    tarefa.style.textDecoration = "line-through";
    status.replaceChildren("Cancelado");
    marcado = true;
}

function remover(id){
    let remover = document.getElementById(id);
    remover.remove();
}
