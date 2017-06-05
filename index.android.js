'use strict';
import React from 'react';

import {
  AppRegistry,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import {Main} from './common/modules/main/Main';
import {Events} from './common/modules/events/Events';
import {AddEvent} from './common/modules/add-event/AddEvent';

const DailyStack = StackNavigator({

	
	
	Main: { 
		screen: Main,
	},

	Events: {
		screen: Events,
	},

	AddEvent: {
		screen: AddEvent,
	},

});

AppRegistry.registerComponent('daily_calendar', () => DailyStack);

