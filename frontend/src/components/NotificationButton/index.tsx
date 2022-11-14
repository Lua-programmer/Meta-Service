import icon from '../../assets/images/icon.png';

import './styles.css';

function NotificationButton(){
    return (

        <div className="ms-red-btn">
            <img src={icon} alt="Notificar funcionário" />
        </div>
    )
}

export default NotificationButton;