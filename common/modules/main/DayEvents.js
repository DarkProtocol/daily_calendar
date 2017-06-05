import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ActivityIndicator,
  ScrollView,
  AsyncStorage,
} from 'react-native';

import {styles} from './events-styles';

export class DayEvents extends Component {

	constructor(props) {
		super(props);

		this.state = {
			content: false,
		}
	} 


	componentWillReceiveProps() {

		/*AsyncStorage.setItem(this.props.day + '_' + this.props.month + '_' + this.props.year, JSON.stringify([
			{
				name: 'Тест 1',
				time: '10:00',
				event: 'Тестовое событие 1'
			},
			{
				name: 'Тест 2',
				time: '23:00',
				event: 'Тестовое событие 2'
			}
		]), () => {
			console.warn('all');
		});*/

		this.setState({
			content: 
			<View style={styles.indicatorContainer}>
				<ActivityIndicator style={styles.Indicator}/> 
			</View>,
		});
		
		setTimeout(() => {
			this.getEvents();
		}, 500);
		
	}


	render() {
		return (this.state.content);
	}

	renderContent(events) {
		let content = 
		<View style = {styles.eventsContainer}>
 
            <View style = {styles.todayEvents}>
                <Text style = {styles.todayEventsText}> 
                	События: {this.props.day} {this.getMonth(this.props.month)} {this.props.year}
                </Text>
            </View>
               
            <View style = {styles.eventsData}>
            	<ScrollView> 
	            	{
	            	events.length > 0 ?
	            	events.map((item) => {
	            		return item;
	            	})
	            	:
	            	<Text style = {styles.notEvents}> Событий нет </Text>
	            	}
            	</ScrollView>
            	
            </View>

            <View style={styles.buttonsConatiner}>
            	<TouchableHighlight style={styles.plusButton}>
            		<Text style={styles.plusButtonText}>+</Text>
            	</TouchableHighlight>

            	<TouchableHighlight style={styles.addButton}>
            		<Text style={styles.plusButtonTet}>+</Text>
            	</TouchableHighlight>

            </View>

        </View>;

        this.setState({
        	content: content
        });

	}

	getEvents() {
		let dateName = this.props.day + '_' + this.props.month + '_' + this.props.year;
		AsyncStorage.getItem(dateName, (err, result) => {

			let eventsElements = [];
			let events = [];


			if (result != '' && result != null) {
				events = JSON.parse(result);
				for (var i = 0; i < events.length; i++) {
					eventsElements.push(
						<Text ellipsizeMode="tail" key={i} style={styles.eventsText}>{events[i]['name']}</Text>
					);
				}
			}
			this.renderContent(eventsElements);
		});
	}

	getMonth(month) {
		switch(month) {
			case 0:
				return 'Января';
				break;

			case 1:
				return 'Февраля';
				break;

			case 2:
				return 'Марта';
				break;

			case 3:
				return 'Апреля';
				break;

			case 4:
				return 'Мая';
				break;

			case 5:
				return 'Июня';
				break;

			case 6:
				return 'Июля';
				break;

			case 7:
				return 'Августа';
				break;

			case 8:
				return 'Сентября';
				break;

			case 9:
				return 'Октября';
				break;

			case 10:
				return 'Ноября';
				break;

			case 11:
				return 'Декабря';
				break;
		}
	}

	renderEvents() {

	}

}