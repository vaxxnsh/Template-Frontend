

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Form, Card, Row, Col, InputGroup, Button, ButtonGroup } from "react-bootstrap";
// import { FaRegLightbulb, FaGlobe, FaCity, FaClock, FaIndustry, FaBalanceScale, FaExchangeAlt, FaTasks, FaExclamationTriangle, FaHandsHelping, FaInfoCircle } from "react-icons/fa";
// import { FaBullseye, FaDollarSign, FaFlagCheckered, FaHandshake, FaPeopleArrows, FaRoad, FaUserTie } from "react-icons/fa6";
// import { useContext } from 'react';
// import { useAuthContext } from '@/context/useAuthContext';
// import {ToastContainer , toast} from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css';
// const EntrepreneurForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     businessName: "",
//     businessLocationCountry: "",
//     businessLocationCity: "",
//     businessIdea: "",
//     businessStage: "",
//     industrySector: "",
//     businessDuration: "",
//     problemSolving: "",
//     traction: "",
//     investorType: "",
//     fundingAmount: "",
//     useOfFunds: "",
//     investmentType: "",
//     businessValuation: "",
//     equityInExchange: "",
//     exitPlans: "",
//     partnerType: "",
//     partnerSkills: "",
//     partnerInvolvement: "",
//     partnerEquityCompensation: "",
//     partnershipStructure: "",
//     businessChallenges: "",
//     keyPriorities: "",
//     supportNeeded: "",
//     businessPlanStatus: "",
//     milestones: "",
//     longTermGoals: "",
//     additionalInfo: "",
//   });

//   const [currentSection, setCurrentSection] = useState(0);


//   const sections = [
//     "Business Information",
//     "Investor Preferences",
//     "Business Partner Preferences",
//     "Business Needs & Goals",
//     "Additional Information",
//   ];

//   const handleInputChange = (name, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     toast.success("Form submitted successfully!");
//     try {
//       console.log(formData , user?.id);
  
//       const response = await fetch("http://3.101.12.130:5000/entrepreneur/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       console.log('--after request--',formData);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   const handleSkip = () => {
//     navigate("/");
//   };

//   const renderSection = () => {
//     switch (currentSection) {
//       case 0:
//         return (
//           <Card className="mb-4 shadow-sm">
//           <Card.Header style={{ backgroundColor: '', color: 'white' }}>
//   <h5 className="fs-4">
//     <FaRegLightbulb className="me-2 " />
//     Business Information
//   </h5>
// </Card.Header>

