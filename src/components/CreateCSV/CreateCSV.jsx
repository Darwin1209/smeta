import React from 'react'
import { connect } from 'react-redux'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'

import './CreateCSV.css'

const CreateCSV = ({ estimate }) => {
  const { rooms, header, total, totalWorker } = estimate
  console.log(estimate)

  return (
    <div>
      <h3>Смета для заказчика</h3>
      <ReactHTMLTableToExcel
        id="fwafwa"
        className={'button-download'}
        table="client"
        filename={`${header.name}--z`}
        sheet="tablexls"
        buttonText="Скачать"
      />
      <table id="client" className={'table'}>
        {rooms.map((room) => (
          <React.Fragment>
            <tr>
              <th colSpan="6">{room.name}</th>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td className="title">Наименование</td>
              <td className="title">Ед. изм.</td>
              <td className="title">Цена</td>
              <td className="title">К-во</td>
              <td className="title">Cумма</td>
            </tr>
            {room.goods.map((good, id) => (
              <tr>
                <td className={'title'}>{id + 1}</td>
                <td>{good.name}</td>
                <td>{good.unit}</td>
                <td>{good.price}</td>
                <td>{good.count}</td>
                <td>{good.cost}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="6" className={'total'}>
                <b>{room.total}</b>
              </td>
            </tr>
            <tr>
              <td colSpan="6">&nbsp;</td>
            </tr>
          </React.Fragment>
        ))}
        <tr>
          <td colSpan="6" className={'total'}>
            <b>{total}</b>
          </td>
        </tr>
      </table>

      <h3>Смета для заказчика</h3>
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className={'button-download'}
        table="worker"
        filename={`${header.name}--r`}
        sheet="tablexls"
        buttonText="Скачать"
      />
      <table id="worker" className={'table'}>
        {rooms.map((room) => (
          <React.Fragment>
            <tr>
              <th colSpan="6">{room.name}</th>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td className="title">Наименование</td>
              <td className="title">Ед. изм.</td>
              <td className="title">Цена</td>
              <td className="title">К-во</td>
              <td className="title">Cумма</td>
            </tr>
            {room.goods.map((good, id) => (
              <tr>
                <td className={'title'}>{id + 1}</td>
                <td>{good.name}</td>
                <td>{good.unit}</td>
                <td>{good.priceWorker}</td>
                <td>{good.count}</td>
                <td>{good.costWorker}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="6" className={'total'}>
                <b>{room.totalWorker}</b>
              </td>
            </tr>
            <tr>
              <td colSpan="6">&nbsp;</td>
            </tr>
          </React.Fragment>
        ))}
        <tr>
          <td colSpan="6" className={'total'}>
            <b>{totalWorker}</b>
          </td>
        </tr>
      </table>
    </div>
  )
}

const mapStateToProps = (store) => ({
  estimate: store.estimate,
})

export default connect(mapStateToProps)(CreateCSV)
