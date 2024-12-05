import React, { Component } from 'react'
import "./topbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
// import GitHubIcon from '@mui/icons-material/GitHub';
import Sec4AI4SecLogo from '../../images/sec4AI4secsmall.png'

export default class Topbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sidebarOpen: props.sidebarState
        }
    }

    handleclick() {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
        this.props.handleClickTopbar(); // From parent

    }

    render() {
        return (
            <div className="topbar">
                <div className="topbarWrapper">
                    <div className="topLeft">
                        <span className="logo">
                            {this.state.sidebarOpen ? <FontAwesomeIcon icon={faTimes} onClick={() => this.handleclick()} /> : <FontAwesomeIcon icon={faBars} onClick={() => this.handleclick()} />}
                        </span>
                    </div>
                    <div className="topRight">
                        <div className="topbarIcons">
                            <div className="topbarIconContainer">

                                <span className="logo">
                                    <a className="logo"  href="https://www.sec4ai4sec-project.eu/" rel="noreferrer">
                                        <img src={Sec4AI4SecLogo} alt="logo" style={{ width: "38px", marginTop: "12px" }} />
                                    </a>
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

