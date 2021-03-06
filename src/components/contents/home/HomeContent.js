import React from 'react';

class HomeContent extends React.Component {

    render() {

        const parallazStyle = {
            backgroundImage: "url('/images/top-parallax.jpg')"
        }
        return (
            <div>
                <div className="uk-section uk-section-default uk-padding-remove-vertical">
                    <div className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top" style={parallazStyle}>
                        <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                            <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">Headline</h1>
                            <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="uk-section uk-section-default uk-section-large">
                    <div className="uk-container uk-container-default">
                        <div className="uk-grid-match uk-child-width-1-3@m" uk-grid="">
                            <div>
                                <div className="uk-card uk-card-default">
                                    <div className="uk-card-media-top">
                                        <img className="uk-height-medium uk-margin-auto" src="images/advertising.png" alt="" />
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">Media Top</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default">
                                    <div className="uk-card-media-top">
                                        <img src="images/business-plan.png" alt="" />
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">Media Top</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default">
                                    <div className="uk-card-media-top">
                                        <img src="images/project-management.png" alt="" />
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">Media Top</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default HomeContent;