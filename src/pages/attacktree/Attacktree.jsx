import "./attacktree.css"
import React, { Component } from 'react'
import { useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Taxonomy from "../../components/taxonomy/Taxonomy";
// import attacktreedata from "../../data/taxonomy.json"
import system_attacktreedata from "../../data/sys-attack-taxonomy.json"
import model_attacktreedata from "../../data/model-attack-taxonomy.json"


function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

  
class Attacktree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick() {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
        if(!this.state.sidebarOpen){
            document.getElementById('taxonomyDiv').style.marginLeft = "300px"
            document.getElementById('taxonomyDiv').style.width = "80%"
            document.getElementById('featuredContainer').style.width = "88%"
            
        }else{
            document.getElementById('taxonomyDiv').style.marginLeft = "0px"
            document.getElementById('taxonomyDiv').style.width = "100%"
            document.getElementById('featuredContainer').style.width = "100%"
            
        }
    }

    render() {
        return (
            
            <div className="home">
                <Topbar handleClickTopbar={this.handleClick} sidebarState={this.state.sidebarOpen}/>

                <div className="container">
                    <Sidebar open={this.state.sidebarOpen} />
                    {this.props.params.id === "system" ? (
                        <Taxonomy data={system_attacktreedata} type={this.props.params.id}/>
                    ) : (
                        <Taxonomy data={model_attacktreedata} type={this.props.params.id}/>
                    )}
                </div>
            </div>
        )
    }
}

export default withParams(Attacktree);