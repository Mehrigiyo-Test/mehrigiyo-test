import "./Dropdown.scss";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionChangeRouter } from "../../../store/changeRouter/action";

export default function Dropdown({ title, link, items }) {
  const [open, setOpen] = useState(false);
  const [dd,setDd] = useState('')
  const dispatch = useDispatch()
  const changeUserRouter = (param) => {
    dispatch(actionChangeRouter('user'))
    setOpen(param)
  }

  return (
    <div className="dropdown">
      <div className="nav_Link" onMouseMove={()=>setOpen(true)}>
        <NavLink className="nav_Item"  to={link ? true : false} >
          {title}
        </NavLink>
      </div>

      {open ? (
        <div className="dropdownBox" onMouseMove={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)} >
          <section className="section_Container" onClick={() => changeUserRouter(!open)}>
            {items.map((item, index) => (
              <Link key={index} to={link}>
                <div
                  className="dropdown_Item"
                  onClick={() => changeUserRouter(!open)}
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
