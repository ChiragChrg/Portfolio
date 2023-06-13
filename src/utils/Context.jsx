import { useState, createContext } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [selectedProject, setSelectedProject] = useState([])

    return (
        <Context.Provider value={{
            selectedProject,
            setSelectedProject,
        }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;