//             <Card.Body>
//               <ToastContainer></ToastContainer>
//               <Form>
//                 <Row className="mb-3">
//                   <Form.Group as={Col} controlId="businessName">
//                     <Form.Label className="fs-5"> {/* Increased font size */}
//                       What is the name of your business?
//                     </Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter your business name"
//                       value={formData.businessName}
//                       onChange={(e) => handleInputChange("businessName", e.target.value)}
//                       required
//                     />
//                   </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                   <Form.Group as={Col} controlId="businessLocationCountry">
//                     <Form.Label className="fs-5"> {/* Increased font size */}
//                       <FaGlobe className="me-2" />
//                       Where is your business located?
//                     </Form.Label>
//                     <Form.Select
//                       value={formData.businessLocationCountry}
//                       onChange={(e) => handleInputChange("businessLocationCountry", e.target.value)}
//                       required
//                     >
//                       <option value="">Select Country</option>
//                       <option value="USA">USA</option>
//                       <option value="Canada">Canada</option>
//                       <option value="UK">UK</option>
//                       <option value="India">India</option>
//                       <option value="Other">Other</option>
//                     </Form.Select>
//                   </Form.Group>
//                   <Form.Group as={Col} controlId="businessLocationCity">
//                     <Form.Label className="fs-5"> {/* Increased font size */}
//                       <FaCity className="me-2" />
//                       City
//                     </Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter city"
//                       value={formData.businessLocationCity}
//                       onChange={(e) => handleInputChange("businessLocationCity", e.target.value)}
//                     />
//                   </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                   <Form.Group controlId="businessIdea">
//                     <Form.Label className="fs-5"> {/* Increased font size */}
//                       <FaRegLightbulb className="me-2" />
//                       What is your business idea about?
//                     </Form.Label>
//                     <Form.Control
//                       as="textarea"
//                       rows={3}
//                       placeholder="Describe your business idea"
//                       value={formData.businessIdea}
//                       onChange={(e) => handleInputChange("businessIdea", e.target.value)}
//                       required
//                     />
//                   </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                   <Form.Group as={Col} controlId="businessStage">
//                     <Form.Label className="fs-5"> {/* Increased font size */}
//                       What stage is your business currently at?
//                     </Form.Label>
//                     <Form.Select
//                       value={formData.businessStage}
//                       onChange={(e) => handleInputChange("businessStage", e.target.value)}
//                       required
//                     >
//                       <option value="">Select</option>
//                       <option value="Idea/Concept">Idea/Concept</option>
//                       <option value="Prototype">Prototype</option>
//                       <option value="Pre-revenue">Pre-revenue</option>
//                       <option value="Revenue-generating">Revenue-generating</option>
//                       <option value="Growth">Growth</option>
//                       <option value="Scaling">Scaling</option>
//                     </Form.Select>
//                   </Form.Group>
//                   <Form.Group as={Col} controlId="industrySector">
//                     <Form.Label className="fs-5"> {/* Increased font size */}
//                       <FaIndustry className="me-2" />
//                       What is the industry/sector of your business?
//                     </Form.Label>
//                     <Form.Select
//                       value={formData.industrySector}
//                       onChange={(e) => handleInputChange("industrySector", e.target.value)}
//                       required
//                     >
//                       <option value="">Select</option>
//                       <option value="SaaS">SaaS</option>
//                       <option value="Content">Content</option>
//                       <option value="Marketplace">Marketplace</option>
//                       <option value="Agency">Agency</option>
//                       <option value="Mobile App">Mobile App</option>
//                       <option value="Shopify App">Shopify App</option>
//                       <option value="Main Street">Main Street</option>
//                       <option value="Ecommerce">Ecommerce</option>
//                       <option value="Other">Other</option>
//                     </Form.Select>
//                   </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                   <Form.Group as={Col} controlId="businessDuration">
//                     <Form.Label className="fs-5"> {/* Increased font size */}
//                       <FaClock className="me-2" />
//                       How long has your business been operating?
//                     </Form.Label>
//                     <Form.Select
//                       value={formData.businessDuration}
//                       onChange={(e) => handleInputChange("businessDuration", e.target.value)}
//                       required
//                     >
//                       <option value="">Select</option>
//                       <option value="Less than 6 months">Less than 6 months</option>
//                       <option value="6-12 months">6-12 months</option>
//                       <option value="1-2 years">1-2 years</option>
//                       <option value="2+ years">2+ years</option>
//                     </Form.Select>
//                   </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                   <Form.Group controlId="problemSolving">
//                     <Form.Label className="fs-5"> {/* Increased font size */}
//                       What problem does your business solve, and who is your target audience?
//                     </Form.Label>
//                     <Form.Control
//                       as="textarea"
//                       rows={3}
//                       placeholder="Describe the problem and target audience"
//                       value={formData.problemSolving}
//                       onChange={(e) => handleInputChange("problemSolving", e.target.value)}
//                       required
//                     />
//                   </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                   <Form.Group controlId="traction">
//                     <Form.Label className="fs-5"> {/* Increased font size */}
//                       Do you have any traction?
//                     </Form.Label>
//                     <Form.Select
//                       value={formData.traction}
//                       onChange={(e) => handleInputChange("traction", e.target.value)}
//                       required
//                     >
//                       <option value="">Select</option>
//                       <option value="Yes">Yes</option>
//                       <option value="No">No</option>
//                     </Form.Select>
//                   </Form.Group>
//                 </Row>
//               </Form>
//             </Card.Body>
//           </Card>
//         );
//       case 1:
//             return (
//       <Card className="mb-4 shadow-sm">
//            <Card.Header style={{ backgroundColor: '', color: 'white' }}>
//   <h5 className="fs-4">
//     <FaRegLightbulb className="me-2 " />
//     Investor Preferences
//   </h5>
// </Card.Header>
//         <Card.Body>
//           <Form>
//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="investorType">
//                 <Form.Label className="fs-5"> {/* Increased font size */}
//                   <FaRegLightbulb className="me-2" />
//                   What type of investor are you looking for?
//                 </Form.Label>
//                 <Form.Select
//                   value={formData.investorType}
//                   onChange={(e) => handleInputChange("investorType", e.target.value)}
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option value="Micro Investor">Micro Investor</option>
//                   <option value="Angel Investor">Angel Investor</option>
//                   <option value="Venture Capital">Venture Capital</option>
//                   <option value="Strategic Investor">Strategic Investor</option>
//                   <option value="Other">Other</option>
//                 </Form.Select>
//               </Form.Group>
//             </Row>
//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="fundingAmount">
//                 <Form.Label className="fs-5"> {/* Increased font size */}
//                   <FaGlobe className="me-2" />
//                   What is the amount of funding you are seeking?
//                 </Form.Label>
//                 <Form.Select
//                   value={formData.fundingAmount}
//                   onChange={(e) => handleInputChange("fundingAmount", e.target.value)}
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option value="Under $50k">Under $50k</option>
//                   <option value="$50k - $200k">$50k - $200k</option>
//                   <option value="$200k - $500k">$200k - $500k</option>
//                   <option value="$500k - $1M">$500k - $1M</option>
//                   <option value="Over $1M">Over $1M</option>
//                 </Form.Select>
//               </Form.Group>
//             </Row>
//             <Row className="mb-3">
//               <Form.Group controlId="useOfFunds">
//                 <Form.Label className="fs-5"> {/* Increased font size */}
//                   <FaCity className="me-2" />
//                   What is the intended use of the investment funds?
//                 </Form.Label>
//                 <Form.Select
//                   value={formData.useOfFunds}
//                   onChange={(e) => handleInputChange("useOfFunds", e.target.value)}
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option value="Product Development">Product Development</option>
//                   <option value="Marketing & Sales">Marketing & Sales</option>
//                   <option value="Hiring">Hiring</option>
//                   <option value="Scaling Operations">Scaling Operations</option>
//                   <option value="Technology Infrastructure">Technology Infrastructure</option>
//                   <option value="Other">Other</option>
//                 </Form.Select>
//               </Form.Group>
//             </Row>
//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="investmentType">
//                 <Form.Label className="fs-5"> {/* Increased font size */}
//                   <FaClock className="me-2" />
//                   What type of investment are you open to?
//                 </Form.Label>
//                 <Form.Select
//                   value={formData.investmentType}
//                   onChange={(e) => handleInputChange("investmentType", e.target.value)}
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option value="Equity">Equity</option>
//                   <option value="Convertible Notes">Convertible Notes</option>
//                   <option value="SAFE Notes">SAFE Notes</option>
//                   <option value="Debt">Debt</option>
//                   <option value="Other">Other</option>
//                 </Form.Select>
//               </Form.Group>
//             </Row>
//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="businessValuation">
//                 <Form.Label className="fs-5"> {/* Increased font size */}
//                   <FaIndustry className="me-2" />
//                   What is the current valuation of your business (if applicable)?
//                 </Form.Label>
//                 <InputGroup>
//                   <InputGroup.Text>$</InputGroup.Text>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter valuation"
//                     value={formData.businessValuation}
//                     onChange={(e) =>
//                       handleInputChange("businessValuation", e.target.value)
//                     }
//                   />
//                 </InputGroup>
//               </Form.Group>
//             </Row>
//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="equityInExchange">
//                 <Form.Label className="fs-5"> {/* Increased font size */}
//                   <FaRegLightbulb className="me-2" />
//                   Are you open to giving equity in exchange for investment?
//                 </Form.Label>
//                 <Form.Select
//                   value={formData.equityInExchange}
//                   onChange={(e) =>
//                     handleInputChange("equityInExchange", e.target.value)
//                   }
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option value="Yes">Yes</option>
//                   <option value="No">No</option>
//                   <option value="Negotiable">Negotiable</option>
//                 </Form.Select>
//               </Form.Group>
//             </Row>
//             <Row className="mb-3">
//               <Form.Group controlId="exitPlans">
//                 <Form.Label className="fs-5"> {/* Increased font size */}
//                   <FaClock className="me-2" />
//                   What are your exit plans or expected timeline for exit?
//                 </Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   placeholder="Describe your exit plans"
//                   value={formData.exitPlans}
//                   onChange={(e) =>
//                     handleInputChange("exitPlans", e.target.value)
//                   }
//                   required
//                 />
//               </Form.Group>
//             </Row>
//           </Form>
//         </Card.Body>
//       </Card>
//           );
//       case 2:
//     return (
//       <Card className="mb-4 shadow-sm">
//         <Card.Header style={{ backgroundColor: '', color: 'white' }}>
//   <h5 className="fs-4">
//     <FaRegLightbulb className="me-2 " />
//       Business Partner Preferences
//   </h5>
// </Card.Header>
          

