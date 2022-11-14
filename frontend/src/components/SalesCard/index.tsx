import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <div className="ms-card">
            <h2 className="ms-sales-title">Vendas</h2>
            <div>
                <div className="ms-form-control-container" >
                    <input className="ms-form-control" type="date" name="" id="" />
                </div>
                <div className="ms-form-control-container" >
                    <input className="ms-form-control" type="date" name="" id="" />
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
                        <tr>
                            <td className="show992">#333</td>
                            <td className="show576">08/08/2008</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="ms-red-btn-container">
                                    <div className="ms-red-btn">
                                        <NotificationButton />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#334</td>
                            <td className="show576">08/08/2008</td>
                            <td>Anakin</td>
                            <td className="show992">16</td>
                            <td className="show992">18</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="ms-red-btn-container">
                                    <div className="ms-red-btn">
                                        <NotificationButton />                                 
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#335</td>
                            <td className="show576">08/08/2008</td>
                            <td>Anakin</td>
                            <td className="show992">7</td>
                            <td className="show992">22</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="ms-red-btn-container">
                                    <div className="ms-red-btn">
                                        <NotificationButton />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard