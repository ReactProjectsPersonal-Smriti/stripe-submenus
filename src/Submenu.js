import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen, location, page: { page, links } } = useGlobalContext();
  const submenuContainer = useRef(null);
  const [column, setColumn] = useState('col-2');
  useEffect(() => {
    //returns aside component <aside></aside>
    setColumn('col-2');
    const submenu = submenuContainer.current;
    const { center, bottom } = location;
    //set left and top position for submenu container
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumn('col-3');
    }
    if (links.length > 3) {
      setColumn('col-4');
    }
  }, [location, links])
  return (
    <aside ref={submenuContainer} className={`submenu ${isSubmenuOpen && `show`}`}>
      <h4>{page}</h4>
      <div className={`submenu-center ${column}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return <a key={index} href={url}>{icon}{label}</a>
        })}
      </div>
    </aside>
  )
}

export default Submenu