//         <Card.Body>
//           <Form>
//             {/* Partner Type */}
//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="partnerType">
//                 <Form.Label className="fs-5"> {/* Consistent font size */}
//                   <FaUserTie className="me-2" />
//                   What type of business partners are you looking for?
//                 </Form.Label>
//                 <Form.Select
//                   value={formData.partnerType}
//                   onChange={(e) => handleInputChange("partnerType", e.target.value)}
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option value="Co-founder">Co-founder</option>
//                   <option value="Strategic Partner">Strategic Partner</option>
//                   <option value="Technical Co-founder">Technical Co-founder</option>
//                   <option value="Sales/Marketing Expert">Sales/Marketing Expert</option>
//                   <option value="Operations Expert">Operations Expert</option>
//                   <option value="Mentor">Mentor</option>
//                   <option value="Advisor">Advisor</option>
//                 </Form.Select>
//               </Form.Group>
//             </Row>

//             {/* Partner Skills */}
//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="partnerSkills">
//                 <Form.Label className="fs-5"> {/* Consistent font size */}
//                   <FaPeopleArrows className="me-2" />
//                   What specific expertise or skills are you seeking in a business partner?
//                 </Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   value={formData.partnerSkills}
//                   onChange={(e) => handleInputChange("partnerSkills", e.target.value)}
//                   rows={3}
//                   placeholder="Describe the skills or expertise needed"
//                   required
//                 />
//               </Form.Group>
//             </Row>

