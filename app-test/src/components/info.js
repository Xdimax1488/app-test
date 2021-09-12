import Reactr from "react";


class Info extends Reactr.Component{
    render(){
        return(
            <div className="info">
                <h1 className="info__inner"> Погодное приложение</h1>
                <h2 className="info__iformation">Узнай погоду в своем городе</h2>
            </div>
        );

    }
}

export default Info 