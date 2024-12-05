import React, { Component } from 'react'
import Select, { components, ControlProps } from 'react-select'
// import attacktable from '../../data/attackvectors.json'
import attacktable_sys from '../../data/sys-attack-vectors.json'
import attacktable_model from '../../data/model-attack-vectors.json'

const styles = {
    container: base => ({
        ...base,
        flex: 1,
        width: "95%",
        position: "absolute",
        top: "60px",
        left: "1px",
        right: "20px"
    })
};

const controlStyles = {
    padding: '5px',
    background: 'rgb(187, 186, 186)',
    color: '#555',
};

const SysControlComponent = (props: ControlProps<attacktable_sys, false>) => (
    <div style={controlStyles}>
        <p style={{ textAlign: 'center' }}>Taxonomy Category</p>
        <components.Control {...props} />
    </div>
);

const ModelControlComponent = (props: ControlProps<attacktable_model, false>) => (
    <div style={controlStyles}>
        <p style={{ textAlign: 'center' }}>Taxonomy Category</p>
        <components.Control {...props} />
    </div>
);

function getSysAttackList() {

    var attList = []

    attacktable_sys.forEach((x) => attList.push(
        {
            label: x["avName"],
            value: x["avId"]
        }
    ))
    return attList

}

function getModelAttackList() {

    var attList = []

    attacktable_model.forEach((x) => attList.push(
        {
            label: x["avName"],
            value: x["avId"]
        }
    ))
    return attList

}


class AttackSearchbar extends Component {

    sysattacklist = getSysAttackList()
    modelattacklist = getModelAttackList()
    

    handleChange = selectedOption => {
       
        this.props.selectedAttack(selectedOption ? selectedOption.value : "")
        
    };

    

    render() {
        return (
            <div>
                {this.props.attacktype === "system" ? <Select isClearable isDisabled={this.props.disable} options={this.sysattacklist} styles={styles} onChange={this.handleChange}
                components={{ Control: SysControlComponent }} defaultValue={this.sysattacklist.filter(element => element.value === this.props.fromUrl)}/>
                : <Select isClearable isDisabled={this.props.disable} options={this.modelattacklist} styles={styles} onChange={this.handleChange}
                components={{ Control: ModelControlComponent }} defaultValue={this.modelattacklist.filter(element => element.value === this.props.fromUrl)}/>
                }
            </div>
        )
    }

}

export default AttackSearchbar;