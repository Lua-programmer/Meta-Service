import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/resquest";

import NotificationButton from '../NotificationButton';
import './styles.css';

function SalesCard() {
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales, setSales] = useState<Sale[]>([])

    useEffect(() => {
        axios.get(`${BASE_URL}/sales`)
            .then(res => {
                setSales(res.data.content)
            })
    }, []);

    return (
        <div className="ms-card">
            <h2 className="ms-sales-title">Vendas</h2>
            <div>
                <div className="ms-form-control-container" >
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="ms-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="ms-form-control-container" >
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="ms-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="ms-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sales.map(s => {
                                return (
                                    <tr key={s.id}>
                                        <td className="show992">{s.id}</td>
                                        <td className="show576">{new Date(s.date).toLocaleDateString()}</td>
                                        <td>{s.sellerName}</td>
                                        <td className="show992">{s.visited}</td>
                                        <td className="show992">{s.deals}</td>
                                        <td>R$ {s.amount.toFixed(2)}</td>
                                        <td>
                                            <div className="ms-red-btn-container">
                                                <div className="ms-red-btn">
                                                    <NotificationButton />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard;