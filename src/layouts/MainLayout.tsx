import Nav from "../components/navigation/Nav";
import Footer from "../components/navigation/Footer";
import { JSX } from "solid-js";

const MainLayout  = (props: { children: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) => {
    return (
        <main>
            <Nav/>
            <div class="xl:min-h-screen">
                {props.children}
            </div>
            <Footer/>
        </main>
    )
}

export default MainLayout;