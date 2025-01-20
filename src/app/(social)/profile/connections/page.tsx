import { getAllUserConnections } from '@/helpers/data'
import clsx from 'clsx'

import { Button, Card, CardBody, CardHeader, CardTitle } from 'react-bootstrap'
import LoadMoreButton from './components/LoadMoreButton'
import { Link, useParams } from 'react-router-dom'
import PageMetaData from '@/components/PageMetaData'
import { useFetchData } from '@/hooks/useFetchData'
import { toast, ToastContainer } from 'react-toastify'
import { useAuthContext } from '@/context/useAuthContext'
import { useEffect, useState } from 'react'
import Loading from '@/components/Loading'
import { FaTimes, FaUser, FaUserCheck, FaUserPlus, FaUserTimes } from 'react-icons/fa'

const Connections = () => {
  // const allConnections = useFetchData(getAllUserConnections)
  const { user } = useAuthContext();
  const [allConnections, setAllConnections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false)
  const [loadingStates, setLoadingStates] = useState<{ [key: string]: boolean }>({});
  const [sentStates, setSentStates] = useState<{ [key: string]: boolean }>({})

    const { id } = useParams();
  useEffect(() => {
    if (allConnections.length ) {
      return
    }
    fetchConnections()
  }, [allConnections])

  const fetchConnections = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://3.101.12.130:5000/api/v1/connection/get-connection-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user?.id,
          profileId:id
        }),
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch connection list.`);
      }

      const data = await res.json();
      setAllConnections(data.connections);
      // toast.info(`Connection list get successfully.`);
    } catch (error) {
      console.error(`Error while fetching connection list:`, error);
      // toast.error(`Failed to fetch connection list.`);
    } finally {
      setLoading(false);
    }
  };
  ;
  
  const UserRequest = async (profileId: string) => {
    // Set loading to true only for the specific profileId
    setLoadingStates((prev) => ({ ...prev, [profileId]: true }));
  
<<<<<<< HEAD
    const apiUrl = "http://3.101.12.130:5000/api/v1/connection/send-connection-request";
=======
    const apiUrl = " http://3.101.12.130:5000/api/v1/connection/send-connection-request";
>>>>>>> 7d9ec97401d26272f87bfe23684872e8d5978c8a
  
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requesterId: user?.id,
          receiverId: profileId,
        }),
      });
  
      if (!res.ok) {
        throw new Error(`Failed to send connection request.`);
      }
      setSentStates((prev) => ({ ...prev, [profileId]: true }));
      toast.success(`Connection request sent successfully.`);
    } catch (error) {
      console.error(`Error while sending connection request:`, error);
  
      setSentStates((prev) => ({ ...prev, [profileId]: true }));
      toast.info(`Already sent connection request.`);
    } finally {
      setLoadingStates((prev) => ({ ...prev, [profileId]: false }));
    }
  };

  const handleCancel = async () => {
    setLoading(true);
<<<<<<< HEAD
    const apiUrl = "http://3.101.12.130:5000/api/v1/connection/unsend-connection-request";
=======
    const apiUrl = " http://3.101.12.130:5000/api/v1/connection/unsend-connection-request";
>>>>>>> 7d9ec97401d26272f87bfe23684872e8d5978c8a
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requesterId: user?.id,
          receiverId: id,
        }),
      });

      if (!res.ok) {
        throw new Error(`Failed to unsend connection request.`);
      }     
      setSent(false)
      toast.info(`Connection request unsent successfully.`);
    } catch (error) {
      console.error(`Error while unsending connection request:`, error);
      toast.error(`Failed to unsend connection request.`);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (connectionId:string) =>{
<<<<<<< HEAD
    const apiUrl = "http://3.101.12.130:5000/api/v1/connection/remove-connection";
=======
    const apiUrl = " http://3.101.12.130:5000/api/v1/connection/remove-connection";
>>>>>>> 7d9ec97401d26272f87bfe23684872e8d5978c8a
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          connectionId : connectionId
        }),
      });
      fetchConnections()
      if (!res.ok) {
        throw new Error(`Failed to remove connection request.`);
      }
      setSent(false); 
      toast.info(`Connection request remove successfully.`);
    
    } catch (error) {
      console.error(`Error while remove connection request:`, error);
      toast.error(`Failed to remove connection request.`);
    } 
    finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageMetaData title='Connections' />
{/* <ToastContainer /> */}
      <Card>
        <CardHeader className="border-0 pb-0">
          <CardTitle> Connections</CardTitle>
        </CardHeader>
        <CardBody>
        {allConnections && allConnections.map((connection, idx) => (
            <div className="d-md-flex align-items-center mb-4" key={idx}>
              <div className="avatar me-3 mb-3 mb-md-0">
                {connection.profilePictureUrl ? (
                  <span role="button">
                    <img className="avatar-img rounded-circle" src={connection.profilePictureUrl} alt={`${connection.firstName} ${connection.lastName} picture`} />
                  </span>
                ) : (
                  <span
                    className="avatar-img rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                    style={{ width: '40px', height: '40px', fontSize: '20px' }}
                  >
                    {connection.firstName?.charAt(0).toUpperCase()}/{connection.lastName?.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
              <div className="w-100">
                <div className="d-sm-flex align-items-start">
                  <h6 className="mb-0">
                    <a href={`/profile/feed/${connection.userId}#${connection.userId}`}>{`${connection.firstName} ${connection.lastName}`}</a>
                  </h6>
                  <p className="small ms-sm-2 mb-0">{connection.userRole}</p>
                  {user?.id !== id && <p style={{fontSize:"10px"}} className="small text-info ms-sm-2  mb-0">{connection.mutual && "mutual connection"}</p>}
                </div>
                <ul className="avatar-group mt-1 list-unstyled align-items-sm-center">
                  {/* {connection?.sharedConnectionAvatars && (
                  <>
                    {connection.sharedConnectionAvatars.map((avatar, idx) => (
                      <li className="avatar avatar-xxs" key={idx}>
                        <img className="avatar-img rounded-circle" src={avatar} alt="avatar" />
                      </li>
                    ))}
                    <li className="avatar avatar-xxs">
                      <div className="avatar-img rounded-circle bg-primary">
                        <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
                          +{Math.floor(Math.random() * 10)}
                        </span>
                      </div>
                    </li>
                  </>
                )} */}
                  <li className={clsx('small', { 'ms-3': connection.sharedConnectionAvatars })}>{connection.meeted}</li>
                </ul>
              </div>
              {connection?.userId !== user?.id ? (<div className="ms-md-auto d-flex">
                {(user?.id===id || connection.mutual)?(
                  <> 
                { user?.id===id && <Button onClick={()=>handleRemove(connection.connectionId)} variant="danger-soft" size="sm" className="mb-0 me-2">
                    Remove
                  </Button>}
                    <Button variant="primary-soft" size="sm" className="mb-0">

                      Message
                    </Button>
                  </>):(
                    <>
                    {sent && (
                      <Button
                        variant="danger-soft"
                        className="me-2"
                        type="button"
                        onClick={handleCancel}
                        disabled={loading}
                      >
                        {loading ? (
                          <Loading size={15} loading={true} />
                        ) : (
                          <>
                            <FaUserTimes size={19} className="pe-1" /> 
                          </>
                        )}
                      </Button>
                    )}

                    {!sent && (
                     <Button
                     variant={sentStates[connection?.userId] ? "success-soft" : "primary-soft"}
                     className="me-2"
                     type="button"
                     onClick={() => UserRequest(connection?.userId)}
                     disabled={loadingStates[connection?.userId]}
                      >
                        {loadingStates[connection?.userId] ? (
                          <Loading size={15} loading={true} />
                        ) : sentStates[connection?.userId]  ? (
                          <>
                            <FaUserCheck size={19} className="pe-1" /> 
                          </>
                        ) : (
                          <>
                            <FaUserPlus size={19} className="pe-1" /> 
                          </>
                        )}
                      </Button>
                    )}
                  </>
                  )}
              </div>):(
                 <Link
                to={"/feed/home"}
                 className="mx-4 text-primary"
                 type="button"
               
               >
                 <FaUser size={19} className="pe-1" /> 
                 </Link>
              )}
            </div>
          ))}
          <div className="d-grid">
            {/* <LoadMoreButton /> */}
          </div>
        </CardBody>
      </Card>
    </>
  )
}
export default Connections
