// import React,{useState,useEffect} from 'react'

// const useFetch = (url) => {
//     const [data, setData] = useState(null)
//     const [isPending, setIsPending] = useState(true);
//     const [error,setError] = useState(null)


//     useEffect(() => {
//         setTimeout(() => {
//             fetch(url)
//                 .then((res) => {
//                     console.log(res)
//                     // This block works when the request is reaching the server but server is sending an error back
//                     // maybe the end point which we are trying to reach doesnt exist
//                     // So if error response is sent by server will be thrown which will be catched by catch block and dispayed
//                     if (!res.ok) {
//                         throw Error("Could not fetch the data for that request")
//                     }
//                     return res.json()
//                 })
//                 .then((data) => {
//                     console.log(data)
//                     setData(data)
//                     setIsPending(false)
//                     setError(null)
//                 })
//                 // This block catches the connection error
//                 .catch((err) => {
//                     setIsPending(false)
//                     setError(err.message)

//                 })
//         }, 1000)

//     }, [url])
//     return (
//         { data,isPending,error }
//     )
// }

// export default useFetch
