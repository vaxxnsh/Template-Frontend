import { messages } from '@/assets/data/other'
import { Spinner } from 'react-bootstrap'
import { useChatContext } from '@/context/useChatContext'
import type { ChatMessageType, UserType } from '@/types/data'
import { useAuthContext } from '@/context/useAuthContext'
import { addOrSubtractMinutesFromDate } from '@/utils/date'
import avatar from '@/assets/images/avatar/default avatar.png'
import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import io from 'socket.io-client'
import data from '@emoji-mart/data'
import EmojiPicker from '@emoji-mart/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsArchive, BsCameraVideoFill, BsCheckLg, BsMicMute, BsPersonCheck, BsTelephoneFill, BsThreeDotsVertical, BsTrash } from 'react-icons/bs'
import { FaCircle, FaPaperclip, FaPaperPlane } from 'react-icons/fa'
import * as yup from 'yup'

import avatar10 from '@/assets/images/avatar/10.jpg'
import TextFormInput from '@/components/form/TextFormInput'
import SimplebarReactClient from '@/components/wrappers/SimplebarReactClient'
import { FaCheck, FaCheckDouble, FaFaceSmile } from 'react-icons/fa6'
import { useLayoutContext } from '@/context/useLayoutContext'
import { set } from 'date-fns'
import makeApiRequest from '@/utils/apiServer'

const socket = io('http://your-backend-url')

const AlwaysScrollToBottom = () => {
  const elementRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (elementRef?.current?.scrollIntoView) elementRef.current.scrollIntoView({ behavior: 'smooth' })
  })
  return <div ref={elementRef} />
}

