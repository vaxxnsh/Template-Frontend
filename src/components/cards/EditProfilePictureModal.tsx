import React, { useState } from "react";
import { Modal, Button, Container, Image, Form } from "react-bootstrap";
import { FaEdit, FaPlus, FaBorderStyle, FaTrash } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthContext } from "@/context/useAuthContext";
import { FileUpload, uploadDoc } from "@/utils/CustomS3ImageUpload";

const EditProfilePictureModal = ({ show, onHide, onPhotoUpdate,src = "" }) => {
    const [exp,setExp] = useState(1);
    const[zoom,setZoom] = useState(50);
    const [straighten, setStraighten] = useState(50);
    const [uploadedFile, setUploadedFile] = useState<FileUpload[]>([]);
    const {user} = useAuthContext();
    const [awsUrl,setAwsUrl] = useState<string>("");


      const handleUploadprofile = async () => {
        try {
          const response = await uploadDoc(uploadedFile, user?.id);
          console.log('---- response in the upload doc function ----', response);
          return response;
        } catch (err) {
          console.error('Error in the createpostcard:', err);
          return false;
        }
      };

    const handleDelete = () => {
    onPhotoUpdate(null); // Reset to default or remove profile picture
    onHide();
    };

    const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
        setUploadedFile(file);
        alert(`File uploaded: ${file.name}`);
        const url = await handleUploadprofile();
        setAwsUrl(url) // Example: display file name
        setExp(2);
    }
    };
    const handleClose = () => {
        console.log('clicking')
        setExp(0);
    }
    const handleZoomChange = (e) => setZoom(e.target.value);
    const handleStraightenChange = (e) => setStraighten(e.target.value);

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      backdrop="static"
      keyboard={false}
      dialogClassName="profile-modal"
    >
      {/* Header */}
      <Modal.Header
        className="border-0 bg-light justify-content-between align-items-center"
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          padding: "15px 20px",
        }}
      >
        <span>Profile Photo</span>
        <button
          type="button"
          onClick={() => exp === 0 ? onHide() : handleClose()}
          style={{
            border: "none",
            background: "transparent",
            fontSize: "1.5rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          &times;
        </button>
      </Modal.Header>

      <Modal.Body
        className="text-center"
        style={{
            padding: "30px",
            paddingBottom: "0", // Removed padding from the bottom
            minHeight: "400px", // Increased height
            minWidth: "350px", // Increased width
            backgroundColor: "#f8f9fa",
        }}
        >
  {(() => {
    switch (exp) {
      case 0:
        return (
          <>
            {/* Circular Profile Picture */}
            <div
              className="rounded-circle overflow-hidden mx-auto"
              style={{
                width: "180px", // Increased size
                height: "180px",
                border: "3px solid #ccc",
                marginBottom: "20px",
              }}
            >
              <img
                src={src} // Replace with dynamic photo
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Options Below Profile */}
            <div className="d-flex justify-content-around align-items-center mt-4">
              <div className="text-center">
                <FaEdit size={24} className="mb-2" />
                <p className="small mb-0">Edit</p>
              </div>
              <div className="text-center" onClick={()=> setExp(1)}>
                <FaPlus size={24} className="mb-2" />
                <p className="small mb-0">Add photo</p>
              </div>
              <div className="text-center">
                <FaBorderStyle size={24} className="mb-2" />
                <p className="small mb-0">Frames</p>
              </div>
              <div className="text-center">
                <FaTrash size={24} className="mb-2 text-danger" />
                <p
                  className="small text-danger mb-0"
                  onClick={handleDelete}
                  style={{ cursor: "pointer" }}
                >
                  Delete
                </p>
              </div>
            </div>
          </>
        );

        case 2 : 
            return (
                <Modal.Body>
                <Container className="text-center">
                  <div
                    style={{
                      width: "300px",
                      height: "300px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      margin: "0 auto",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={awsUrl || src} // Replace with your actual image source
                      alt="Profile"
                      style={{
                        width: "100%",
                        height: "100%",
                        transform: `scale(${zoom / 50}) rotate(${straighten - 50}deg)`,
                      }}
                    />
                  </div>
                  <div className="mt-4">
                    <h6>Crop</h6>
                    <Form.Label>Zoom</Form.Label>
                    <Form.Range value={zoom} onChange={handleZoomChange} />
                    <Form.Label>Straighten</Form.Label>
                    <Form.Range value={straighten} onChange={handleStraightenChange} />
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <Button variant="outline-secondary">Rotate Left</Button>
                    <Button variant="outline-secondary">Rotate Right</Button>
                  </div>
                </Container>
              </Modal.Body>
            )
        case 1 : return (
            <>
            <Modal.Body className="text-center">
            <h5>{user?.firstName}, help others recognize you!</h5>
            <Image
              src={src} // Replace with actual profile image URL
              roundedCircle
              alt="Profile"
              style={{ width: "100px", height: "100px", margin: "20px 0" }}
            />
            <p>
              On LinkedIn, we require members to use their real identities, so take
              or upload a photo of yourself. Then crop, filter, and adjust it to
              perfection.
            </p>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Form.Group>
              <Form.Label htmlFor="fileInput" className="btn btn-primary">
                Upload photo
              </Form.Label>
              <Form.Control
                type="file"
                id="fileInput"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </Form.Group>
          </Modal.Footer>
          </>
        )
      default:
        return <p>No content available for this case.</p>;
    }
  })()}
</Modal.Body>
    </Modal>
  );
};

export default EditProfilePictureModal;
