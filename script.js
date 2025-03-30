class Aluno {
    constructor(nome, idade, curso, notaFinal) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.notaFinal = notaFinal;
    }

    isAprovado() {
        return this.notaFinal >= 7;
    }

    toString() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}, Nota: ${this.notaFinal}`;
    }
}

let alunos = [];
let editando = false;
let alunoEditando = null;

/// Cadastro/Edição de Alunos ///
document.getElementById('alunoForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const curso = document.getElementById('curso').value;
    const nota = parseFloat(document.getElementById('nota').value);
    
    if (editando) {
        alunoEditando.nome = nome;
        alunoEditando.idade = idade;
        alunoEditando.curso = curso;
        alunoEditando.notaFinal = nota;
        editando = false;
        alunoEditando = null;
        document.querySelector('button[type="submit"]').textContent = 'Cadastrar';

        alert('Edição concluída.');
    } else {
        let alunoCadastrado = false;
        alunos.forEach((aluno) => {
            if(aluno.nome == nome && aluno.idade == idade && aluno.curso == curso) {
                alunoCadastrado = true;
                alert('Aluno já cadastrado nesse curso.');
                return;
            }
        });

        if(!alunoCadastrado) {
            const aluno = new Aluno(nome, idade, curso, nota);
            alunos.push(aluno);

            alert('Aluno cadastrado com sucesso.');
        }
    }
    
    atualizarTabela();
    e.target.reset();
});



function atualizarTabela() {
    const tbody = document.getElementById('corpoTabela');
    tbody.innerHTML = '';
    
    alunos.forEach((aluno, index) => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${aluno.nome}</td>
            <td>${aluno.idade}</td>
            <td>${aluno.curso}</td>
            <td>${aluno.notaFinal}</td>
            <td>${aluno.isAprovado() ? 'Aprovado' : 'Reprovado'}</td>
            <td>
                <button onclick="editarAluno(${index})">Editar</button>
                <button onclick="excluirAluno(${index})">Excluir</button>
            </td>
        `;
        
        tbody.appendChild(tr);
    });
}

function editarAluno(index) {
    const aluno = alunos[index];
    document.getElementById('nome').value = aluno.nome;
    document.getElementById('idade').value = aluno.idade;
    document.getElementById('curso').value = aluno.curso;
    document.getElementById('nota').value = aluno.notaFinal;
    
    editando = true;
    alunoEditando = aluno;
    document.querySelector('button[type="submit"]').textContent = 'Salvar Edição';
}

function excluirAluno(index) {
    if (confirm('Tem certeza que deseja excluir este aluno?')) {
        alunos.splice(index, 1);
        atualizarTabela();
    }
    alert('Aluno excluído com sucesso.');
}

/// Relatórios ///
document.getElementById('btnAprovados').addEventListener('click', () => {
    const aprovados = alunos.filter(aluno => aluno.isAprovado());
    alert(`Alunos aprovados: ${aprovados.length}\n${aprovados.map(a => a.nome).join(', ')}`);
});

document.getElementById('btnMediaNotas').addEventListener('click', () => {
    const media = alunos.reduce((acc, aluno) => acc + aluno.notaFinal, 0) / alunos.length;
    alert(`Média das notas: ${media.toFixed(2)}`);
});

document.getElementById('btnMediaIdades').addEventListener('click', () => {
    const media = alunos.reduce((acc, aluno) => acc + aluno.idade, 0) / alunos.length;
    alert(`Média das idades: ${media.toFixed(1)}`);
});

document.getElementById('btnOrdenarNomes').addEventListener('click', () => {
    alunos.sort((a, b) => a.nome.localeCompare(b.nome));
    atualizarTabela();
});

document.getElementById('btnOrdenarNotas').addEventListener('click', () => {
    alunos.sort((a, b) => b.notaFinal - a.notaFinal);
    atualizarTabela();
});

document.getElementById('btnAlunosPorCurso').addEventListener('click', () => {
    const porCurso = {};
    
    alunos.forEach(aluno => {
        if (!porCurso[aluno.curso]) {
            porCurso[aluno.curso] = { quantidade: 0, nomes: [] };
        }
        porCurso[aluno.curso].quantidade++;
        porCurso[aluno.curso].nomes.push(aluno.nome);
    });
    
    let mensagem = '';
    for (const curso in porCurso) {
        mensagem += `${curso}: ${porCurso[curso].quantidade}\n`;
        mensagem += `${porCurso[curso].nomes.join(', ')}\n`;
    }
    
    alert(mensagem);
});