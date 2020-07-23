import React,{useState} from 'react';
 import Button from 'react-bootstrap/Button';
 import Modal from 'react-bootstrap/Modal';



export default ({ name }) => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

return(
   <div className="card-body">

  <Button variant="outline-primary"  size="1g" onClick={handleShow}>
        Launch demo modal
      </Button>

 <Modal show={show}
              onHide={handleClose}
              size="lg"
              scrollable={"true"}
              backdrop="static"
              animation={"false"}
              aria-labelledby="title-terms" >
              <Modal.Header  closeButton>
                <Modal.Title className="h6">Terms of use</Modal.Title>
              </Modal.Header>
              <Modal.Body >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, dui in volutpat sollicitudin, erat lacus molestie libero, et scelerisque erat tellus eget risus. Mauris fringilla, eros vel tincidunt accumsan, massa enim rhoncus massa, sit amet sagittis dolor purus id lorem. Praesent sed mattis neque, luctus viverra nibh. Morbi dui urna, facilisis mattis leo vitae, sollicitudin ornare elit. Sed magna augue, ornare a facilisis id, dapibus a nulla. Fusce dapibus, elit nec accumsan imperdiet, ipsum libero consectetur libero, sodales tempus risus sapien vitae purus. Maecenas vulputate nisl nulla, posuere rutrum enim porttitor eget. Morbi accumsan commodo commodo. Integer scelerisque eu massa at volutpat. Ut quis orci purus. Vestibulum imperdiet rhoncus odio, vitae posuere tortor venenatis vel. In hac habitasse platea dictumst. Cras nisi purus, dignissim ac pellentesque bibendum, maximus in justo. Cras sit amet tortor ac enim venenatis imperdiet. Duis sapien arcu, cursus ut condimentum sed, porta et metus. Nulla facilisi.</p>


              
              </Modal.Body>
              <Modal.Footer>

                <Button variant="success" type="submit" onClick={handleClose}>
                  Ok
          </Button>
              </Modal.Footer>
            </Modal>
     
               
   </div>
)

}



