// import React from "react";  //can be ignored for now

// const Header = (props) => {
//     return (
//         <header>
//             <h1>Hello {props.title}!</h1>
//         </header>
//     )
// }

//passing obj instead of props
const Header = ({ title }) => {
    return (
        <header class='header'>
            <h1>{title}</h1>
            <button>Add</button>
        </header>
    )
}
// default props
Header.defaultProps = {
    title: "Task Tracker"
}

// Header.propTypes = {
//     title: propTypes.string.isRequired
// }

//css in js
// const headingStyle = {
//     color: "red",
//     backgroundColor: "black"
// }

export default Header