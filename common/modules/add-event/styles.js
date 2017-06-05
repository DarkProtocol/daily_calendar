import {StyleSheet} from 'react-native';

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

    /* Inputs */

    eventInputContainer: {
    	marginTop: 15,
    	width: '90%',
    	marginLeft: 'auto',
    	marginRight: 'auto',
    	borderBottomColor: '#6B52AE',
    	borderBottomWidth: 1,
    },

    eventLabel: {
    	fontSize: 16,
    	color: '#000000',
    	fontFamily: 'FreeSans',	
    },

    eventInput: {
    	minHeight: 15,
    	fontSize: 14,
    	color: '#000',
    	fontFamily: 'FreeSans',
    },

    buttonContainer: {
    	marginTop: 20,
    	width: '90%',
    	flexDirection: 'row',
    	justifyContent: 'flex-end',
    	marginLeft: 'auto',
        marginRight: 'auto',
    	flexWrap:'wrap'
    },

    buttonText: {
    	backgroundColor: '#2CB044',
    	paddingTop: 10,
    	paddingBottom: 10,
    	paddingLeft: 10,
    	paddingRight: 10,
    	fontFamily: 'FreeSans',
        color: '#fff',
        fontSize: 16,
        borderRadius: 5,
    },

    success: {
    	position: 'absolute',
    	textAlign: 'center',
    	bottom: 0,
    	left: 0,
    	fontFamily: 'FreeSans',
        color: '#fff',
        fontSize: 16,
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#2F2F2F',
    },

});