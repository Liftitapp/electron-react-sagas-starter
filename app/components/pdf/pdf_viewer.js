// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import PDF from 'react-pdf-js'

const printPdf = () => {
  window.print()
}

type Props = {
  location: {}
};

const PdfViewer = ({ location }: Props) => (
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

export default PdfViewer
