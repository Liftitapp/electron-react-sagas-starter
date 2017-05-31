import apisauce from 'apisauce'
import { put } from 'redux-saga/effects'
import InvoicesActions from 'reducers/invoices_redux'

const create = (baseURL = 'https://api.myjson.com') => {
  const api = apisauce.create({
    baseURL
  })
  const invoices = () =>
    api.get('/bins/uw3dd')
  return {
    invoices
  }
}
export default {
  create
}
