import { Card, Badge } from 'react-bootstrap'

export default function Job({ job }) {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              { job.name }&nbsp;- <span className="text-muted fw-light">{ job.employer.name }</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              { new Date(job.created_at).toLocaleDateString() }
            </Card.Subtitle>
            <Badge className="me-2">{ job.schedule.name }</Badge>
            <Badge>{ job.area.name }</Badge>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}