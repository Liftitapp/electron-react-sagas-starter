import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import PDF from 'react-pdf-js'

const printPdf = () => {
  window.print()
}

const PdfViewer = ({ location }) => (
  <div>
    <Link to='/invoices'>
      <i className='fa fa-arrow-left fa-3x' />
      <button onClick={() => printPdf()}>print</button>
    </Link>
    <div>
      <PDF file={location.query.url} />
    </div>
  </div>
)

PdfViewer.propTypes = {
  location: PropTypes.object.required
}
PdfViewer.defaultProps = {
  location: {}
}

export default PdfViewer