//             {/* Partner Involvement */}
//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="partnerInvolvement">
//                 <Form.Label className="fs-5"> {/* Consistent font size */}
//                   <FaBalanceScale className="me-2" />
//                   What is the desired level of involvement from a business partner?
//                 </Form.Label>
//                 <Form.Select
//                   value={formData.partnerInvolvement}
//                   onChange={(e) => handleInputChange("partnerInvolvement", e.target.value)}
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option value="Full-time">Full-time</option>
//                   <option value="Part-time">Part-time</option>
//                   <option value="Advisory">Advisory</option>
//                   <option value="Other">Other</option>
//                 </Form.Select>
//               </Form.Group>
//             </Row>

//             {/* Equity/Compensation */}
//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="partnerEquityCompensation">
//                 <Form.Label className="fs-5"> {/* Consistent font size */}
//                   <FaExchangeAlt className="me-2" />
//                   Are you open to partners who are willing to work in exchange for equity or other non-cash compensation?
//                 </Form.Label>
//                 <Form.Select
//                   value={formData.partnerEquityCompensation}
//                   onChange={(e) => handleInputChange("partnerEquityCompensation", e.target.value)}
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option value="Yes">Yes</option>
//                   <option value="No">No</option>
//                   <option value="Negotiable">Negotiable</option>
//                 </Form.Select>
//               </Form.Group>
//             </Row>

//             {/* Partnership Structure */}
//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="partnershipStructure">
//                 <Form.Label className="fs-5"> {/* Consistent font size */}
//                   <FaHandshake className="me-2" />
//                   What type of partnership structure are you looking for?
//                 </Form.Label>
//                 <Form.Select
//                   value={formData.partnershipStructure}
//                   onChange={(e) => handleInputChange("partnershipStructure", e.target.value)}
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option value="Co-founder">Co-founder</option>
//                   <option value="Equity-ed Partnership">Equity-based Partnership</option>
//                   <option value="Joint Venture">Joint Venture</option>
//                   <option value="Advisory Role">Advisory Role</option>
//                   <option value="Other">Other</option>
//                 </Form.Select>
//               </Form.Group>
//             </Row>
//           </Form>
//         </Card.Body>
//       </Card>
//     );
//       case 3:
//       return (
//         <Card className="mb-4 shadow-sm">
//          <Card.Header style={{ backgroundColor: '', color: 'white' }}>
//   <h5 className="fs-4">
//     <FaRegLightbulb className="me-2 " />
//     Business Needs & Goals
//   </h5>
// </Card.Header>

            
//           <Card.Body>
//             <Form>
//               {/* Business Challenges */}
//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="businessChallenges">
//                   <Form.Label className="fs-5">
//                     <FaExclamationTriangle className="me-2" style={{ color: "#757885" }} />
//                     What are the biggest challenges your business is currently facing?
//                   </Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     value={formData.businessChallenges}
//                     onChange={(e) => handleInputChange("businessChallenges", e.target.value)}
//                     rows={3}
//                     placeholder="Describe the key challenges"
//                     required
//                   />
//                 </Form.Group>
//               </Row>
  
