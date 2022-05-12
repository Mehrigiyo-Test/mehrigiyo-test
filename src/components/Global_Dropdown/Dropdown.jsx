import "./Dropdown.scss";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export default function Dropdown({ title, link, items,setLink }) {
  console.log(link);
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="nav_Link" onClick={() => setOpen(!open)}>
        <NavLink to={link ? true : false}>{title}</NavLink>
      </div>

      {open ? (
        <div className="dropdownBox">
          <section className="section_Container" onClick={()=> setLink(false)}>
            {items.map((item, index) => (
              <div
                key={index}
                className="dropdown_Item"
                onClick={() => setOpen(!open)}
              >
                <Link to={link}>{item.title}</Link>
              </div>
            ))}
          </section>
        </div>
      ) : null}
    </div>
  );
}
