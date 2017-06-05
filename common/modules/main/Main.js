import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight 
} from 'react-native';

import {styles} from './styles';
import {DayEvents} from './DayEvents';

import {ViewPager} from 'rn-viewpager';

export class Main extends Component {

	static navigationOptions = {
	    header: null,
	 }

	constructor(props) {
	    super(props);
			
	    const YEAR_OFFSET = 2;

	    Date.prototype.daysInMonth = function() {
			return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
		};

		this.dates = {};

		let now = new Date();
		let currentYear = new Date().getFullYear();
		let currentMonth = new Date().getMonth();
		let currentDay = new Date().getDate();

		this.initialPage = YEAR_OFFSET * 12 + currentMonth;
		this.currentPage = this.initialPage;

		this.state = {
			currentYear: currentYear,
			currentMonth: currentMonth,
			currentDay: currentDay,
			showIndicator: false,
		};

		setTimeout(() => {

			this.setState({
				text: 'test1'
			});

		}, 500);

		for (var year = currentYear - YEAR_OFFSET; year <= currentYear + YEAR_OFFSET; year++) {

			var index = year.toString();
			this.dates[index] = [];

			for (var month = 0; month < 12; month++) {

				let firstDay = new Date(year, month, 1);

				this.dates[index].push({
					daysCount: firstDay.daysInMonth(),
					firstDay: this.formatDay(firstDay.getDay()),
				});

			}
		}

		global.changeCurrentDate = this.changeCurrentDate.bind(this);

	}

	render() {
		return (
			<View style={styles.mainContainer}>
				<View style={styles.headerContainer}>

					<View style={styles.headerTextMainContainer}> 

						<View style={styles.headerTextContainer}>
							<Text style={styles.headerText}>
								Ежеднивник (Beta)
							</Text>
						</View>

					</View>

				</View>
				<View style={styles.calendarContainer}>

					<View style={styles.calendarDaysContainer}>
						<Text style={styles.simpleDay}>Пн</Text>
						<Text style={styles.simpleDay}>Вт</Text>
						<Text style={styles.simpleDay}>Ср</Text>
						<Text style={styles.simpleDay}>Чт</Text>
						<Text style={styles.simpleDay}>Пт</Text>
						<Text style={styles.weekendDay}>Сб</Text>
						<Text style={styles.weekendDay}>Вс</Text>
					</View>
					

					<ViewPager 
						renderTabBar={false} 
						style={styles.calendarTabs} 
						initialPage={this.initialPage}
						onChangeTab={this.changeTab.bind(this)}
					>
						
					{
						Object.keys(this.dates).map((key) => {
						   return this.dates[key].map((item, index) => {

						   		return (
						   			<View style={styles.calendarTabContainer}>
						   				{this.renderMonth(item.daysCount, item.firstDay, index, key).map((item, index) => {
						   					return item;
						   				})}
						   				<Text style={styles.currentDate}>{this.getMonth(index)} {key}</Text>
						   			</View>
						   		);
						   })
						})
					}

					</ViewPager>

				</View>
				<View style={styles.eventsContainer}>
					<DayEvents 
						day={this.state.currentDay} 
						month={this.state.currentMonth} 
						year={this.state.currentYear}
						navigate={this.props.navigation.navigate.bind(this)}
					/>
				</View>
			</View>
		);
	}

	// рендерит месяца
	// передается вся информация о месяце: количество дней, какой день недели первый и какой это месяц
	// daysCont - количество дней в месяце
	// firstDay - с какого дня недели начинается месяц
	// month - какой месяц
	// year - какой год
	renderMonth(daysCount, firstDay, month, year) {

		let display = [];
		let firstWeekDaysCount = 7 - firstDay + 1; // сколько дней в первой неделе
		let countFullWeeks = Math.floor((daysCount - firstWeekDaysCount) / 7); //сколько полных недель
		let lastWeekDayCount = daysCount - firstWeekDaysCount - countFullWeeks * 7 - 1; //количсетво последних дней

		// ренелрим первую неедлю
		display[0] = 
			<View style={styles.calendarTabRow} key={0 + month}>
				{
					this.renderFirstWeek(firstDay, month, year).map((item, index) => {
						return item;
					})
				}
			</View>;

		let week = 0;

		for (week = 1; week <= countFullWeeks; week++) {

			display[week] = 
			<View style={styles.calendarTabRow} key={week + month}>
				{
					week == 1 ? 
					this.renderWeek(firstWeekDaysCount, month, year).map((item, index) => {
						return item;
					})
					:
					this.renderWeek((week - 1) * 7 + firstWeekDaysCount, month, year).map((item, index) => {
						return item;
					})
				}
			</View>;

		}

		// ренелрим последнюю неедлю
		display[week + 1] = 
			<View style={styles.calendarTabRow} key={week + 1 + month}>
				{
					this.renderLastWeek(lastWeekDayCount, daysCount, month, year).map((item, index) => {
						return item;
					})
				}
			</View>;

		return display;
	}