//               {/* Key Priorities */}
//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="keyPriorities">
//                   <Form.Label className="fs-5">
//                     <FaTasks className="me-2" style={{ color: "#0398fc" }} />
//                     What are your key priorities over the next 6-12 months?
//                   </Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     value={formData.keyPriorities}
//                     onChange={(e) => handleInputChange("keyPriorities", e.target.value)}
//                     rows={3}
//                     placeholder="Outline your short-term priorities"
//                     required
//                   />
//                 </Form.Group>
//               </Row>
  
//               {/* Support Needed */}
//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="supportNeeded">
//                   <Form.Label className="fs-5">
//                     <FaHandsHelping className="me-2" style={{ color: "#0398fc" }} />
//                     What specific support are you looking for from an investor or business partner?
//                   </Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     value={formData.supportNeeded}
//                     onChange={(e) => handleInputChange("supportNeeded", e.target.value)}
//                     rows={3}
//                     placeholder="Specify the type of support needed"
//                     required
//                   />
//                 </Form.Group>
//               </Row>
  
//               {/* Business Plan */}
//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="businessPlanStatus">
//                   <Form.Label className="fs-5">
//                     <FaRoad className="me-2" style={{ color: "#0398fc" }} />
//                     Do you have a clear business plan or roadmap for growth?
//                   </Form.Label>
//                   <Form.Select
//                     value={formData.businessPlanStatus}
//                     onChange={(e) => handleInputChange("businessPlanStatus", e.target.value)}
//                     required
//                   >
//                     <option value="">Select</option>
//                     <option value="Yes">Yes</option>
//                     <option value="No">No</option>
//                     <option value="In progress">In progress</option>
//                   </Form.Select>
//                 </Form.Group>
//               </Row>
  
//               {/* Milestones */}
//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="milestones">
//                   <Form.Label className="fs-5">
//                     <FaFlagCheckered className="me-2" style={{ color: "#0398fc" }} />
//                     What milestones do you plan to achieve in the next 6 months?
//                   </Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     value={formData.milestones}
//                     onChange={(e) => handleInputChange("milestones", e.target.value)}
//                     rows={3}
//                     placeholder="List your planned milestones"
//                     required
//                   />
//                 </Form.Group>
//               </Row>
//             </Form>
//           </Card.Body>
//         </Card>
//       );
//       return (
//         <Card className="mb-4 shadow-sm">
//           <Card.Header className="bg-primary text-white">
//             <h5 className="fs-4">
//               <FaTasks className="me-2" />
//               Business Needs & Goals
//             </h5>
//           </Card.Header>
//           <Card.Body>
//             <Form>
//               {/* Business Challenges */}
//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="businessChallenges">
//                   <Form.Label className="fs-5">
//                     <FaExclamationTriangle className="me-2 text-danger" />
//                     What are the biggest challenges your business is currently facing?
//                   </Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     value={formData.businessChallenges}
//                     onChange={(e) => handleInputChange("businessChallenges", e.target.value)}
//                     rows={3}
//                     placeholder="Describe the key challenges"
//                     required
//                   />
//                 </Form.Group>
//               </Row>
  
//               {/* Key Priorities */}
//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="keyPriorities">
//                   <Form.Label className="fs-5">
//                     <FaTasks className="me-2 text-primary" />
//                     What are your key priorities over the next 6-12 months?
//                   </Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     value={formData.keyPriorities}
//                     onChange={(e) => handleInputChange("keyPriorities", e.target.value)}
//                     rows={3}
//                     placeholder="Outline your short-term priorities"
//                     required
//                   />
//                 </Form.Group>
//               </Row>
  
//               {/* Support Needed */}
//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="supportNeeded">
//                   <Form.Label className="fs-5">
//                     <FaHandsHelping className="me-2 text-success" />
//                     What specific support are you looking for from an investor or business partner?
//                   </Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     value={formData.supportNeeded}
//                     onChange={(e) => handleInputChange("supportNeeded", e.target.value)}
//                     rows={3}
//                     placeholder="Specify the type of support needed"
//                     required
//                   />
//                 </Form.Group>
//               </Row>
  
//               {/* Business Plan */}
//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="businessPlanStatus">
//                   <Form.Label className="fs-5">
//                     <FaRoad className="me-2 text-primary" />
//                     Do you have a clear business plan or roadmap for growth?
//                   </Form.Label>
//                   <Form.Select
//                     value={formData.businessPlanStatus}
//                     onChange={(e) => handleInputChange("businessPlanStatus", e.target.value)}
//                     required
//                   >
//                     <option value="">Select</option>
//                     <option value="Yes">Yes</option>
//                     <option value="No">No</option>
//                     <option value="In progress">In progress</option>
//                   </Form.Select>
//                 </Form.Group>
//               </Row>
  
