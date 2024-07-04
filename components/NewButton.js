import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "react-native-paper";
import * as Contacts from "expo-contacts";
import NewMessageScreen from "../screens/NewMessageScreen";
export default function NewButton({ name, onPressHandler }) {
  const [contactDetails, setContactDetails] = useState([]);
  const navigation = useNavigation();

  //calling the function to format the contacts and store them in the state
  const formatContacts = (contacts) => {
    let contactsArray = [];

    contacts.map((contact) => {
      //create an object to store the contact details
      let tempContacts = {
        name: contact.name,
        phoneNumbers: contact.phoneNumbers[0].number,
      };

      contactsArray.push(tempContacts);
    });

    setContactDetails(contactsArray);

    return true;
  };

  //function to fetch contacts from the phone by using expo contacts api
  const getContacts = async () => {
    try {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          // const contact = data;
          // console.log(contact);

          //calling the function to format the contacts and store them in the state
          //console.log(data);
          formatContacts(data);

          //diplaying the new message screen and passing the contacts as props

          // <NewMessageScreen />;
        } else {
          alert("No contacts found");
        }
      } else {
        alert("Permission denied");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <IconButton
      icon={name}
      size={35}
      color="white"
      containerColor="#0fba1a"
      iconColor="#fff"
      onPress={async () => {
        if (onPressHandler === "new-message") {
          console.log("new message");
          await getContacts();
          //navigate to NewMessageScreen;
          navigation.navigate("NewMessageScreen", {
            contactDetails: contactDetails,
          });
        } else if (onPressHandler === "new-call") {
          console.log("new call");
        }
      }}
    />
  );
}
