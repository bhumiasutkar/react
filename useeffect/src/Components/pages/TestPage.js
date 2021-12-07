import React from 'react';
import Counter from '../../hooks/test';
import ThemeButton from './../themes/ThemeButton';
import PageLayout from '../../layout/PageLayout';

function TestPage () {
    const changeHandler = (e) => {
        console.log(e.target.value);
    };
    return (
        <section className="jumbotron">
            <div className="container">
                <h1>Test Page</h1>
                <Counter />
                <ThemeButton />
                <div className="row">
                    <div className="col-sm-12">
                        <input type="text" name="fname" onChange={e => changeHandler(e)} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageLayout(TestPage);