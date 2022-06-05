import React from 'react'
import { Route, Routes} from 'react-router-dom'
import LayoutAdmin from '../Layout/Layout'
import routes from "../../../routes"

function AdminRouter() {
 
  return (
    <LayoutAdmin>
         <Routes>
          {routes.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
    </LayoutAdmin>
  )
}

export default AdminRouter