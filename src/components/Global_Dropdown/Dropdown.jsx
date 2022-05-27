import "./Dropdown.scss";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export default function Dropdown({ title, link, items }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="dropdown">
      <div className="nav_Link" onClick={()=>setOpen(!open)}>
        <NavLink className="nav_Item" to={link ? true : false}>
          {title}
        </NavLink>
      </div>

      {open ? (
        <div className="dropdownBox">
          <section className="section_Container" onClick={() => setOpen(!open)}>
            {items.map((item, index) => (
              <Link key={index} to={link}>
                <div
                  className="dropdown_Item"
                  onClick={() => setOpen(!open)}
                >
                  <Link to={link}>{item.title}</Link>
                </div>
              </Link>
            ))}
          </section>
        </div>
      ) : null}
    </div>
  );
}
