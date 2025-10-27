import Card  from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/Button';
export default function CustomCard({ title ,id}) {

  return (
    <Card className="shadow-sm border-0 rounded-3 mb-3">
      <div className="card-body d-flex justify-content-between align-items-center" style={{ border: '1px solid white', borderRadius: '8px', padding: '16px' }}>
          <h5 className="card-title fw-semibold mb-1">{title}</h5>
      </div>
    </Card>
  );
}
