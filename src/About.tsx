import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { countState, userState } from "./Home.atom";

const About = () => {
    const count = useRecoilValue(countState);
    const user = useRecoilValue(userState);
    return (
        <>
            <h1>About</h1>
            <p>count:{count}</p>
            <p>user_name:{user.name}</p>
            <p>user_age:{user.age}</p>
            <br/>
            <Link to="/">Home</Link>
        </>
    )
}
export default About
