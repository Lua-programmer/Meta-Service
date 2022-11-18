import axios from 'axios';
import icon from '../../assets/images/icon.png';
import { BASE_URL } from '../../utils/resquest';

import './styles.css';

type Props = {
    saleId: number;
}

function handleClick(id : number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(res => {
        console.log("SUCESSO");
    });
}

function NotificationButton({saleId} : Props){
    return (

        <div className="ms-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar funcionário" />
        </div>
    )
}

export default NotificationButton;