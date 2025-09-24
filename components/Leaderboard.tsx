import { FaCrown } from "react-icons/fa";

interface User {
  id: string | number;
  name: string;
  xp: number;
}

interface LeaderboardProps {
  users: User[];
}

export default function Leaderboard({ users }: LeaderboardProps) {
  return (
    <div className="glass rounded-2xl p-6 shadow-gold">
      <h2 className="text-gold font-luxury text-2xl mb-4">Leaderboard</h2>
      <ul>
        {users.map((user, i) => (
          <li key={user.id} className="flex items-center mb-2">
            {i === 0 && <FaCrown className="text-amber mr-2" />}
            <span className={`font-bold ${i < 3 ? 'text-gold' : 'text-champagne'}`}>{user.name}</span>
            <span className="ml-auto text-bronze">{user.xp} XP</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
