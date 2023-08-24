import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-container">
      <div className="notification-content">
        <div className="details">{children}</div>
        <GrFormClose className="close-icon" />
      </div>
    </div>
  )
}

export default Notification
