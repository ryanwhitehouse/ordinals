import { backgroundColor } from './theme'

const ordinalResultStyles = {
    resultsLabel: {
        paddingTop: '10px',
        paddingLeft: '21px',
        fontSize: '14px',
        marginBottom: '24px',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        cursor: 'pointer'
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
    },
    image: {
        height: '30px',
        width: '30px'
    },
    imageContainer: {
        marginLeft: '20px',
        height: '30px',
        width: '30px'
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
        borderRadius: '10px'
    },   
}

const ordinalDetailStyles = {
    detailsHeaderContainer: {
        width: '100%',
        marginBottom: '17px'
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
    },
    inscriptionLabel: {
        marginBottom: '17px',
        marginTop: '24px',
        marginLeft: '17px'
    },
    metadataLabel: {
        marginLeft: '18px',
        marginBottom: '8px',
        fontSize: '12px',
        color: 'rgba(255, 255, 255, 0.7)'
    },
    metadataField: {
        fontSize: '14px',
        marginLeft: '18px',
        width: 'calc(100% - 64px)',
        wordBreak: 'break-all',
    },
    attributeField: {
        fontSize: '14px',
        marginLeft: '18px',
        width: 'calc(100% - 64px)',
        wordBreak: 'break-all',
        paddingTop: '11px',
        paddingBottom: '12px'
    },
    attributeContainer: {
        background: '#24252C',
        borderRadius: '8px',
        height: '40px',
    },
    attributesLabel: {
        marginTop: '24px',
        marginLeft: '17px',
        marginBottom: '33px'
    },
    image: {
        height: '375px',
        width: '375px'
    },
    imageContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

  export { ordinalSearchStyles, ordinalResultStyles, ordinalDetailStyles }