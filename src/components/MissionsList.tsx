import Mission from "../models/missionModel";
import MissionsItem from "./MissionsItem";

interface Props{
    setMissions: (x: (missions: Mission[]) => Mission[]) => void
    missions: Mission[]
}

export default function MissionsList({missions, setMissions}:Props) {
  return (
    <div className="missions-list">
      <h1>Missions</h1>
      {missions.map((mission) => (
        <MissionsItem key={mission?._id} mission={mission} setMissions={setMissions} />
      ))}
    </div>
  )
}
