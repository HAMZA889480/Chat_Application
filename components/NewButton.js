import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "react-native-paper";
import * as Contacts from "expo-contacts";
// import NewMessageScreen from "../screens/NewConversation";
export default function NewButton({ name, onPressHandler }) {
  const [contactDetails, setContactDetails] = useState([]);
  const navigation = useNavigation();

  //calling the function to format the contacts and store them in the state
  const formatContacts = (contacts) => {
    let contactsArray = [];

    contacts.map((contact) => {
      //create an object to store the contact details
      let tempContacts = {
        contPersonName: contact.name,
        phoneNumbers: contact.phoneNumbers[0].number,
      };

      contactsArray.push(tempContacts);
    });

    //setContactDetails(contactsArray);

    return contactsArray;
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
          const formattedContacts = formatContacts(data);
          //setting the formatted contacts in the state
          //setContactDetails(formattedContacts);

          return formattedContacts;
        } else {
          alert("No contacts found");

          return false; //so we cannot navigate to the new message screen
        }
      } else {
        alert("Permission denied");
        return false; //so we cannot navigate to the new message screen
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

          const fetchResult = await getContacts();

          if (fetchResult) {
            setContactDetails(fetchResult); // Update the state with fetched contacts

            // Use a callback function to navigate after the state is updated
            setTimeout(() => {
              navigation.navigate("NewConversation", {
                contactDetails: fetchResult,
              });
            }, 0);
          }
        } else if (onPressHandler === "new-call") {
          console.log("new call");
        }
      }}
    />
  );
}
