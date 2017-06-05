import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
 
import {styles} from "./styles";
 
export class Events extends Component {
    
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);

        this.state = {
            content: 
                <View style={styles.indicatorContainer}>
                    <ActivityIndicator style={styles.indicator}/>
                </View>,
        }

        this.day = this.props.navigation.state.params.day;
        this.month = this.props.navigation.state.params.month;
        this.year = this.props.navigation.state.params.year;
    }

    componentWillMount() {
        setTimeout(() => {
            this.renderEvent();
        }, 500);
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
                            <Text style = {styles.headerText}>Все события</Text>
                        </View>
 
                        <View style={styles.headerAntiButtonContainer}></View>
 
                    </View>
                </View>
                <View style = {styles.eventsContainer}>
                    {this.state.content}
                </View>
 
            </View>
        );
    }
 
 
    renderEvent() {
 
        AsyncStorage.getItem(this.day + '_' + this.month + '_' + this.year, (err, result) => {

            let display = [];
            let events = [];
            let index = 0;
            let amount = 0;

            if (result != null && result != '') {

                events = JSON.parse(result);

                for (var i = 0; i < events.length; i++) {

                    display.push(
                        <View style={styles.eventContainer} key={i}>
                            <Text style={styles.eventName}>{events[i]['name']}</Text>
                            <Text style={styles.eventValue}>{events[i]['event']}</Text>
                            <Text style={styles.eventTime}>{events[i]['time']}</Text>
                        </View>
                    );

                }
            }

            this.showEvents(display);
        })

    }
    
    showEvents(events) {
        let display =
        <ScrollView>
                {
                    events.map((item, index) => {
                        return item;
                    })
                }

        </ScrollView>;

        this.setState({
            content: display,
        });
    }

}