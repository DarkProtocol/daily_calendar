import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({

	mainContainer: {
		flex: 1,
		flexDirection: 'column',
	},

	headerContainer: {
		flex: 1,
		backgroundColor: '#6B52AE',
		flexDirection: 'column',
		justifyContent: 'center',
	},

	calendarContainer: {
		flex: 6,
		backgroundColor: '#FCFBF7',
		borderBottomWidth: 1,
		borderBottomColor: '#6B52AE',
	},

	eventsContainer: {
		flex: 3,
		backgroundColor: '#FCFBF7',
	},

	headerTextMainContainer: {
		width: '80%',
		marginLeft: 'auto',
		marginRight: 'auto',
		flexDirection: 'row',
	},

	headerTextContainer: {
		flex: 6,
	},

	headerButtonContainer: {
		flex: 4,
	},

	headerText: {
		fontFamily: 'FreeSans',
		color: '#FFF',
		fontSize: 18,
	},


	calendarDaysContainer: {
		flex: 1,
		flexDirection: 'row',
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 5,
	},

	simpleDay: {
		flex: 1,
		textAlign: 'center',
		fontSize: 14,
		color: '#A9A8A6',
	},

	weekendDay: {
		flex: 1,
		textAlign: 'center',
		fontSize: 14,
		color: '#CB2431',
	},

	calendarTabs: {
		flex: 5,
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 5,
		marginBottom: 5,
	},

	calendarTabContainer: {
		flex: 1,
		justifyContent: 'space-between',
	},

	calendarTabRow: {
		flexDirection: 'row',
		flex: 1,
	},

	calendarTabColumn: {
		flex: 1,
		textAlign: 'center',
		fontSize: 16,
		color: '#A9A8A6',
	},

	calendarTabColumnWeekend: {
		flex: 1,
		textAlign: 'center',
		fontSize: 16,
		color: '#CB2431',
	},

	currentWeekDay: {
		borderColor: 'red',
		borderWidth: 1,
	},

	currentDate: {
		color: '#000',
		fontSize: 18,
		flex: 1,
		fontFamily: 'FreeSans',
		//textAlign: 'center',
		marginLeft: 10,
	},

});