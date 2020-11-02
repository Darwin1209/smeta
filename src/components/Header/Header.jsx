import React from 'react'
import { NavLink } from 'react-router-dom'

import { Button } from '@material-ui/core'

import styles from './Header.module.css'
import { connect } from 'react-redux'

const Header = ({ auth = true }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <NavLink to="/work">
              <Button variant="contained" color="primary">
                Виды работ
              </Button>
            </NavLink>
          </li>
          <li className={styles.navListItem}>
            <NavLink to="/history">
              <Button variant="contained" color="primary">
                История
              </Button>
            </NavLink>
          </li>
          <li className={styles.navListItem}>
            <NavLink to="/estimate">
              <Button variant="contained" color="primary">
                Новый чек
              </Button>
            </NavLink>
          </li>
        </ul>
      </nav>

      {auth === 'anonim' ? (
        <div className={styles.wrapperLogin}>
          <NavLink to="/registry">
            <Button variant="contained" color="primary">
              Регистрация
            </Button>
          </NavLink>
          <NavLink to="/autorize">
            <Button variant="contained" color="primary">
              Авторизация
            </Button>
          </NavLink>
        </div>
      ) : (
        <div>Здравствуйте, {auth}</div>
      )}
    </header>
  )
}

const mapStateToProps = (store) => ({
  auth: store.user.name,
})

export default connect(mapStateToProps)(Header)
