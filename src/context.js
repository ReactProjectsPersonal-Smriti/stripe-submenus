import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({ page: '', links: [] });

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((item) => item.page === text);
        setPage(page);
        //set the bottom and center property 
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    return (
        <AppContext.Provider value={{
            isSubmenuOpen,
            isSidebarOpen,
            openSidebar,
            openSubmenu,
            closeSidebar,
            closeSubmenu,
            location,
            page
        }}>
            {children}
        </AppContext.Provider>
    );
}

//custom hooks
export const useGlobalContext = () => {
    return useContext(AppContext);
}
