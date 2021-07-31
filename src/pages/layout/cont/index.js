import React from "react";
import "./index.scss";
import "./markdown.css";

class Cont extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mdText: ""
        }
    }
    componentDidMount() {
        this.props.onRef(this)
    }

    changeMdPath =  (nodedata) => {
        let {mdPath} = nodedata || {};
        if(mdPath){
            let {default: mdText} = require(`../../../markDownNote/${mdPath}`);
            this.setState({
                mdText
            })
        }else{
            this.setState({
                mdText: null
            })
        }
    }

    render() {
        return (
            <div className="cont" >
                {this.state.mdText && <div dangerouslySetInnerHTML={{ __html: this.state.mdText }}></div>}

                {!this.state.mdText && <div><h1>这家伙很菜,这个技能他不会</h1></div>}
            </div>
        );
    }
}

export default Cont;