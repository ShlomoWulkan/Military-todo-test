import Mission from "../models/missionModel";

interface Props{
    setMissions: (x: (missions: Mission[]) => Mission[]) => void
    mission: Mission
}

export default function MissionsItem({mission, setMissions}:Props) {

    function handleDelete() {
    fetch(`https://reactexambackend.onrender.com/missions/9010134/${mission._id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then(() => {
            setMissions(missions => {
                const newMissions = [...missions];
                newMissions.splice(missions.indexOf(mission), 1);
                return newMissions;
            });
        })
        .catch((error) => console.error(error));
}
    function handleProgress() {
        fetch(`https://reactexambackend.onrender.com/missions/9010134/progress/${mission._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then(() => {
                setMissions(missions => {
                    return missions;
                })
            })
            .then(() => {
                mission.status === 'Pending' ? mission.status = 'In Progress' : mission.status = 'Pending'
            })
            .catch((error) => console.error(error));
        }
  const getClassNameByStatus = () => {
    switch (mission.status) {
      case "Pending":
        return "pending";
      case "In Progress":
        return "in-progress";
      case "Completed":
        return "completed";
      default:
        return "";
    }
  };
  return (
    <div className={`missions-item ${getClassNameByStatus()}`}>
        <div className="mission-details">
            <p>Name: {mission.name}</p>
            <p>Status: {mission.status}</p>
            <p>Priority: {mission.priority}</p>
            <p>Description: {mission.description}</p>
        </div>
        <div className="mission-actions">
            <button onClick={() => handleDelete()}>Delete</button>
            <button onClick={() => handleProgress()}>Progres</button>
        </div>
    </div>
  )
}
