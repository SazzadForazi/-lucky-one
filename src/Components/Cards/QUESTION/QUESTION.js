import React from 'react';

const QUESTION = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h4>How does React Work?</h4>
                    <p>React creates a VIRTUAL DOM in memory.Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</p>
                </div>
                <div class="col-md-6">
                    <h4>Difference between State and Props</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Props</h5>
                            <ul>
                                <li>Props are read-only.</li>
                                <li>Props are immutable.</li>
                                <li>Props allow you to pass data from one component to other components as an argument.</li>
                                <li>Props can be accessed by the child component.</li>
                                <li>Props are used to communicate between components.</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h5>State</h5>
                            <ul>
                                <li>State changes can be asynchronous.</li>
                                <li>State is mutable.</li>
                                <li>State holds information about the components.</li>
                                <li>State cannot be accessed by child components.</li>
                                <li>States can be used for rendering dynamic changes with the component.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default QUESTION;