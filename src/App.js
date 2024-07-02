import './App.css';
import Tasklist from './components/TaskList';

function tarefa() {
  const tasks = [
    'Tarefa1',
    'Tarefa2',
    'Tarefa3'
  ]

  return (
    <Tasklist tasks={tasks} />
  );
}

export default tarefa;

// import './App.css';
// import Task from './components/Task';

// function tarefa() {
//   let tarefa1 = "tarefa1";
//   let tarefa2 = "tarefa";
//   let tarefa3 = "tarefa1";

//   return (
//     <div className="Nome">
//       <Task
//         tarefa1={tarefa1}
//       />
//     </div>
//   );
// }

// export default tarefa;