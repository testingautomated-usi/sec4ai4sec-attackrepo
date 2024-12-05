import "./home.css"
import React, { Component } from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import MouseIcon from '@mui/icons-material/Mouse';
import CodeIcon from '@mui/icons-material/Code';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
// import spartaLogo from '../../images/sparta-logo.png'
// import sapLogo from '../../images/SAP_R_grad_scrn.png'
import euLogo from '../../images/EU_FUND_IMG.png'
import secLogo from '../../images/sec4AI4secsmall.png'
import {ReactComponent as  AttacktreeImage} from '../../images/attackgraph.svg'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const boxStyle = {
    backgroundImage: 'linear-gradient(90deg, rgba(0, 50, 153, 1) 0%, rgba(153, 0, 51, 1) 100%);',
    opacity: '87%',
    width: "100vw",
    minHeight: "100vh",
    marginLeft: '0px',


}

const boxStyle2 = {
    backgroundColor: 'white',
    opacity: '90%',
    width: "100vw",
    minHeight: "87vh",
    marginLeft: '0px',
    display: "flex",
    position: "relative"
}

const boxStyle3 = {
    backgroundImage: 'linear-gradient(90deg, rgba(0, 50, 153, 1) 0%, rgba(153, 0, 51, 1) 100%);',
    width: "100vw",
    minHeight: "15vh",
    marginBottom: '0px',
    marginLeft: '0px',
    marginTop: '10px'
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "rgba(0, 0, 0, 0)",
    textAlign: 'center',
    height: 60,
    lineHeight: '60px',
  }));


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick() {

        this.setState({ sidebarOpen: !this.state.sidebarOpen });
        if (!this.state.sidebarOpen) {

            document.getElementById('homeWrapperDiv').style.marginLeft = "310px"

        } else {
            document.getElementById('homeWrapperDiv').style.marginLeft = "0px"

        }
    }



    render() {
        return (
            <div className="home">
                <Topbar handleClickTopbar={this.handleClick} sidebarState={this.state.sidebarOpen} />

                <div className="container">
                    <Sidebar open={this.state.sidebarOpen} />
                    <div className="tableWrapper" id="homeWrapperDiv">

                        <Box sx={boxStyle}>

                            {/* Box for the title, tree image, description and button to the taxonomy */}

                            <Grid container spacing={2}>
                                <Grid item xs={1}>

                                </Grid>
                                <Grid item xs={6}>

                                    <Grow
                                        in={true}
                                        style={{ transformOrigin: '0 0 0'}}
                                        {...({ timeout: 2000 } )}
                                    >
                                        {
                                            <h1 style={{ color: "white", fontSize: "8vh", fontWeight: 'normal', marginTop: "50px", padding: "0%", }}><p style={{ color: "white", fontSize: "45px",  fontWeight: 'light', marginTop: "50px", whiteSpace:'nowrap', display:'inline'}}>Sec4AI4Sec Attack Tools Benchmark</p></h1>
                                           
                                        }
                                    </Grow>
                                    
                                    <Grow
                                        in={true}
                                        style={{ transformOrigin: '0 0 0'}}
                                        {...({ timeout: 2000 } )}
                                    >
                                        {
                                            <p style={{ color: "white", fontSize: "30px", fontWeight: 'light', marginTop: '-15px' }}>for the Evaluation of Trustworthy AI Models</p>
                                        }
                                    </Grow>

                                    <Grow
                                        in={true}
                                        style={{ transformOrigin: '0 0 0'}}
                                        // {...({ timeout: 2500 } )}
                                    >
                                    <p style={{ fontSize: "17px", fontWeight: 'lighter', textAlign: "left", color: "white"}}>
                                    <br></br>
                                        The techniques investigating AI robustness aim at supporting organizations, software, and AI developers on guaranteeing that their processes are taking into consideration not only AI/ML-related vulnerabilities, but also quantify their impact on deployed applications and consider potential mitigations.
                                        <br></br>
                                        For this reason, we highlight here the importance of delineating the difference between model-level attacks, i.e., attacks that exploit weaknesses of the ML model in isolation to obtain a mis-prediction for specific, possibly manipulated, inputs, and system-level attacks,  i.e., attacks that impact the behaviour an entire system of which ML is a component that makes decisions by manipulating the environment where the system operates. 
                                        <br></br>
                                        The distinction is based on which inputs are manipulated by the attacker and which output manifest the effect of the attack.
                                        In model-level attacks the input is the direct, immediate input of the model and the output is the model's prediction. 
                                        In system-level attacks the input is some element of the environment where the system operates that can be manipulated by the attacker and the output manifesting the effects of the attack is a failure of the entire system.
                                        <br></br>
                                        For instance, given an autonomous car whose steering control commands are predicted by a neural network from camera images, a model level attack would manipulate the input image to produce a large steering angle error, while a system level attack may manipulate the billboards along the road to produce a car crash (it should be noticed that a single mis-prediction on an image might be compensated at the system level by successive, correct predictions).
                                        <br></br>
                                        This distinction facilitates a more targeted and comprehensive approach to cybersecurity, enabling the formulation of effective considerations on the risks and the design of mitigation strategies tailored to specific threat landscapes. 
                                        By emphasizing this distinction, we aim to foster a more resilient and secure AI ecosystem, where both models and systems are adeptly fortified against evolving adversarial threats against both levels of impact.

                                        <Box
                                            sx={{
                                                // p: 2,
                                                display: 'grid',
                                                gridTemplateColumns: { md: '1fr 1fr' },
                                                gap: 2,
                                            }}
                                            >
                                                
                                            <Item key={1} elevation={0} style={{ lineHeight: "20px" }}>
                                            <h1 style={{ color: "white", fontSize: "20px", fontWeight: 'normal', marginTop: "50px", padding: "0%", marginBottom: '10px' }}>Model-level Attack Tools</h1>
                                            <p style={{ fontSize: "15px", fontWeight: 'lighter', textAlign: "center", color: "white"}}>This categorizes attacks that directly manipulate the inputs of AI/ML models, aiming to induce incorrect predictions or expose vulnerabilities.</p><br/>

                                                {<Link style={{ color: 'white', textDecoration: 'inherit' }} to="/tree/model">
                                                    <Button variant="outlined" startIcon={<VideogameAssetIcon />} size='medium' color='info' style={{width: "150px", border: "1px solid white", color: "white"}}>

                                                        Explore
                                                    </Button>
                                                </Link>}
                                                </Item>
                                            <Item key={1} elevation={0} style={{ lineHeight: "20px" }}>
                                            <h1 style={{ color: "white", fontSize: "20px", fontWeight: 'normal', marginTop: "50px", padding: "0%", marginBottom: '10px' }}>System-level Attack Tools</h1>
                                            <p style={{ fontSize: "15px", fontWeight: 'lighter', textAlign: "center", color: "white"}}>This categorizes attacks that target the broader system in which an AI component operates, manipulating environmental factors to cause system failures.</p><br/>
                                            {<Link style={{ color: 'white', textDecoration: 'inherit' }} to="/tree/system">
                                                    <Button variant="outlined" startIcon={<VideogameAssetIcon />} size='medium' color='info' style={{width: "150px", border: "1px solid white", color: "white"}}>

                                                    Explore
                                                    </Button>
                                                </Link>}
                                                </Item>


                                            </Box>
                                        
                                
                                        
                                       
                                    </p>

                                    </Grow>
                                </Grid>
                                <Grid item xs={4}>
                                <Grow
                                        in={true}
                                        style={{ transformOrigin: '0 100 20'}}
                                        {...({ timeout: 3000 } )}
                                    >
                                        {
                                                <AttacktreeImage style={{position:'absolute', width:'50%',right:'0'}}></AttacktreeImage>
                                        }
                                    </Grow>

                                </Grid>


                            </Grid>


                        </Box>

                        <Box sx={boxStyle3} >
                            {/* Box for the footer */}
                            <Grid container spacing={2}>
                                <Grid item xs={7}>
                                {/* <a className="logo"  href="https://www.sap.com/" target="_blank" rel="noreferrer"><img style={{width:"80px", left:"0", marginLeft:"1%", marginTop:'.3%'}} src={sapLogo} alt="SAP Logo" /></a> */}
                                </Grid>
                                <Grid item xs={3}>

                                <a className="logo" href='https://www.sec4ai4sec-project.eu/' rel="noreferrer"><img style={{width:"40px", marginLeft:"90%", marginTop:'.3%'}} src={secLogo} alt="sec4ai4sec Logo" /></a>
                                </Grid>
                                
                                <Grid item xs={2}>
                                <a className="logo" rel="noreferrer"><img style={{width:"200px", marginLeft:"10%", marginTop:'.2%'}} src={euLogo} alt="EU Logo" /></a>
                                </Grid>
                                

                                <Grid item xs={8}>
                                {/* <p style={{color:"white",fontSize:"12px",fontWeight:"light",marginLeft:"1%", marginBottom:".4%"}}> Copyright (c) 2022 SAP SE or an SAP affiliate company and Risk Explorer for Software Supply Chains contributors</p> */}
                                </Grid>
                                <Grid item xs={4}>
                                <p style={{color:"white",fontSize:"12px", fontWeight:"light", textAlign:"right", marginRight:"4%", marginBottom:".4%"}}>
                                    This project is funded by the European Union's Horizon Europe research and innovation programme under the project Sec4AI4Sec, grant agreement No 101120393.
                                </p>
                                </Grid>
                            </Grid>
                        </Box>

                    </div>

                </div>
            </div>
        )
    }
}

export default Home;
