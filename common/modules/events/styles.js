import {
  StyleSheet,
} from 'react-native';
 
export const styles = StyleSheet.create({
 
    mainContainer: {
        flex: 1,
        flexDirection: "column",
    },
 
    headerContainer: {
        flex: 1,
        backgroundColor: '#6B52AE',
        flexDirection: 'column',
        justifyContent: 'center',
    },
 
    eventsContainer: {
        flex: 9,
        backgroundColor: '#FCFBF7',
    },
 
 
    /* Header Container */
 
    headerMainTextContainer: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: "row",
    },
 
    headerButtonContainer: {
        flex: 2,
        justifyContent: "center",
    },
 
    headerTextContainer: {
        flex: 6,
    },
 
    headerAntiButtonContainer: {
        flex: 2,
    },
 
    backButtonText: {
        fontFamily: 'FreeSans',
        color: '#F9F8F4',
        fontSize: 16,
        textAlign: "left",
    },
 
    headerText: {
        fontFamily: 'FreeSans',
        color: '#F9F8F4',
        fontSize: 20,
        textAlign: "center",
    },
 
    
    indicatorContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    indicator: {
        width: 100,
        height: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    /* Events Container */
    eventContainer: {
        marginTop: 10,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#6B52AE',
    },

    eventName: {
        fontSize: 18,
        fontFamily: 'FreeSansBold',
        textAlign: 'center',
        color: '#000',
    },

    eventValue: {
        width: '90%',
        fontSize: 16,
        fontFamily: 'FreeSans',
        textAlign: 'center',
        color: '#000',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    eventTime: {
        marginTop: 10,
        textAlign: 'right',
        fontSize: 16,
        fontFamily: 'FreeSans',
        color: '#000',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '90%',
    },
 
});