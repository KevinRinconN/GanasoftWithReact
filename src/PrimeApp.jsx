import { PropTypes } from "prop-types";

export const PrimeApp = ({nomb}) => {

    return(
        <>
            <h1> Soy {nomb}</h1>
            <h3>Mi edad es 23 años</h3>
        </>
    );

}

PrimeApp.PropTypes = {

    nomb : PropTypes.string.isRequeried,
    edad: PropTypes.number,

}