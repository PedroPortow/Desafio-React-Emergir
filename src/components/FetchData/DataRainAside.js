import { useQuery } from 'react-query'
import { useFetch } from '../../hooks/useFetch'

async function FetchRainAside() {
    const cors = 'https://justcors.com/tl_ab637e4/'
    const token = '379238b5-705c-48bc-b8c9-27e26676b417'
    const data = await fetch(`${cors}https://farmbox.cc/api/public/technical_visit_report/farm.json?token=${token}`)
    
    return data.json()
}

export default FetchRainAside