import {
	StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
	eventsContainer: {
        flex: 3,
        backgroundColor: '#FCFBF7',
    },
 
    todayEvents: {
        flex: 1,
        width: '95%',
        marginRight: "auto",
        marginLeft: "auto",
        justifyContent: 'center',
    },
 
    todayEventsText: {
        fontSize: 18,
        color: "#504C4C",
        fontFamily: "FreeSans",  
    },
 
    eventsData: {
        flex: 4,
        marginTop: 10,
        
    },
 
    eventsText: {
        fontSize: 16,
        width: '80%',
        marginLeft: 10,
        marginBottom: 10,
        color: "#272323",
        fontFamily: "FreeSans",
 
    },

    indicatorContainer: {
    	flex: 1,
    	justifyContent: 'center',
    },

    Indicator: {
    	height: 50,
    	width: 50,
    	marginLeft: 'auto',
    	marginRight: 'auto',
    },

    notEvents: {
    	fontSize: 18,
        color: "#272323",
        width: '80%',
        marginLeft: 10,
        fontFamily: "FreeSans",
        textDecorationLine: "underline",
	    textDecorationStyle: "solid",
	    textDecorationColor: "#000",
    },

    buttonsConatiner: {
    	position: 'absolute',
    	right: 10,
    	bottom: 10,
    	flexDirection: 'row',
    	flexWrap: 'wrap',
    	justifyContent: 'flex-end',
    },

    plusButton: {
    	width: 50,
    	height: 50,
    	backgroundColor: '#6B52AE',
    	borderRadius: 25,
    	justifyContent: 'center',
    	marginRight: 20,
    },

    plusButtonText: {
    	textAlign: 'center',
    	width: '100%',
    	fontSize: 20,
        color: "#fff",
        fontFamily: "FreeSansBold", 
    },

    addButton: {
    	width: 50,
    	height: 50,
    	backgroundColor: '#ccc',
    	borderRadius: 25,
    },

});