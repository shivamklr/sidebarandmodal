import React, { useState, useContext, createContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setisSidebarOpen] = useState(false);
    const [isModalOpen, setisModalOpen] = useState(false);
    const openSidebar = () => {
        setisSidebarOpen(true);
    };
    const closeSidebar = () => {
        setisSidebarOpen(false);
    };
    const openModal = () => {
        setisModalOpen(true);
    };
    const closeModal = () => {
        setisModalOpen(false);
    };
    return (
        <AppContext.Provider
            value={{
                isSidebarOpen,
                isModalOpen,
                openSidebar,
                closeSidebar,
                closeModal,
                openModal,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
export { AppContext, AppProvider };
