import Navigation from "../navigation/navigation";
function Layout (props) {
    return (
        <div>
            <Navigation />
            {props.children}
        </div>
    )
}

export default Layout;