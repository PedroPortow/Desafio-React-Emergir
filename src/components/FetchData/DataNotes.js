async function FetchDataNotes() {
    const cors = 'https://justcors.com/tl_56f5f74/'
    const token = '379238b5-705c-48bc-b8c9-27e26676b417'
    const data = await fetch(`${cors}https://farmbox.cc/api/public/technical_visit_report/notes.json?token=${token}`)

    return data.json()
}

export default FetchDataNotes