//               {/* Milestones */}
//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="milestones">
//                   <Form.Label className="fs-5">
//                     <FaFlagCheckered className="me-2 text-warning" />
//                     What milestones do you plan to achieve in the next 6 months?
//                   </Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     value={formData.milestones}
//                     onChange={(e) => handleInputChange("milestones", e.target.value)}
//                     rows={3}
//                     placeholder="List your planned milestones"
//                     required
//                   />
//                 </Form.Group>
//               </Row>
//             </Form>
//           </Card.Body>
//         </Card>
//       );
//       case 4:
//     return (
//       <Card className="mb-4 shadow-sm">
//        <Card.Header style={{ backgroundColor: '', color: 'white' }}>
//   <h5 className="fs-4">
//     <FaRegLightbulb className="me-2 " />
//    Additional Information
//   </h5>
// </Card.Header>

//         <Card.Body>
//           <Form>
//             {/* Long-Term Goals */}
//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="longTermGoals">
//                 <Form.Label className="fs-5">
//                   <FaBullseye className="me-2" style={{ color: "" }} />
//                   What are your long-term goals for the business?
//                 </Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   value={formData.longTermGoals}
//                   onChange={(e) => handleInputChange("longTermGoals", e.target.value)}
//                   rows={4}
//                   placeholder="Describe your vision for the future"
//                   required
//                 />
//               </Form.Group>
//             </Row>

//             {/* Additional Information */}
//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="additionalInfo">
//                 <Form.Label className="fs-5">
//                   <FaInfoCircle className="me-2" style={{ color: "" }} />
//                   Is there anything else a potential investor or partner should know about you or your business?
//                 </Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   value={formData.additionalInfo}
//                   onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
//                   rows={4}
//                   placeholder="Provide any additional information"
//                   required
//                 />
//               </Form.Group>
//             </Row>
//           </Form>
//         </Card.Body>
//       </Card>
//     );
//         return (
//           <Card className="mb-4 shadow-sm">
//             <Card.Header className="bg-primary text-white">
//               <h5 className="fs-4">
//                 <FaInfoCircle className="me-2" />
//                 Additional Information
//               </h5>
//             </Card.Header>
//             <Card.Body>
//               <Form>
//                 {/* Long-Term Goals */}
//                 <Row className="mb-3">
//                   <Form.Group as={Col} controlId="longTermGoals">
//                     <Form.Label className="fs-5">
//                       <FaBullseye className="me-2 text-success" />
//                       What are your long-term goals for the business?
//                     </Form.Label>
//                     <Form.Control
//                       as="textarea"
//                       value={formData.longTermGoals}
//                       onChange={(e) => handleInputChange("longTermGoals", e.target.value)}
//                       rows={4}
//                       placeholder="Describe your vision for the future"
//                       required
//                     />
//                   </Form.Group>
//                 </Row>
    
//                 {/* Additional Information */}
//                 <Row className="mb-3">
//                   <Form.Group as={Col} controlId="additionalInfo">
//                     <Form.Label className="fs-5">
//                       <FaInfoCircle className="me-2 text-primary" />
//                       Is there anything else a potential investor or partner should know about you or your business?
//                     </Form.Label>
//                     <Form.Control
//                       as="textarea"
//                       value={formData.additionalInfo}
//                       onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
//                       rows={4}
//                       placeholder="Provide any additional information"
//                       required
//                     />
//                   </Form.Group>
//                 </Row>
//               </Form>
//             </Card.Body>
//           </Card>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       {/* Styled Tabs */}
//       <h2 className="text-start mb-4" style={{ marginRight: '20px' }}>Entrepreneur Form</h2>

//       <div className="d-flex justify-content-center mb-4">
//         {sections.map((title, index) => (
//           <button
//             key={index}
//             type="button"
//             style={{
//               backgroundColor: currentSection === index ? '#03c6fc' : 'transparent',
//               color: 'black',
//               borderColor: '#03c6fc',
//             }}
//             className={`btn mx-2 ${currentSection === index ? '' : 'btn-outline'}`}
//             onClick={() => setCurrentSection(index)}
//           >
//             {title}
//           </button>
//         ))}
//       </div>
  
//       <form onSubmit={handleSubmit}>
//         {renderSection()}
  
//         {/* Navigation Buttons */}
//         <div className="d-flex justify-content-between mt-4">
//           <div>
//             <Button
//               variant="btn btn-danger"
//               type="button"
//               onClick={handleSkip}
//             >
//               Skip
//             </Button>
//           </div>
          
