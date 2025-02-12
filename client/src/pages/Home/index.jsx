import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import Edit_img from '../../assets/edit.svg';
import Remove_img from '../../assets/trash.svg';
import Icon from '../../assets/logo_carlos.svg';
import Warning_img from '../../assets/warning.svg';

function Home() {
  // Estado para armazenar a lista de alunos
  const [students, setStudents] = useState([]);

  // Estado para armazenar os valores dos campos do formulário
  const [formData, setFormData] = useState({
    name: '',
    nota1: '',
    nota2: '',
    nota3: '',
    nota4: '',
    nota5: '',
    frequencia: ''
  });

  // Função assíncrona para buscar os alunos da API
  async function getStudents() {
    try {
      const response = await axios.get('http://localhost:5000/student');
      setStudents(response.data); // Atualiza o estado com os alunos recebidos
    } catch (error) {
      console.error('Erro ao buscar os alunos:', error);
    }
  }

  // Função para atualizar os valores do formulário conforme o usuário digita
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  // Função para adicionar um novo aluno
  async function addStudent(event) {
    event.preventDefault();

    // Cria um objeto com os dados do aluno
    const student = {
      name: formData.name,
      nota1: parseInt(formData.nota1),
      nota2: parseInt(formData.nota2),
      nota3: parseInt(formData.nota3),
      nota4: parseInt(formData.nota4),
      nota5: parseInt(formData.nota5),
      frequencia: parseInt(formData.frequencia),
    };

    try {
      const response = await axios.post('http://localhost:5000/student', student);
      setStudents((prevStudents) => [...prevStudents, response.data]); // Adiciona o novo aluno na lista
      setFormData({
        name: '',
        nota1: '',
        nota2: '',
        nota3: '',
        nota4: '',
        nota5: '',
        frequencia: ''
      }); // Limpa os campos de entrada após o cadastro
      getStudents(); // Atualiza a lista de alunos
    } catch (error) {
      console.error('Erro ao cadastrar o aluno:', error);
    }
  }

  // Função para excluir um aluno
  async function deleteStudent(studentId) {
    try {
      await axios.delete(`http://localhost:5000/student/${studentId}`);
      setStudents(students.filter((student) => student.id !== studentId)); // Remove o aluno da lista
    } catch (error) {
      console.error('Erro ao excluir o aluno:', error);
    }
  }

  // Função para calcular a média geral da turma
  function calculateClassAverageTotal() {
    if (students.length === 0) return 0;

    const totalSum = students.reduce((sum, student) =>
      sum + student.nota1 + student.nota2 + student.nota3 + student.nota4 + student.nota5, 0
    );

    const totalNotas = students.length * 5; // Número total de notas (5 disciplinas por estudante)

    return totalSum / totalNotas;
  }

  // Função para calcular a média por disciplina da turma
  function calculateClassAverage() {
    
    // Inicializa os totais de cada disciplina
    const totalNotas = {
      nota1: 0,
      nota2: 0,
      nota3: 0,
      nota4: 0,
      nota5: 0
    };

    // Soma as notas de cada disciplina
    students.forEach((student) => {
      totalNotas.nota1 += student.nota1;
      totalNotas.nota2 += student.nota2;
      totalNotas.nota3 += student.nota3;
      totalNotas.nota4 += student.nota4;
      totalNotas.nota5 += student.nota5;
    });

    // Calcula a média de cada disciplina
    const mediaNotas = {
      nota1: totalNotas.nota1 / students.length,
      nota2: totalNotas.nota2 / students.length,
      nota3: totalNotas.nota3 / students.length,
      nota4: totalNotas.nota4 / students.length,
      nota5: totalNotas.nota5 / students.length
    };

    return mediaNotas;
  }

  // Chama a função ao montar o componente para buscar os alunos
  useEffect(() => {
    getStudents();
  }, []);

  return (
    <>
      <div className="container">
        {/* Formulário de cadastro de aluno */}
        <div className="form-container">
          <form>
            <img src={Icon} alt="Logo" />
            <div className="title">Cadastro de Alunos</div>
            {/* Campos do formulário para cadastro de aluno */}
            <input
              placeholder="Nome do aluno"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              placeholder="Nota na Disciplina 1"
              name="nota1"
              type="number"
              value={formData.nota1}
              onChange={handleInputChange}
            />
            <input
              placeholder="Nota na Disciplina 2"
              name="nota2"
              type="number"
              value={formData.nota2}
              onChange={handleInputChange}
            />
            <input
              placeholder="Nota na Disciplina 3"
              name="nota3"
              type="number"
              value={formData.nota3}
              onChange={handleInputChange}
            />
            <input
              placeholder="Nota na Disciplina 4"
              name="nota4"
              type="number"
              value={formData.nota4}
              onChange={handleInputChange}
            />
            <input
              placeholder="Nota na Disciplina 5"
              name="nota5"
              type="number"
              value={formData.nota5}
              onChange={handleInputChange}
            />
            <input
              placeholder="Frequência em %"
              name="frequencia"
              type="number"
              value={formData.frequencia}
              onChange={handleInputChange}
            />
            <button onClick={addStudent} type="button">Cadastrar</button>
          </form>
        </div>

        {/* Exibição dos alunos cadastrados */}
        <div>
          <h1>Alunos</h1>
          {students.map((student) => (
            <div key={student.id} className="card">
              <div>
                <p>Nome: <span>{student.name}</span></p>
                <p>Notas: <span>{student.nota1} {student.nota2} {student.nota3} {student.nota4} {student.nota5} </span> </p>
                <p>Média: <span>{((student.nota1 + student.nota2 + student.nota3 + student.nota4 + student.nota5) / 5)}</span></p>
                <p>Frequência: <span>{student.frequencia}%</span></p>
              </div>
              <div className="buttons">
                <button>
                  <img onClick={() => updateStudent(student.id)} src={Edit_img} alt="Editar" />
                </button>
                <button onClick={() => deleteStudent(student.id)}>
                  <img src={Remove_img} alt="Excluir" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Exibição da média da turma por disciplina */}
        <div className="content">
          <h1>Média da turma por disciplina</h1>
          <div className="card_media">
            {['nota1', 'nota2', 'nota3', 'nota4', 'nota5'].map((nota, index) => (
              <p key={index}>
                {`Disciplina ${index + 1} - `}
                <span>
                  {students.length > 0 ? `${calculateClassAverage()[nota].toFixed(2)}` : 'Nenhum aluno cadastrado'}
                </span>
              </p>
            ))}
          </div>
        </div>

        {/* Exibição dos alunos acima da média */}
        <div>
          <h1>Alunos acima da média</h1>
          {students.length > 0 && (
            <>
              <h2>Média da Turma: {calculateClassAverageTotal().toFixed(2)}</h2>
              {students
                .filter((student) =>
                  (student.nota1 + student.nota2 + student.nota3 + student.nota4 + student.nota5) / 5 >
                  calculateClassAverageTotal()
                )
                .map((student) => (
                  <div key={student.id} className="card">
                    <div>
                      <p>Nome: <span>{student.name}</span></p>
                      <p>Média: <span>{((student.nota1 + student.nota2 + student.nota3 + student.nota4 + student.nota5) / 5).toFixed(2)}</span></p>
                    </div>
                  </div>
                ))}
            </>
          )}
          {students.length === 0 && <p>Nenhum aluno cadastrado</p>}
        </div>

        {/* Exibição dos alunos com frequência abaixo de 75% */}
        <h1>Alunos com frequência abaixo de 75% <img src={Warning_img} alt="Alerta" /></h1>
        <div>
          {students.filter(student => student.frequencia < 75).length > 0 ? (
            students.filter(student => student.frequencia < 75).map((student) => (
              <div key={student.id} className="card">
                <div>
                  <p>Nome: <span>{student.name}</span></p>
                  <p>Frequência: <span>{student.frequencia}%</span></p>
                </div>
              </div>
            ))
          ) : (
            <p>Nenhum aluno com frequência abaixo de 75%.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