	// рендер первой недели
	// index - месяц
	// year - год
	renderFirstWeek(firstDay, month, year) {
		let display = [];
		let content = 0;
		let style = 0;
		let daysCount = 0;

		for (let i = 1; i <= 7; i++ ) {

			// здесь проверим, выходной или нет и поменяем стили
			if (i >= 6) 
				style = styles.calendarTabColumnWeekend;
			else 
				style = styles.calendarTabColumn;

			// тут провверим, совпадает ли число или нет
			if (i >= firstDay)
				content = ++daysCount;
			else 
				content = false;


			display.push(
				<Text style={style} key={i} onPress={() => {

					let currentDay = i - firstDay + 1;

					if (currentDay > 0) {
						this.setState({
							currentDay: currentDay,
							currentMonth: month,
							currentYear: year,
						});
					}

				}}>
					{content}
				</Text>
			);
		}

		return display;
	}

	isCurrentDayStyle(day, month, year) {
		if (this.state.currentDay == day && this.state.currentMonth == month && this.state.currentYear == year ) {
			console.warn(day + ' ' + month + ' '+ year);
		}
	}

	// рендерит неделю 
	// dayNember - количество дней на неделе
	// index - какой месяц
	// year - какой год
	renderWeek(dayNumber, month, year) {
		let display = [];
		let style = 0;

		for (let i = 1; i <= 7; i++ ) {
			++dayNumber;
			// здесь проверим, выходной или нет и поменяем стили
			if (i >= 6) 
				style = styles.calendarTabColumnWeekend;
			else 
				style = styles.calendarTabColumn;

			display.push(
				<Text style={[style]} key={i} onPress={() => {
					this.setState({
						currentDay: dayNumber - 7 + i,
						currentMonth: month,
						currentYear: year,
					});

				}}>
					{dayNumber}
				</Text>
			);
		}

		return display;
	}

	// рендер gjcktlytq недели
	renderLastWeek(lastWeekDayCount, daysCount, month, year) {
		let display = [];
		let content = 0;
		let style = 0;
		let tmp = lastWeekDayCount;

		for (let i = 1; i <= 7; i++ ) {

			// здесь проверим, выходной или нет и поменяем стили
			if (i >= 6) 
				style = styles.calendarTabColumnWeekend;
			else 
				style = styles.calendarTabColumn;

			// тут провверим, совпадает ли число или нет
			if (lastWeekDayCount >= 0)
				content = daysCount - lastWeekDayCount;
			else 
				content = false;


			display.push(
				<Text style={style} key={i} onPress={() => {

					let currentDay = daysCount - tmp + i - 1;

					if ( currentDay <= daysCount) {
						this.setState({
							currentDay: currentDay,
							currentMonth: month,
							currentYear: year,
						});
					}

				}}>
					{content}
				</Text>
			);

			lastWeekDayCount--;
		}

		return display;
	}

	// форматирует дни недели
	formatDay(day){
		if (day == 0) 
			return 7;
		else 
			return day;
	}

	// изменяем месяц
	changeTab(tab) {
	}

	changeCurrentDate(day, month, year) {
		this.setState({
			currentDay: day,
			currentMonth: month,
			currentYear: year,
		});

	}

	getMonth(month) {
		switch(month) {
			case 0:
				return 'Январь';
				break;

			case 1:
				return 'Февраль';
				break;

			case 2:
				return 'Март';
				break;

			case 3:
				return 'Апрель';
				break;

			case 4:
				return 'Май';
				break;

			case 5:
				return 'Июнь';
				break;

			case 6:
				return 'Июль';
				break;

			case 7:
				return 'Август';
				break;

			case 8:
				return 'Сентябрь';
				break;

			case 9:
				return 'Октябрь';
				break;

			case 10:
				return 'Ноябрь';
				break;

			case 11:
				return 'Декабрь';
				break;
		}
	}

}