//           <div>
//             <ButtonGroup>
//               <Button
//                 variant="secondary"
//                 type="button"
//                 disabled={currentSection === 0}
//                 onClick={() => setCurrentSection((prev) => prev - 1)}
//               >
//                 Previous
//               </Button>
//               {currentSection < sections.length - 1 && (
//                 <Button
//                   variant="primary"
//                   type="button"
//                   onClick={() => setCurrentSection((prev) => prev + 1)}
//                 >
//                   Next
//                 </Button>
//               )}
//               {currentSection === sections.length - 1 && (
//                 <Button variant="success" type="submit">
//                   Submit
//                 </Button>
//               )}
//             </ButtonGroup>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
    
// };

// export default EntrepreneurForm;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { 
//   FaUserAlt, 
//   FaArrowRight, 
//   FaChevronDown, 
//   FaTimes,
//   FaCheckCircle 
// } from 'react-icons/fa';

// const EntrepreneurForm = () => {
//   const navigate = useNavigate();

//   const handleSelection = (e) => {
//     const selectedValue = e.target.value;
//     if (selectedValue) {
//       navigate(`/${selectedValue}`);
//     }
//   };

//   const handleSkip = () => {
//     alert('Skipping the form');
//   };

//   return (
//     <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
//       <div className="card shadow-lg" style={{ maxWidth: '800px', width: '100%' }}>
//         <div className="card-header bg-white border-bottom-0 pt-4">
//           <div className="text-center">
//             <div className="display-6 mb-2">
//               <FaUserAlt className="text-primary mb-3" size={40} />
//             </div>
//             <h2 className="fw-bold mb-3">Entrepreneur Form</h2>
//           </div>
//         </div>
        
//         <div className="card-body p-4">
//           <div className="mb-4">
//             <div className="input-group input-group-lg">
//               <span className="input-group-text bg-white">
//                 <FaUserAlt className="text-primary" />
//               </span>
//               <textarea 
//                 className="form-control form-control-lg border-start-0" 
//                 placeholder="Tell me about yourself..."
//                 style={{ 
//                   fontSize: '1.25rem',
//                   minHeight: '150px',
//                   resize: 'none'
//                 }}
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="form-label text-muted small fw-bold">SELECT YOUR ROLE</label>
//             <div className="input-group">
//               <span className="input-group-text bg-white">
//                 <FaChevronDown className="text-primary" />
//               </span>
//               <select 
//                 className="form-select border-start-0" 
//                 onChange={handleSelection}
//               >
//                 <option value="">Select Role</option>
//                 <option value="founder">Founder</option>
//                 <option value="business-seller">Business Seller</option>
//                 <option value="business-acquirer">Business Acquirer</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         <div className="card-footer bg-white border-top-0 px-4 pb-4">
//           <div className="d-grid gap-3">
//             <button className="btn btn-primary btn-lg d-flex align-items-center justify-content-center gap-2">
//               <FaCheckCircle /> Submit <FaArrowRight />
//             </button>
//             <button 
//               className="btn btn-outline-secondary btn-lg d-flex align-items-center justify-content-center gap-2"
//               onClick={handleSkip}
//             >
//               <FaTimes /> Skip
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EntrepreneurForm;

/*
import PageMetaData from '@/components/PageMetaData'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Button, Card, CardBody, CardFooter, CardHeader, CardTitle } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const EntrepreneurForm = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedRole) {
      switch (selectedRole) {
        case 'business-seller':
          navigate('/business-seller');
          break;
        case 'business-acquirer':
          navigate('/business-acquirer');
          break;
        case 'founder':
          navigate('/founder');
          break;
        default:
          // Handle no selection
          break;
      }
    }
  };

  return (
    <>
      <PageMetaData title='Communications' />
      <Card>
        <CardHeader className="border-0 pb-0">
          <CardTitle>Entrepreneur Form</CardTitle>
          <p className="mb-0">
            Select any subsubrole for yourself and you will be redirected to the Forms according to your choice
          </p>
        </CardHeader>
        <CardBody>
          <Accordion defaultActiveKey="0" id="communications">
            <AccordionItem eventKey="0" className="bg-transparent">
              <AccordionHeader id="communicationOne">
                <div className="mb-0 h6">Select Your Role</div>
              </AccordionHeader>
              <AccordionBody>
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="ComRadio" 
                    id="ComRadio5"
                    value="business-seller"
                    onChange={handleRoleChange}
                    checked={selectedRole === 'business-seller'}
                  />
                  <label className="form-check-label" htmlFor="ComRadio5">
                  Founder (Willing to sell your startup) {/* this is business seller }
                  </label>
                </div>
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="ComRadio" 
                    id="ComRadio2"
                    value="business-acquirer"
                    onChange={handleRoleChange}
                    checked={selectedRole === 'business-acquirer'}
                  />
                  <label className="form-check-label" htmlFor="ComRadio2">
                  Founder (Willing to acquire a startup)
                  </label>
                </div>
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="ComRadio" 
                    id="ComRadio3"
                    value="founder"
                    onChange={handleRoleChange}
                    checked={selectedRole === 'founder'}
                  />
                  <label className="form-check-label" htmlFor="ComRadio3">
                  Founder (Exploring Business Ideas, Seeking Co-Founder or Investor)
                  </label>
                </div>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </CardBody>
        <CardFooter className="pt-0 text-end border-0">
          <Button 
            variant="primary" 
            size="sm" 
            onClick={handleSubmit}
            className="mb-0"
            disabled={!selectedRole}
          >
            Next
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default EntrepreneurForm

*/


