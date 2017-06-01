import apisauce from 'apisauce'

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
