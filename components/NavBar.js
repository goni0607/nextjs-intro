import Link from "next/link";
import { useRouter } from "next/router";
import styles from './NavBar.module.css';

export default function NavBar() {
    const router = useRouter();
    
    return (
        <nav>
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
            <style jsx>{`
                nav {
                    background-color: tomato;
                }
                a {
                    text-decoration: none;
                }
                .active {
                    color: yellow;
                }
            `}</style>
        </nav>
    );
}
