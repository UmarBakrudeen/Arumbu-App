import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class CustomerService extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Customer Service</Text>

        {/* Contact Information */}
        <View style={styles.contactInfo}>
          <Text>Phone: 123-456-7890</Text>
          <Text>Email: support@example.com</Text>
          <Text>Working Hours: 24/7</Text>
        </View>

        {/* Frequently Asked Questions */}
        <TouchableOpacity style={styles.section}>
          <Text style={styles.sectionTitle}>
            Frequently Asked Questions (FAQs)
          </Text>
        </TouchableOpacity>

        {/* Live Chat Support */}
        <TouchableOpacity style={styles.section}>
          <Text style={styles.sectionTitle}>Live Chat Support</Text>
        </TouchableOpacity>

        {/* Help Center */}
        <TouchableOpacity style={styles.section}>
          <Text style={styles.sectionTitle}>Help Center</Text>
        </TouchableOpacity>

        {/* Feedback and Contact Form */}
        <TouchableOpacity style={styles.section}>
          <Text style={styles.sectionTitle}>Feedback and Contact Form</Text>
        </TouchableOpacity>

        {/* Order History */}
        <TouchableOpacity style={styles.section}>
          <Text style={styles.sectionTitle}>Order History</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contactInfo: {
    marginBottom: 20,
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomerService;
