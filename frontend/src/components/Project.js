import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom'

function Project({project}) {
  return (
    <Card className='card' style={{background:'rgba(211, 225, 229, 0.204)', border:'none'}}>
      <Card.Body>
        <Card.Text>
          <Link><strong>{project.name}</strong></Link>
        </Card.Text>
        <Row>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <strong>Scrum</strong>
            <span style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
              <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU" />
              <small>@{project.scrum}</small>
            </span>
          </div>
        </Row>
        <Badge badgeContent={4} color="primary">
          {/* <MailIcon color="action" /> */}
          <strong>4</strong>
        </Badge>
        
      </Card.Body>
    </Card>
  )
}

export default Project
