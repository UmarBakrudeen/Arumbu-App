import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
  Pressable,
} from 'react-native';

const PaymentScreen = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [isAddAddressModalVisible, setAddAddressModalVisible] = useState(false);
  const [newAddress, setNewAddress] = useState('');

  const handlePaymentMethodSelect = method => {
    setSelectedPaymentMethod(method);
  };

  const toggleAddAddressModal = () => {
    setAddAddressModalVisible(!isAddAddressModalVisible);
  };

  const handleAddAddress = () => {
    setAddAddressModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.paymentMethod}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <TouchableOpacity
            style={[
              styles.paymentOption,
              {
                backgroundColor:
                  selectedPaymentMethod === 'Credit Card'
                    ? '#005600'
                    : 'transparent',
              },
            ]}
            onPress={() => handlePaymentMethodSelect('Credit Card')}>
            <Text
              style={{
                color:
                  selectedPaymentMethod === 'Credit Card' ? 'white' : 'black',
              }}>
              Credit Card
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.paymentOption,
              {
                backgroundColor:
                  selectedPaymentMethod === 'UPI' ? '#005600' : 'transparent',
              },
            ]}
            onPress={() => handlePaymentMethodSelect('UPI')}>
            <Text
              style={{
                color: selectedPaymentMethod === 'UPI' ? 'white' : 'black',
              }}>
              UPI
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.paymentOption,
              {
                backgroundColor:
                  selectedPaymentMethod === 'Cash on Delivery'
                    ? '#005600'
                    : 'transparent',
              },
            ]}
            onPress={() => handlePaymentMethodSelect('Cash on Delivery')}>
            <Text
              style={{
                color:
                  selectedPaymentMethod === 'Cash on Delivery'
                    ? 'white'
                    : 'black',
              }}>
              Cash on Delivery
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.shippingAddress}>
          <Text style={styles.sectionTitle}>Shipping Address</Text>
          <TouchableOpacity style={styles.addressOption}>
            <Text>Thalaiva Umar</Text>
            <Text>Thiruverumbur, Thiruchirappalli</Text>
            <Text>TamilNadu, India</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.addAddressButton}
            onPress={toggleAddAddressModal}>
            <Text>Add New Address</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.orderSummary}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isAddAddressModalVisible}
        onRequestClose={toggleAddAddressModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Add New Address</Text>
            <TextInput
              placeholder="Enter the new address"
              value={newAddress}
              onChangeText={text => setNewAddress(text)}
              style={styles.addressInput}
            />
            <Pressable style={styles.addButton} onPress={handleAddAddress}>
              <Text style={styles.addButtonLabel}>Add Address</Text>
            </Pressable>
            <Pressable
              style={styles.closeButton}
              onPress={toggleAddAddressModal}>
              <Text style={styles.closeButtonLabel}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paymentMethod: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  paymentOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#005600',
    borderRadius: 8,
    color: 'white',
  },

  shippingAddress: {
    backgroundColor: '#fff',
    padding: 16,
  },
  addressOption: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: 'transparent',
    borderRadius: 8,
    color: '#fff',
  },
  orderSummary: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  payButton: {
    backgroundColor: '#005600',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    margin: 10,
  },
  payButtonText: {
    color: 'white',
    fontSize: 18,
  },
  addAddressButton: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#005600',
    color: '#005600',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    width: 300,
  },
  modalHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  addressInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#005600',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 8,
  },
  addButtonLabel: {
    color: 'white',
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  closeButtonLabel: {
    color: 'white',
  },
});

export default PaymentScreen;
