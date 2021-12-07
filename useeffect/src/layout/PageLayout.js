import MainHeader from '../Components/MainHeader/MainHeader';
import Footer from './../Components/footer/Footer';

const PageLayout = (PageComponent) => {

    return function WithPage ({ ...props }) {
        return (
            <>
                <MainHeader />
                <PageComponent />
                <Footer />
            </>
        );
    };
};

export default PageLayout;