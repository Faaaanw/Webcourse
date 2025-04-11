import {Container,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const FooterComponent = () => {
  return (
    <div className='footer py-5'>
      <Container>
        <Row className='d-flex justify-content-between'>
          <Col lg="5"> 
            <h3 className='fw-bold'>Ngodink</h3>
            <p className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam assumenda sequi architecto laudantium ex earum expedita eius quo accusamus a vel ab dolorum ipsa corporis, impedit, eligendi vitae, eos esse.</p>
            <div className='no mb-1 mt-4'>
              <Link className='text-decoration-none'>
                <i className='fa-brands fa-whatsapp'></i>
                <p className='m-0'>+62 0896622790030</p>
              </Link>
            </div>
            <div className='mail'>
              <Link className='text-decoration-none'>
                <i className='fa-reguler fa-envelope'></i>
                <p className='m-0'>person@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className='d-flex flex-column col-lg-2 col mt-lg-0 mt-5'> 
            <h5 className='fw-bold'>Menu</h5>
            <Link to="/">home</Link>
            <Link to="kelas">kelas</Link>
            <Link to="testimonial">testimonial</Link>
            <Link to="faq">FAQ</Link>
            <Link to="syaratketen">syarat & ketentuan</Link>

          </Col>
          <Col lg="4" className='mt-lg-0 mt-5'> 
            <h5 className='fw-bold mb-3'>Subscribe untuk info menarik</h5>
            <div className='subscribes'>
              <input type="text" placeholder='subscribes...' />
              <button className='btn btn-danger rounded-end rounded-0'>Subscribe</button>

            </div>
            <div className='social mt-3'>
                <i className='fa-brands fa-facebook'></i>
                <i className='fa-brands fa-twitter'></i>
                <i className='fa-brands fa-linkedin'></i>
                <i className='fa-brands fa-youtube '></i>

            </div>
          </Col>  
        </Row>
        <Row>
          <Col>
            <p className='text-center px-md-0 px-3'>&copy; CopyRight {new Date().getFullYear()} by <span className=' fw-bold'>KING</span> mursidin rusdiono</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent
