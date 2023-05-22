import { backgroundColor } from './theme'

const ordinalResultStyles = {
    resultsLabel: {
        paddingTop: '10px',
        paddingLeft: '21px',
        fontSize: '14px'
    },
    noResultsLabel: {
        paddingTop: '10px',
        paddingLeft: '21px',
        fontSize: '18px',
        textAlign: 'center'
    }
}

const ordinalSearchStyles = {
    title: {
        backgroundColor,
        paddingTop: '54px',
        paddingBottom: '17px',

        textAlign: 'center',
    },
    addressLabel: {
        backgroundColor,
        paddingTop: '10px',
        paddingLeft: '16px',
        paddingBottom: '10px',
        display: 'block'
    },
    addressInput: {
        height: '32px',
        marginLeft: '16px',
        marginRight: '17px',
        backgroundColor,
        color: '#fff',
        display: 'block',
        width: 'calc(100% - 33px)'
    },
    lookupButton: {
        backgroundColor: '#465AE9',
        color: '#fff',
        display: 'block',
        width: 'calc(100% - 33px)',
        marginLeft: '16px',
        marginRight: '17px',
        height: '46px'
    },   
}

  export { ordinalSearchStyles, ordinalResultStyles }