import PageMetaData from '@/components/PageMetaData';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Button, Card, CardBody, CardFooter, CardHeader, CardTitle } from 'react-bootstrap';
import { useState } from 'react';
import BusinessSellerForm from '../BusinessSeller/BusinessSellerForm';
import BusinessBuyerForm from '../BusinessBuyer/BusinessBuyer';
import Founderforms from '../Founderform/Founderform';

const EntrepreneurForm = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedRole) {
      setFormSubmitted(true);
    }
  };

  const renderForm = () => {
    switch (selectedRole) {
      case 'business-seller':
        return <BusinessSellerForm></BusinessSellerForm>; // Replace with the actual form component
      case 'business-acquirer':
        return <BusinessBuyerForm></BusinessBuyerForm>; // Replace with the actual form component
      case 'founder':
        return <Founderforms></Founderforms>; // Replace with the actual form component
      default:
        return null;
    }
  };

  if (formSubmitted) {
    return (
      <>
        <PageMetaData title="Business Profile" />
        {renderForm()}
      </>
    );
  }

  return (
    <>
      <PageMetaData title="Business Profile" />
      <Card>
        <CardHeader className="border-0 pb-0">
          <CardTitle>Entrepreneur Form</CardTitle>
          <p className="mb-0">
            Select any sub-role for yourself and you will be redirected to the Forms according to your choice
          </p>
        </CardHeader>
        <CardBody>
          <Accordion defaultActiveKey="0" id="communications">
            <AccordionItem eventKey="0" className="bg-transparent">
              <AccordionHeader id="communicationOne">
                <div className="mb-0 h6">Select Your Role</div>
              </AccordionHeader>
              <AccordionBody>
              <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="ComRadio" 
                    id="ComRadio3"
                    value="founder"
                    onChange={handleRoleChange}
                    checked={selectedRole === 'founder'}
                  />
                   <label className="form-check-label" htmlFor="ComRadio3">
                    Entrepreneur (Exploring Business Ideas - Industry Connections)
                  </label>
                  
                </div>
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="ComRadio" 
                    id="ComRadio2"
                    value="business-acquirer"
                    onChange={handleRoleChange}
                    checked={selectedRole === 'business-acquirer'}
                  />
                  <label className="form-check-label" htmlFor="ComRadio2">
                  <label className="form-check-label" htmlFor="ComRadio3">
                    Entrepreneur (Seeking Industry Connections - Co-Founders & Investors. )
                  </label>
                  </label>
                </div>
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="ComRadio" 
                    id="ComRadio5"
                    value="business-seller"
                    onChange={handleRoleChange}
                    checked={selectedRole === 'business-seller'}
                  />
                  <label className="form-check-label" htmlFor="ComRadio5">
                    Entrepreneur (Intrested in Selling a Startup)
                  </label>
                </div>
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="ComRadio" 
                    id="ComRadio2"
                    value="business-acquirer"
                    onChange={handleRoleChange}
                    checked={selectedRole === 'business-acquirer'}
                  />
                  <label className="form-check-label" htmlFor="ComRadio2">
                  Entrepreneur (Interested in Acquiring a Startup.)
                  </label>
                </div>

               
               
               
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </CardBody>
        <CardFooter className="pt-0 text-end border-0">
          <Button 
            variant="primary" 
            size="sm" 
            onClick={handleSubmit}
            className="mb-0"
            disabled={!selectedRole}
          >
            Next
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default EntrepreneurForm;
