import Seo from "../components/Seo";

export default function Home() {

    // const [counter, setCounter] = useState(0);

    return (
        <div>
            <Seo title="Home" />
            <h1>Welcome, NextJS!!</h1>
        </div>
        /*
        <div>
            <h1>Welcome, NextJS!!</h1>
            <p>Clicks : {counter}</p>
            <button onClick={() => { setCounter((prev) => prev + 1) }}>+</button>
        </div>
        */
    );
}