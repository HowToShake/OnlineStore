import React, { useEffect } from "react"

export const Admin = ({props, mapDispatchToProps}) => {


return<> {props.role !== 'admin' ? null :  <div>Admin</div>} </>
}
