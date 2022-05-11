import Link from "next/link";
import { useRouter } from "next/router";
import { Image } from "next/image";
import styles from './NavBar.module.css';

export default function NavBar() {
    const router = useRouter();
    
    return (
        <nav>
            <img src="/vercel.svg" />
            <ul>
                <li>
                    <Link href="/">
                        <a className={`${styles.link} ${router.pathname === "/" ? "active" : ""}`}>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a className={[styles.link, router.pathname === "/about" ? "active" : "",].join(" ")}>About</a>
                    </Link>
                </li>
            </ul>
            <style>
            </style>
            <style jsx>{`
                a {
                    text-decoration: none;
                }
                nav {
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 10px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                }
                nav ul {
                    margin: 0;
                    padding: 0;
                    display: flex;
                    gap: 10px;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }
                nav ul li {
                    list-style-type: none;
                }
                img {
                    max-width: 100px;
                    margin-bottom: 5px;
                }
                nav a {
                    font-weight: 600;
                    font-size: 18px;
                }
                .active {
                    color: tomato;
                }
                nav div {
                    display: flex;
                    gap: 10px;
                }
            `}</style>
        </nav>
    );
}
