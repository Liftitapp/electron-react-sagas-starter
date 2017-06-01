import apisauce from 'apisauce'

const create = (baseURL = 'https://api.myjson.com') => {
  const api = apisauce.create({
    baseURL
  })
  const invoices = () =>
    api.get('/bins/17rjs9')
  return {
    invoices
  }
}
export default {
  create
}
