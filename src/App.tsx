import { useCallback, useEffect, useState } from 'react'

import './App.css'

interface InterfaceTarefa {
  name: string,
  id: number
}
function App() {
  const [tarefas, setTarefas] = useState<InterfaceTarefa[]>([])

  const [nomeTarefa, setNomeTarefa] = useState<string>('')

  const salvaTarefa = useCallback(() => {
    setTarefas(value => [...tarefas,
    {
      name: nomeTarefa,
      id: Math.random() * 100
    }
  ])

    console.log(tarefas)
  }, [nomeTarefa])

  const removeTarefa = useCallback((id:number) => {
    setTarefas(value => value.filter(v => v.id !==id))
  },[])

  useEffect(() => {
    console.log(tarefas)
  }, [tarefas])
  return (
    <>
      <div>
        <h2>Tarefas salvas</h2>
        <ul>

          {tarefas.map(tarefa => (
            <li onClick={() => {removeTarefa(tarefa.id)}} key={tarefa.id}>{tarefa.name}</li>
          ))}
        </ul>

        <input type="text" onChange={(e) => setNomeTarefa(e.target.value)} name="tarefa" placeholder='Insira a sua tarefa' />
        <button onClick={salvaTarefa}>
          Salvar Tarefa
        </button>
      </div>
    </>
  )
}

export default App
