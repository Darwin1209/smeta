import React from 'react'
import { connect } from 'react-redux'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'

import styles from './CreateCSV.module.css'

const CreateCSV = ({ estimate }) => {
  const { rooms, header, total, totalWorker } = estimate
  return (
    <div>
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="client"
        filename={`${header.client.name}--z`}
        sheet="tablexls"
        buttonText="Download as XLS"
      />
      <table id="client" className={styles.table}>
        {rooms.map((room) => (
          <React.Fragment>
            <tr>
              <th colSpan="6">{room.name}</th>
            </tr>
            <tr className={styles.title}>
              <td>&nbsp;</td>
              <td>Наименование</td>
              <td>Ед. изм.</td>
              <td>Цена</td>
              <td>К-во</td>
              <td>Cумма</td>
            </tr>
            {room.goods.map((good) => (
              <tr>
                <td className={styles.firstTd}>&nbsp;</td>
                <td>{good.name}</td>
                <td>{good.unit}</td>
                <td>{good.price}</td>
                <td>{good.count}</td>
                <td>{good.cost}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="6" className={styles.total}>
                <b>{room.total}</b>
              </td>
            </tr>
            <tr>
              <td colSpan="6">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan="6">&nbsp;</td>
            </tr>
          </React.Fragment>
        ))}
        <tr></tr>
        <tr></tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <b>{total}</b>
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
