import React, { Component } from 'react'

class EthicalDisclaimer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                The tools, scripts, techniques, and information provided in this repository are strictly intended for educational purposes and lawful security testing only. Their use is designed to enhance cybersecurity awareness, strengthen system defenses, and promote ethical security practices.
                Unauthorized use of these resources for malicious activities-including, but not limited to, unauthorized access, exploitation, or causing harm to systems-is strictly prohibited. Such activities may violate local, national, and international laws, including, but not limited to, the European Union's General Data Protection Regulation (GDPR) and the Computer Misuse Act 1990.
                The developers and distributors of this repository disclaim any responsibility for misuse or damages arising from improper or illegal use of the tools or information provided. Users are fully responsible for ensuring their activities comply with applicable laws and for obtaining explicit authorization before testing or interacting with any systems. Users unsure whether their activities comply with applicable laws should consult a qualified legal professional before proceeding.
            </div>
        )
    }
}

export default EthicalDisclaimer;
