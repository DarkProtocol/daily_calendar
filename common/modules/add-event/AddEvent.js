import React, {Component} from 'react';

import {
	Text,
	View,
	ScrollView,
	TouchableHighlight,
	TextInput,
	AsyncStorage,
} from 'react-native';

import {styles} from './styles';

import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import { NavigationActions } from 'react-navigation'

export class AddEvent extends Component {

	static navigationOptions = {
		header: null,
	}

	constructor(props) {
		super(props);
		this.state = {
			eventNameValue: '',
			eventTimeValue: '',
			eventTextValue: '',
			showSuccess: false,
		}

		this.day = this.props.navigation.state.params.day;
        this.month = this.props.navigation.state.params.month;
        this.year = this.props.navigation.state.params.year;

	}


	render() {
		return (
			 <View style={styles.mainContainer}>
 
                <View style={styles.headerContainer}>
                    <View style={styles.headerMainTextContainer}>
 
                        <TouchableHighlight 
	                        style={styles.headerButtonContainer} 
	                        onPress={() => {
	                            this.props.navigation.goBack();
	                        }}
                        	underlayColor="#6B52AE"
                        >
                            <Text style={styles.backButtonText}>Назад</Text>
                        </TouchableHighlight>  
 
                        <View style={styles.headerTextContainer}>
                            <Text style={styles.headerText}>Новое событие</Text>
                        </View>
 
                        <View style={styles.headerAntiButtonContainer}></View>
 
                    </View>
                </View>
                <View style = {styles.eventsContainer}>
       				<ScrollView>
	                	<View style={styles.eventInputContainer}>
	                		<Text style={styles.eventLabel}>Название события</Text>
	                		<TextInput
	                			placeholder="Введите название"
	                			selectionColor="#6B52AE"
	                			underlineColorAndroid="transparent"
	                			maxLength={30}
	                			style={styles.eventInput}
	                			value={this.state.eventNameValue}
	                			returnKeyType="done"
	                			ref="nameInput"
	                			onChangeText={(text) => {
	                				this.setState({
	                					eventNameValue: text,
	                				});
	                			}}
	                		/>
	                	</View>

	                	<View style={styles.eventInputContainer}>
	                		<Text style={styles.eventLabel}>Время события</Text>
	                		<TextInput
	                			placeholder="Введите время"
	                			selectionColor="#6B52AE"
	                			underlineColorAndroid="transparent"
	                			maxLength={30}
	                			style={styles.eventInput}
	                			value={this.state.eventTimeValue}
	                			returnKeyType="done"
	                			ref="timeInput"
	                			onChangeText={(text) => {
	                				this.setState({
	                					eventTimeValue: text,
	                				});
	                			}}
	                		/>
	                	</View>


	                	<View style={styles.eventInputContainer}>
	                		<Text style={styles.eventLabel}>Событие</Text>
	                		<AutoGrowingTextInput
	                			placeholder="Введите текст"
	                			selectionColor="#6B52AE"
	                			underlineColorAndroid="transparent"
	                			placeholder="Введите текст"
					            placeholderTextColor='#66737C'
					            maxHeight={200}
					            minHeight={45}
					            maxLength={300}
	                			style={styles.eventInput}
	                			value={this.state.eventTextValue}
	                			returnKeyType="done"
	                			ref="textInput"
	                			onChangeText={(text) => {
	                				this.setState({
	                					eventTextValue: text,
	                				});
	                			}}
	                		/>
	                	</View>

	                	<View style={styles.buttonContainer}>
	                		<Text style={styles.buttonText} onPress={this.onPressHandle.bind(this)}>
	                			Добавить
	                		</Text>
	                	</View>

	             

 				</ScrollView>
 			</View>

 			{
 			this.state.showSuccess ?
 			<Text style={styles.success}>Событие успешно добавлено!</Text>
 			:
 			false
 			}
 			

        </View>
		);
	}

	onPressHandle() {

		// проверим на ошибки
		if (this.state.eventNameValue.length == 0 || this.state.eventNameValue.length > 30) {
			this.refs.nameInput.focus();
			return false;
		}

		if (this.state.eventTimeValue.length == 0 || this.state.eventTimeValue.length > 30) {
			this.refs.timeInput.focus();
			return false;
		}

		if (this.state.eventTextValue.length == 0 || this.state.eventTextValue.length > 300) {
			this.refs.textInput.focus();
			return false;
		}

		let dateName = this.day + '_' + this.month + '_' + this.year;
		let data = {
			name: this.state.eventNameValue,
			time: this.state.eventTimeValue,
			event: this.state.eventTextValue,
		}

		AsyncStorage.getItem(dateName, (err, value) => {

			let resultArray = [];

			if (value != '' && value != null ) 
				resultArray = JSON.parse(value);
			
			resultArray.push(data);

			AsyncStorage.setItem(dateName, JSON.stringify(resultArray), () => {
				global.changeCurrentDate(this.day, this.month, this.year);
				this.setState({
					eventNameValue: '',
					eventTimeValue: '',
					eventTextValue: '',
					showSuccess: true,
				});

				setTimeout(() => {
					this.setState({
						showSuccess: false,
					});
				}, 2000);

			})

		})

		
	}

}