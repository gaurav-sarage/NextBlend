import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
const ComponentPage = () => {
    return (
        <>
        <Navbar />
        <div>
            <p className="text-center">
                Hello from the Component page
            </p>
        </div>
        <Footer />
        </>
    )
};

export default ComponentPage;