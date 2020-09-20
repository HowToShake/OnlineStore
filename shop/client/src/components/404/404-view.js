import React from "react"
import { Link } from "react-router-dom"

class NotFoundPage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>404 - Page Not Found!</h1>
                <h2>
                    Don't worry come back to our <Link to="/">Homepage</Link>
                </h2>
            </>
        )
    }
}

export default NotFoundPage
