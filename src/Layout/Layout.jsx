import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header>
                <h1>Layout</h1>
                <nav>
                    <Link className="mr-[20px]" to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                </nav>
            </header>
            <Outlet/>
            <footer>
                <h1>Footer</h1>
            </footer>
        </div>
    )
}
export default Layout