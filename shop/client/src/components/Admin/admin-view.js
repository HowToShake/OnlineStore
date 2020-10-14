import React from "react"
import NotFoundPage from '../404/404-view'

export const Admin = ({props, mapDispatchToProps}) => {

return<> {props.role !== 'admin' ? <NotFoundPage /> :  <div>Admin</div>} </>
}
