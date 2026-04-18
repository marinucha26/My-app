import { statsList } from "./model";

function Stats() {
    return (
        <div className="stats" style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
            {statsList.map((stat) => (
                 <div key={stat.title} style={{ 
                    background: stat.color, 
                    padding: '15px', 
                    borderRadius: '12px',
                    textAlign: 'center',
                    flex: 1
                    }}>
                    <span style={{ fontSize: '32px', fontWeight: 'bold' }}>{stat.value}</span>
                    <span style={{ fontSize: '14px', color: '#666' }}>{stat.title}</span>
                </div>   
            ))}
        </div>
    );
}

export default Stats;

