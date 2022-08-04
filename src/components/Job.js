import { useEffect, useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'

export default function Job({ job }) {
  const logo = job.employer.logo_urls?.[90] ?? 
  'https://imgholder.ru/50x50/adb9ca/374355&text=no%20logo&font=bebas'
  const description = job.snippet.responsibility ?? 'Описание отсутствует...'
  const [ open, setOpen ] = useState(false)
  const salaryFrom = job.salary?.from ? `от ${ job.salary.from }` : ''
  const salaryTo = job.salary?.to ? `до ${ job.salary.to }` : ''
  const isSalary = salaryFrom || salaryTo ? true : false

  return (
    <Card className="mb-3">
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
            <Badge className="me-2" bg="secondary">{ job.area.name }</Badge>

            { isSalary && <Badge bg="danger">{ `${ salaryFrom } ${ salaryTo } ${ job.salary.currency }` }</Badge> }
            
            <div className="pt-2">
              <Card.Link href={ job.alternate_url } target="_blank">{ job.alternate_url }</Card.Link>
            </div>
          </div>

          <img className="d-none d-md-block" height="40"
            src={ logo } alt={ job.employer.name } />
        </div>

        <Card.Text className="pt-3">
          <Button 
            onClick={ () => setOpen(prevOpen => !prevOpen)}
            variant="light">
              { open ? 'Скрыть описание' : 'Показать описание' }
          </Button>
        </Card.Text>

        <Collapse in={ open }>
          <div className="mt-2">
            { description }
          </div>
        </Collapse>
        
      </Card.Body>
    </Card>
  )
}