import React from 'react';
import StoreMain from '../storeMain';
import PageLayout from '../../layout/PageLayout';

function Admin (props) {
    return (
        <section className="jumbotron">
            <div className="container">
                <StoreMain />
            </div>
        </section>
    );
}

export default PageLayout(Admin);