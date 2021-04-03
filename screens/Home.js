import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SectionList} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import {DrawerActions} from 'react-navigation-drawer';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{alignItems: 'flex-start', marginTop: 40, marginLeft: 20}}
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.openDrawer())
          }>
            <SimpleLineIcons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.textStyle}>이승민님의 React native Example 모음집!</Text>
        <SectionList style={{marginTop: 20}}
          sections={[
            {title: 'Tutorial', data: ['To do List', 'Navigation Drawer']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
      alignItems: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'center',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default Home;