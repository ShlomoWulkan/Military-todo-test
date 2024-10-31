import { FormEvent, useState } from "react"
import Mission from "../models/missionModel"
import { AddMissionProps } from "../App"

export default function AddMission({setMissions}: AddMissionProps) {

    const [name, setName] = useState('')
    const [status, setStatus] = useState('')
    const [priority, setPriority] = useState('')
    const [description, setDescription] = useState('')

    function addMissionAndPost(name: string, status: string, priority: string, description: string): void {
      const newMission = new Mission(name, status, priority, description)

      fetch('https://reactexambackend.onrender.com/missions/:9010134', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMission),
      }).then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      setMissions((missions) => [...missions, newMission])
    }


    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
      event.preventDefault()
      addMissionAndPost(name, status, priority, description)
    }

  return (
    <div className="add-mission">
        <h1>Add Mission</h1>

        <form className="mission-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />

          <select onChange={(e) => setStatus(e.target.value)} value={status}>
            <option value="open" selected disabled >status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            </select>
          <select onChange={(e) => setPriority(e.target.value)} value={priority}>
            <option value="open" selected disabled >priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <textarea placeholder="Description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          <button type="submit">Add</button>
        </form>
      
    </div>
  )
}
