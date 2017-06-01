import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import PDF from 'react-pdf-js'

const printPdf = () => {
  window.print()
}
const pdf = 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf'
const PdfViewer = ({ state }) => (
  <div>
    <Link to="/invoices">
      <i className="fa fa-arrow-left fa-3x" />
      <a onClick={() => printPdf(pdf)}>print</a>
    </Link>
    <div>
      <PDF file= {pdf}/>
    </div>
  </div>
)

PdfViewer.propTypes = {
  url: PropTypes.string.required
}
PdfViewer.defaultProps = {
  url: ''
}

export default PdfViewer
