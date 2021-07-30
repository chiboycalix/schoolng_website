import React from 'react';
import Modal from '../components/Modal';
import './styles.scss';
import Ambassador from '../components/Ambassador';
import { AmbassadorsList } from '../ambassors';

const MeetAmbassadors = () => {
  const [visible, setVisible] = React.useState(false)
  const [record, setRecord] = React.useState({})
  const handleOpenModal = (record) => {
    setVisible(true)
    setRecord(record)
  }

  const handleClose = () => {
    setVisible(false)
  }

  return (
    <div className="ambassadorsWrapper">
      <div className="ambassadorsHeader">
        <h1>Meet The <span>Ambassadors</span> </h1>
      </div>

      <div className="ambassadors">
        {
          AmbassadorsList.map((ambassador) => {
            return (
              <React.Fragment
                key={ambassador.id}>
                <Ambassador onOpen={() => handleOpenModal(ambassador)} ambassador={ambassador} />
              </React.Fragment>
            )
          })
        }
      </div>
      {
        visible ?
          <Modal onCancel={handleClose}>
            <div className="modalImgSection">
              <div className="img">
                <img src={record?.photo} alt="Ambassador" />
              </div>
              <div className="userDetails">
                <p className="username">@{record?.username}</p>
                <p className="fullname">{record?.fullname}</p>
                <p className="department">{record?.department}, {record?.university}</p>
              </div>
            </div>
            <div className="modalAboutSection">
              <p className="title">
                About {record?.fullname}
              </p>
              <p className="bio">{record?.bio}</p>
            </div>
          </Modal>
          :
          null
      }

    </div>
  )
}

export default MeetAmbassadors