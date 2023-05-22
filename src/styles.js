import { backgroundColor } from './theme'

const ordinalResultStyles = {
    resultsLabel: {
        paddingTop: '10px',
        paddingLeft: '21px',
        fontSize: '14px',
        marginBottom: '24px'
    },
    noResultsLabel: {
        paddingTop: '10px',
        paddingLeft: '21px',
        fontSize: '18px',
        textAlign: 'center'
    },
    resultContainer: {
        height: '49px',
        flex: 1,
        marginLeft: '22px',
    },
    chevronRight: {
        marginRight: '27px',
        width: '9px',
        height: '16px'
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
        marginBottom: '10px',
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
        height: '46px',
        borderRadius: '12px'
    },   
}

const ordinalDetailStyles = {
    detailsHeaderContainer: {
        height: '88px',
        width: '100%',
    },
    detailsHeaderTextContainer: {
        marginTop: '54px',
        display: 'flex'
    },
    detailsHeaderText: {
        width: '100%',
        textAlign: 'center',
        color: '#fff'
    },
    chevronLeft: {
        marginLeft: '27px',
        width: '9px',
        height: '16px'
    }
}

  export { ordinalSearchStyles, ordinalResultStyles, ordinalDetailStyles }