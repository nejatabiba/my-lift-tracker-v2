import './navigation.css';
import { NavLink } from "react-router-dom";

function Navigation(props) {
    return (
        <div className={"topNav"}>
            <NavLink to="/workouts" style={checkStyles}>MyWorkouts</NavLink>
            <NavLink to="/calendar" style={checkStyles}>MyCalendar</NavLink>
            <NavLink to="/progress" style={checkStyles}>MyProgress</NavLink>
        </div>
    )
}

function checkStyles({isActive}) {
    if(isActive) {
        return {background: 'white', color: 'forestgreen'}
    }
}

export default Navigation;