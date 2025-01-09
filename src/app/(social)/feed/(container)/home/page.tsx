import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap'
import Stories from './components/Stories'
import Feeds from './components/Feeds'
import Followers from './components/Followers'
import CreatePostCard from '@/components/cards/CreatePostCard'
import { Link, useNavigate } from 'react-router-dom'
import LoadContentButton from '@/components/LoadContentButton'
import { useState } from 'react'

const Home = () => {
  const [isCreated, setIsCreated] = useState(false)
  const navigate = useNavigate();
  return (
    <>
      <Col md={8} lg={6} className="vstack gap-4">
        <Stories />
        <div className="d-flex justify-content-between gap-3 px-3 py-2">
          <Button 
            variant="primary" 
            className="w-100"
            style={{ backgroundColor: 'red', borderColor: 'red', fontWeight : 'bold'}}
            onClick={() => {
              navigate('/live/')
            }}
          >
            Go Live
          </Button>
          <Button 
            variant="outline-primary" 
            className="w-100"
            style={{ borderColor: '#0f6fec',backgroundColor: '#0f6fec', color: 'white'}}
            // onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
            // onMouseLeave={(e) => (e.currentTarget.style.color = '#2D63ED')}
            onClick={() => {
              navigate('/join-live')
            }}
          >
            Join Businessroom Live
          </Button>
        </div>
        <CreatePostCard setIsCreated={setIsCreated} />
        <Feeds isCreated={isCreated} />
      </Col>

      <Col lg={3}>
        <Row className="g-4">
          <Col sm={6} lg={12}>
            <Followers />
          </Col>

          <Col sm={6} lg={12}>
            <Card>
              <CardHeader className="pb-0 border-0">
                <CardTitle className="mb-0">Businessroom News</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="mb-3">
                  <h6 className="mb-0">
                    <Link to="/blogs/details">Ten questions you should answer truthfully</Link>
                  </h6>
                  <small>2hr</small>
                </div>

                <div className="mb-3">
                  <h6 className="mb-0">
                    <Link to="/blogs/details">Five unbelievable facts about money</Link>
                  </h6>
                  <small>3hr</small>
                </div>

                <div className="mb-3">
                  <h6 className="mb-0">
                    <Link to="/blogs/details">Best Pinterest Boards for learning about business</Link>
                  </h6>
                  <small>4hr</small>
                </div>

                <div className="mb-3">
                  <h6 className="mb-0">
                    <Link to="/blogs/details">Skills that you can learn from business</Link>
                  </h6>
                  <small>6hr</small>
                </div>

                <LoadContentButton name="View all latest news" />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
    </>
  )
}

export default Home
