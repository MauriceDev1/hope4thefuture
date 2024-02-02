import Nav from "../components/navigation/Nav";
import Footer from "../components/navigation/Footer";

const MainLayout  = (props: any) => {
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