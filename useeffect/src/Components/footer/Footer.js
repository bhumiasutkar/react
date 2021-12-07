import './footer.css';
import Navigation from '../MainHeader/Navigation';

function Footer () {
    console.log('footer renderd');
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        Copyright 2021
                    </div>
                    <div className="col-sm-6">
                        <Navigation />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;