const UserMessage = ({ message, toUser }: { message: ChatMessageType; toUser: UserType }) => {
  const received = message.from.id === toUser.id
  return (
    <div className={clsx('d-flex mb-1', { 'justify-content-end text-end': received })}>
      <div className="flex-shrink-0 avatar avatar-xs me-2">
        {!received && <img className="avatar-img rounded-circle" src={message.from.avatar} alt="" />}
      </div>
      <div className="flex-grow-1">
        <div className="w-100">
          <div className={clsx('d-flex flex-column', received ? 'align-items-end' : 'align-items-start')}>
            {message.image ? (
              <div className="bg-light text-secondary p-2 px-3 rounded-2">
                <p className="small mb-0">{message.message}</p>
                <Card className="shadow-none p-2 border border-2 rounded mt-2">
                  <img width={87} height={91} src={message.image} alt="image" />
                </Card>
              </div>
            ) : (
              <div className={clsx('p-2 px-3 rounded-2', received ? 'bg-primary text-white' : 'bg-light text-secondary')}>{message.message}</div>
            )}
            {message.isRead ? (
              <div className="d-flex my-2">
                <div className="small text-secondary">
                  {message.sentOn.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                </div>
                <div className="small ms-2">
                  <FaCheckDouble className="text-info" />
                </div>
              </div>
            ) : message.isSend ? (
              <div className="d-flex my-2">
                <div className="small text-secondary">
                  {message.sentOn.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                </div>
                <div className="small ms-2">
                  <FaCheck />
                </div>
              </div>
            ) : (
              <div className="small my-2">{message.sentOn.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const ChatArea = () => {
  const { activeChat } = useChatContext()
  const { theme } = useLayoutContext()
  const [userMessages, setUserMessages] = useState<ChatMessageType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useAuthContext()

  const messageSchema = yup.object({
    newMessage: yup.string().required('Please enter message'),
  })

  const { reset, handleSubmit, control } = useForm({
    resolver: yupResolver(messageSchema),
  })

  const fetchMessages = useCallback(async () => {
    if (activeChat) {
      setIsLoading(true)
      try {
        const response = await makeApiRequest(`/chat/${activeChat.id}`)
        setUserMessages(response.data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
  }, [activeChat])

  useEffect(() => {
    if (activeChat) {
      fetchMessages()
    }
  }, [activeChat])

  useEffect(() => {
    if (activeChat) {
      socket.on('receiveMessage', (message: ChatMessageType) => {
        setUserMessages((prevMessages) => [...prevMessages, message])
      })
    }
  return () => {
    socket.off('receiveMessage')
  };
  },[activeChat,user])

  const sendChatMessage = async (values: { newMessage?: string }) => {
    if(activeChat){
      const newMessage: ChatMessageType = {
        id: (userMessages.length + 1).toString(),
        from: user,
        to: activeChat,
        message: values.newMessage ?? '',
        sentOn: addOrSubtractMinutesFromDate(-0.1),
        isSend: true,
        isRead: false,
      };
    
    try {
      await makeApiRequest({
        method: "POST",
        url: "/chat",
        data: newMessage
      })

      socket.emit('sendMessage', newMessage)
      setUserMessages((prevMessages) => [...prevMessages, newMessage])
      reset();
    } catch (error) {
      console.error(error)
    }
   }
  }



  const getMessagesForUser = useCallback(() => {
    if (activeChat) {
      setUserMessages(
        messages.filter((m) => (m.to.id === user.id && m.from.id === activeChat.id) || (user.id === m.from.id && m.to.id === activeChat.id)),
      )
    }
    setIsLoading(false) // Stop loading once data is fetched
  }, [activeChat, user])

  useEffect(() => {
    getMessagesForUser()
  }, [activeChat])


  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <Spinner animation="border" variant="primary" />
      </div>
    )
  }

  if (!activeChat) {
    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <h5 className="text-secondary">Tap on a name to start chatting</h5>
      </div>
    )
  }

  const { firstName, lastName } = activeChat.personalDetails
  const { profileImgUrl } = activeChat

  return (
    <Card className="card-chat rounded-start-lg-0 border-start-lg-0">
      <CardBody className="h-100">
        <div className="h-100">
          <div className="d-sm-flex justify-content-between align-items-center">
            <div className="d-flex mb-2 mb-sm-0">
              <div className="flex-shrink-0 avatar me-2">
                <img className="avatar-img rounded-circle" src={profileImgUrl || avatar} alt={firstName} />
              </div>
              <div className="d-block flex-grow-1">
                <h6 className="mb-0 mt-1">{`${firstName} ${lastName}`}</h6>
                <div className="small text-secondary">
                  <FaCircle className={`text-${activeChat.status === 'offline' ? 'danger' : 'success'} me-1`} />
                  {activeChat.status}
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <OverlayTrigger placement="top" overlay={<Tooltip>Audio call</Tooltip>}>
                <Button variant="primary-soft" className="icon-md rounded-circle me-2 px-2">
                  <BsTelephoneFill />
                </Button>
              </OverlayTrigger>
              <OverlayTrigger placement="top" overlay={<Tooltip>Video call</Tooltip>}>
                <Button variant="primary-soft" className="icon-md rounded-circle me-2 px-2">
                  <BsCameraVideoFill />
                </Button>
              </OverlayTrigger>
              <Dropdown>
                <DropdownToggle as="a" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2 content-none" role="button">
                  <BsThreeDotsVertical />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end" aria-labelledby="chatcoversationDropdown">
                  <li>
                    <DropdownItem>
                      <BsCheckLg className="me-2 fw-icon" />
                      Mark as read
                    </DropdownItem>
                  </li>
                  <li>
                    <DropdownItem>
                      <BsMicMute className="me-2 fw-icon" />
                      Mute conversation
                    </DropdownItem>
                  </li>
                  <li>
                    <DropdownItem>
                      <BsPersonCheck className="me-2 fw-icon" />
                      View profile
                    </DropdownItem>
                  </li>
                  <li>
                    <DropdownItem>
                      <BsTrash className="me-2 fw-icon" />
                      Delete chat
                    </DropdownItem>
                  </li>
                  <DropdownDivider />
                  <li>
                    <DropdownItem>
                      <BsArchive className="me-2 fw-icon" />
                      Archive chat
                    </DropdownItem>
                  </li>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>

          <hr />

          <SimplebarReactClient className="chat-conversation-content">
            <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>
            {userMessages.map((message) => (
              <UserMessage message={message} key={message.id} toUser={user} />
            ))}
            <AlwaysScrollToBottom />
          </SimplebarReactClient>
        </div>
      </CardBody>
      <CardFooter>
        <form onSubmit={handleSubmit(sendChatMessage)} className="d-sm-flex align-items-end">
          <TextFormInput
            className="mb-sm-0 mb-3"
            name="newMessage"
            control={control}
            placeholder="Type a message"
            noValidate
            containerClassName="w-100"
          />
          <Dropdown drop="up">
            <DropdownToggle type="button" className="btn h-100 btn-sm btn-danger-soft ms-2  border border-transparent  content-none">
              <FaFaceSmile className="fs-6" />
            </DropdownToggle>
            <DropdownMenu className="p-0 rounded-4">
              <EmojiPicker data={data} theme={theme} onEmojiSelect={(e: any) => console.info(e.native)} />
            </DropdownMenu>
          </Dropdown>
          <Button variant="secondary-soft" size="sm" className="ms-2">
            <FaPaperclip className="fs-6" />
          </Button>
          <Button variant="primary" type="submit" size="sm" className="ms-2">
            <FaPaperPlane className="fs-6" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
export default ChatArea
