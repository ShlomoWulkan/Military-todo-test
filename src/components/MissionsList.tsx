import { AddMissionProps } from "../App";
import Mission from "../models/missionModel";

export default function MissionsList(missions: Mission[], {setMissions}: AddMissionProps) {
  return (
    <div className="missions-list">
      <h1>Missions</h1>
    </div>
  )
}
