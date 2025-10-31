import { useState, createContext } from "react";

export const ViewDetailsContext = createContext();

export const ViewDetailsProvider = ({ children }) => {
  const [details, setDetails] = useState(false)
  const [id, setId] = useState(0)
  const [data, setData] = useState({
    img: "",
    title: "",
    size: 0,
    description: "",
  })
  
  return (
    <ViewDetailsContext.Provider value={{ details, setDetails, id, setId, data, setData }}>
      {children}
    </ViewDetailsContext.Provider>
  )
}