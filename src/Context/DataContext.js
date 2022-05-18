// import { createContext, useState } from "react";
// import { useFetch } from "../hooks/useFetch";


// const cors = 'https://justcors.com/tl_d625c00/'
// const token = '379238b5-705c-48bc-b8c9-27e26676b417'

// export const DataContext = createContext()

// export const DataContextProvider = ({children}) => {

//     const {data} = useFetch(`${cors}https://farmbox.cc/api/public/content_details.json?token=${token}`)
//     // console.log(data)

//     const {data: notesData} = useFetch(`${cors}https://farmbox.cc/api/public/technical_visit_report/notes.json?token=379238b5-705c-48bc-b8c9-27e26676b417`)
//     // console.log(notesData)

//     const {data: plantationData} = useFetch(`${cors}https://farmbox.cc/api/public/technical_visit_report/plantations.json?token=${token}`)
//     // console.log(plantationData)

//     const {data: rainData} = useFetch(`${cors}https://farmbox.cc/api/public/technical_visit_report/farm.json?token=${token}`)
//     // console.log(rainData)

//     return (
//         <DataContext.Provider value={{data, notesData, plantationData, rainData}}>{children}</DataContext.Provider>
//     )
// }