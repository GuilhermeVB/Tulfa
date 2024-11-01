import { useEffect, useState } from "react";

import Button from "../button/Button";
import Frame from "../frame/Frame";

function Menu({ menuClick }) {
    const [leftMenuActived, setleftMenuActived] = useState(false)
    const [elementSelected, setElementSelected] = useState([])

    useEffect(() => {
        linkSwitchs()
    }, [leftMenuActived, menuClick])

    function linkSwitchs() {
        setElementSelected([false, false, false, false, false])
    }

    function turnOffLeftMenu() {
        setleftMenuActived(false)
    }

    function switchLeftMenu() {
        setleftMenuActived(!leftMenuActived)
    }

    function closeMenu() {
        menuClick()

        setTimeout(() => {
            setleftMenuActived(false)
        }, 500)
    }

    async function turnOnSwitch(index) {
        if (leftMenuActived === false) {
            await switchLeftMenu()
        }

        setElementSelected(prevState =>
            prevState.map((value, i) => (
                i === index ? true : false
            ))
        );
    }

    return (
        <div className="menu_container">
            <div className={`menu_left ${leftMenuActived && 'menu_left_background'}`}>
                {
                    leftMenuActived ?
                        <>
                            <Frame source="./images/menu/logo_menu_header_selected.png" alt="logo" />
                            {
                                elementSelected[0] && (
                                    <>
                                        <span className="marker">Solutions</span>
                                        <div className={`${leftMenuActived && 'menu_frame_container'}`}>
                                            <Frame source="./images/menu/solutions_list.png" alt="Solutions List" />
                                        </div>
                                    </>
                                )
                            }
                            {
                                elementSelected[1] && (
                                    <>
                                        <span className="marker">Industries</span>
                                        <div className={`${leftMenuActived && 'menu_frame_container'}`}>
                                            <Frame source="./images/menu/solutions_list.png" alt="Industries List" />
                                        </div>
                                    </>
                                )
                            }
                            {
                                elementSelected[2] && (
                                    <>
                                        <span className="marker">Insights</span>
                                        <div className={`${leftMenuActived && 'menu_frame_container'}`}>
                                            <Frame source="./images/menu/solutions_list.png" alt="Insights List" />
                                        </div>
                                    </>
                                )
                            }
                            {
                                elementSelected[3] && (
                                    <>
                                        <span className="marker">About Us</span>
                                        <div className={`${leftMenuActived && 'menu_frame_container'}`}>
                                            <Frame source="./images/menu/solutions_list.png" alt="About Us List" />
                                        </div>
                                    </>
                                )
                            }
                            {
                                elementSelected[4] && (
                                    <>
                                        <span className="marker">Career</span>
                                        <div className={`${leftMenuActived && 'menu_frame_container'}`}>
                                            <Frame source="./images/menu/solutions_list.png" alt="Career List" />
                                        </div>
                                    </>
                                )
                            }
                        </> :
                        <>
                            <Frame source="./images/menu/logo_menu_header.png" alt="logo" />
                            <div className="menu_left_apresentation">
                                <h1 className="menu_left_apresentation_heading">
                                    Create unrivalled shopping experiences for your consumers
                                </h1>
                                <Button content="Book a demo" color="primary" />
                            </div>
                        </>
                }
            </div>
            <div className="menu_line" style={{ display: `${leftMenuActived ? 'none' : 'block'}` }} />
            <div className="menu_right">
                <div className="menu_right_close" onClick={closeMenu}>
                    <Frame source="./images/menu/close.png" alt="Close menu" />
                </div>
                <ol className="menu_right_list">
                    <li onClick={() => turnOnSwitch(0)} style={{ color: `${elementSelected[0] ? '#6358E7' : ''}` }}>
                        Solutions
                    </li>
                    <li onClick={() => turnOnSwitch(1)} style={{ color: `${elementSelected[1] ? '#6358E7' : ''}` }}>
                        Industries
                    </li>
                    <li onClick={() => turnOnSwitch(2)} style={{ color: `${elementSelected[2] ? '#6358E7' : ''}` }}>
                        Insights
                    </li>
                    <li onClick={() => turnOnSwitch(3)} style={{ color: `${elementSelected[3] ? '#6358E7' : ''}` }}>
                        About Us
                    </li>
                    <li onClick={() => turnOnSwitch(4)} style={{ color: `${elementSelected[4] ? '#6358E7' : ''}` }}>
                        Career
                    </li>
                </ol>
                <div className="menu_right_footer">
                    <span>Our Work</span>
                    <span onClick={turnOffLeftMenu}>Book a Consultation</span>
                </div>
            </div>
        </div>
    );
}

export default Menu;