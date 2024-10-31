import { useEffect, useState } from "react"
import AddMission from "./components/AddMission"
import MissionsList from "./components/MissionsList"
import Mission from "./models/missionModel"

export interface AddMissionProps {
    setMissions: (x: (missions: Mission[]) => Mission[]) => void
}

function App() {
  const [missions, setMissions] = useState<Mission[]>([])

  useEffect(() => {
    fetch('https://reactexambackend.onrender.com/missions/:9010134')
      .then((response) => response.json())
      .then((missions) => setMissions(missions))
  }, [])
  return (
    <>
      <div className="app">
        <h1>Military Missions</h1>
        <AddMission setMissions={setMissions} />
        {missions.length}
        <MissionsList missions={missions} setMissions={setMissions} />
      </div>
    </>
  )
}

export default App
