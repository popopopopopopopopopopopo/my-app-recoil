import {Link} from "react-router-dom";
import { useRecoilState } from "recoil";
import { countState, userState } from "./Home.atom";

const Home = () => {
    const [count, setCount] = useRecoilState(countState);
    const [user, setUser] = useRecoilState(userState);

    const incrementCount = (c:any) => {
        return c + 1;
    }

    const updateUser = (u:any) => {
        const updatedUser = {...u, ...{ age:u.age + 1 }}
        return updatedUser;
    }

    return (
        <>
            <h1>Home</h1>
            <p>count:{count}</p>
            <button onClick={() => setCount(incrementCount)}>increment</button>
            <hr />
            <p>user.name:{user.name}, user.age:{user.age}</p>
            <button onClick={() => setUser(updateUser)}>user age increment</button><br/><br/>
            <Link to="/about">About</Link>
        </>
    )
}
export default Home
