import React, { Component } from 'react'
import * as ReactBootStrp from "react-bootstrap";


export default class Work extends Component {
    render() {
        return (
            <div className="work">
                <div className="w-container-1">
                <h1 className="work-title">Work</h1>
                <img className="flag" src="./flag.png" alt="flag" />
                <img className="flag2" src="/flag2.png" alt="flag" />
                </div>

                <div className="w-container-2">
                <img className="pencil" src="./pencil.png" alt="pencil" />
                <h2 className="w-header">What I've been up to.</h2>
                <p className="w-workToShow">
                    Here's a selection of some recent work.
                </p>
            </div>


                {/* favorite toys */}

                <div className="w-container-3-fav-toy">
                    <img
                        className="w-project-fav-toy"
                        src="./favorite-toys-project.png"
                        alt="project-one"
                    />
                    <h1 className="wc3-h1-fav-toy"> Favorite Toys</h1>
                    <p className="wc3-p1-fav-toy">
                        Html/Css/JavaScript/Node.js/
                        Handlebars/Express/Mongoose/Git</p>
                    <p className="wcp-discription-fav-toy">
                        Using a range of technologies to
                        create a CRUD application. Where you are able to create,Read, Update and Delet.
                        
                    </p>
                    <div className="pw-button-fav-toy">
                        <a href="https://fast-dusk-82368.herokuapp.com/">
                            <ReactBootStrp.Button
                                className="btn-wp2-fav-toy"
                                variant="primary"
                                size="lg"
                                active
                            >
                                APP
                            </ReactBootStrp.Button>{" "}
                        </a>
                        <a href="https://github.com/abdulai1sow/dice-roll">
                            <ReactBootStrp.Button
                                className="btn-wp3-fav-toy"
                                variant="primary"
                                size="lg"
                                active
                            >
                                CODE
                        </ReactBootStrp.Button>{" "}
                        </a>
                    </div>
                </div>
                

            {/* pig game ***********************/}

                <div className="w-container-3-pig-game">
                    <img
                        className="w-project-pig-game"
                        src="./pig-game.png"
                        alt="project-one"
                    />
                    <h1 className="wc3-h1-pig-game"> Dice Roll</h1>
                    <p className="wc3-p1-pig-game">Html/Css/JavaScript</p>
                    <p className="wcp-discription-pig-game">
                        Made this game for my nepfews, to take their mind off not being able to go outside and play.
                </p>
                    <div className="pw-button-pig-game">
                        <a href="https://tender-snyder-f8dd11.netlify.app/">
                            <ReactBootStrp.Button
                                className="btn-wp2-pig-game"
                                variant="primary"
                                size="lg"
                                active
                            >
                                APP
                    </ReactBootStrp.Button>{" "}
                        </a>
                        <a href="https://github.com/abdulai1sow/dice-roll">
                            <ReactBootStrp.Button
                                className="btn-wp3-pig-game"
                                variant="primary"
                                size="lg"
                                active
                            >
                                CODE
                    </ReactBootStrp.Button>{" "}
                        </a>
                    </div>
                </div>

            {/*   connect four game *****/}
            <div className="w-container-3">
                <img
                className="w-project"
                src="./project1-pic.png"
                alt="project-one"
                />
                <h1 className="wc3-h1">Connect Four</h1>
                <p className="wc3-p1">Html/Css/JavaScript</p>
                <p className="wcp-discription">
                This is one of my favorite game to play, and as school project i{" "}
                choose to make Connect four. If you enjoy playing
                it here it is. Enjoy playing.
                </p>
                <div className="pw-button">
                <a href="https://clever-poincare-1908e8.netlify.com/">
                    <ReactBootStrp.Button
                    className="btn-wp2"
                    variant="primary"
                    size="lg"
                    active
                    >
                    APP
                    </ReactBootStrp.Button>{" "}
                </a>
                <a className="btn-red" href="https://git.generalassemb.ly/sowabdulai/Project_One">
                    <ReactBootStrp.Button
                    className="btn-wp3"
                    variant="primary"
                    size="lg"
                    active
                    >
                    CODE
                    </ReactBootStrp.Button>{" "}
                </a>
                </div>
            </div>
            </div>
        );
    }
}
