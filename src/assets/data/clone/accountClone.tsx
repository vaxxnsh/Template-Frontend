import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ConnectionRequest } from "@/layouts/ProfileLayout";
import MyConnections from "./MyConnections";
import ConnectionsStatus from "./ConnectionsStatus";
import SuggestedConnections from "./SuggestedConnections";
import { FaUserFriends, FaUserCheck, FaUserPlus, FaUsers } from 'react-icons/fa';

const BusinessSellerForm = () => {

  const [step, setStep] = useState(0);

  const sections = [
    { title: "My Connections", icon: <FaUserPlus style={{ marginRight: '8px' }} />, component: <MyConnections /> },
    { title: "Request Sent", icon: <FaUserCheck style={{ marginRight: '8px' }} />, component: <ConnectionsStatus /> },
    { title: "Request Received", icon: <FaUserFriends style={{ marginRight: '8px' }} />, component: <ConnectionRequest /> },
    { title: "Suggested Connections", icon: <FaUsers style={{ marginRight: '8px' }} />, component: <SuggestedConnections /> },
  ];

  const setCurrentSection = (index) => {
    setStep(index);
  };

  return (
    <div className="container mt-5">

      <div className="d-flex justify-content-center mb-4 flex-wrap"  style={{marginTop: '100px'}}>
        {sections.map((section, index) => (
          <button
            key={index}
            type="button"
            className="btn mx-2 mb-2 d-flex align-items-center"
            style={{
              backgroundColor: step === index ? '#1ea1f2' : 'transparent',
              borderColor: '#1ea1f2',
              color: step === index ? 'white' : '#1ea1f2'
            }}
            onClick={() => setCurrentSection(index)}
          >
            {section.icon} {section.title}
          </button>
        ))}
      </div>

      <div>
        {sections[step].component}
      </div>
    </div>
  );
};

export default BusinessSellerForm;
