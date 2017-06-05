'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {Main} from './common/modules/main/Main'

export default class dailyCalendar extends Component {
    render() {
        return <Main/>;
    }
};

AppRegistry.registerComponent('daily_calendar', () => dailyCalendar);
