import './styles.scss';
import { useState } from 'react'
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';
import Loader from '../../components/Loader'

const GetInTouch = () => {
  const [senderName, setSenderName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loader, setLoader] = useState(false);
  const { addToast } = useToasts();


  const handleServerResponse = (status, msg) => {
    if (status === 200) {
      setSenderName("")
      setEmail("")
      setMessage("")
      addToast(msg, {
        appearance: 'success',
        autoDismiss: true,
      })
    } else {
      addToast(msg, {
        appearance: 'error',
        autoDismiss: true,
      })
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = {
      sender: senderName,
      email,
      message
    }

    if (senderName === '') {
      addToast(`Name is required`, {
        appearance: 'error',
        autoDismiss: true,
      })
    }
    else if (email === '') {
      addToast(`Email is required`, {
        appearance: 'error',
        autoDismiss: true,
      })
    } else if (message === '') {
      addToast(`Message is required`, {
        appearance: 'error',
        autoDismiss: true,
      })
    }
    else {
      setLoader(true)
      try {
        const res = await axios.post("https://formspree.io/f/xpzkzkkv", { data: data });
        handleServerResponse(res.status, "Message was successfully sent");
        setLoader(false)
      } catch (error) {
        handleServerResponse(400, "Unable To Send Message at this Time");
        setLoader(false)
      }
    }

  };

  const handleChange = (e) => {
    if (e.target.name === 'Name') {
      setSenderName(e.target.value)
    }
    else if (e.target.name === 'Email') {
      setEmail(e.target.value)
    } else {
      setMessage(e.target.value)
    }
  }

  return (
    <div className="getInTouchWrapper" id="contact">
      <div className="getInTouchHeader">
        <h1>Get in Touch</h1>
        <p>Have questions, complaints or rather suggestions, we’ll love to hear.</p>
      </div>

      <div className="getInTouchFormWrapper">
        <form>
          <div className="inputWrapper">
            <input type="text" placeholder="Name" value={senderName} onChange={handleChange} name="Name" />
            <input type="email" placeholder="Email" value={email} onChange={(e) => handleChange(e)} name="Email" />
          </div>
          <div className="textAreaWrapper">
            <input type="text" placeholder="Message" value={message} onChange={(e) => handleChange(e)} name="Message" />
          </div>
          <div className="submitBtnWrapper">
            <a href="/" onClick={handleOnSubmit}>{loader ? <Loader /> : "Send"}</a><span>or</span><a href="tel:08102548962">Call us</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default GetInTouch;