/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
/* App imports */
import Header from './header'
import Footer from './footer'
import '../../style/global.less'
import style from './layout.module.less'
import { Link } from 'gatsby'

const Layout = ({ children, title }) => (
  <>
    <Header />
    <div className={style.container}>
      <Link to="https://dondakeshimo.com">
        <div className={style.messagebox}>
          <h1>移行しました</h1>
          <h2> <a className={style.underline}>dondakeshimo.com</a> をご参照ください</h2>
        </div>
      </Link>
    </div>
    <div className={style.container}>
      {title ? (
        <div className={style.title}>
          <h1>{title}</h1>
        </div>
      ) : null}
      {children}
    </div>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

Layout.defaultProps = {
  title: '',
}

export default Layout
