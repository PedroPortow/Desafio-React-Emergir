import { useQuery } from 'react-query'
import { useFetch } from '../../hooks/useFetch'

async function FetchFarmAside() {
    const cors = 'https://justcors.com/tl_d625c00/'
    const token = '379238b5-705c-48bc-b8c9-27e26676b417'
    const data = await fetch(`${cors}https://farmbox.cc/api/public/content_details.json?token=${token}`)
    
    return data.json()
}

export default FetchFarmAside