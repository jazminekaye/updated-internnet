import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Example icon, replace with your preferred icon library

const InternDashboard = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.menuIcon}>
          <Icon name="bars" size={30} color="#000" /> {/* Adjust icon as needed */}
        </View>
        <Text style={styles.dashboardText}>DASHBOARD </Text>
      </View>

      {/* User Info */}
      <View style={styles.userInfo}>
        <View style={styles.userIcon}>
          <Icon name="user" size={50} color="#007BFF" /> {/* Example user icon */}
          <Text style={styles.userName}>John Doe </Text> {/* Replace with dynamic user name */}
        </View>
      </View>

      {/* Dashboard Metrics */}
      <View style={styles.metricsContainer}>
        {/* Example metrics with borders */}
        <View style={styles.metric}>
          <Text>Total Worked Hours</Text>
          {/* Display actual data or placeholders */}
        </View>
        <View style={styles.metric}>
          <Text>Active Time Today</Text>
          {/* Display actual data or placeholders */}
        </View>
        <View style={styles.metric}>
          <Text>Clock Time-in and Time-out</Text>
          {/* Display actual data or placeholders */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuIcon: {
    marginRight: 10,
  },
  dashboardText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userIcon: {
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metric: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
});

export default InternDashboard;
