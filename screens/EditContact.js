import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { addContacts, editContact } from "../db/contacts";
import db from "../db/db";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const EditContact = ({ route }) => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [landlineNumber, setLandlineNumber] = useState("");
  const [isFavourite, setIsFavourite] = useState(0);
  const { contact } = route.params;
  const contactId = contact.id;
  //console.log(contact.id);
  const navigation = useNavigation();
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFullName(contact.fullName);
    setMobileNumber(contact.phoneNumber);
    setLandlineNumber(contact.landlineNumber);
    setImage(contact.imageUri);
    setIsFavourite(contact.isFavourite); //1 or 0
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!fullName) errors.fullName = "Name is required";
    if (!mobileNumber) errors.mobileNumber = "Mobile number is required";
    else if (
      parseFloat(mobileNumber) < 0 ||
      mobileNumber.length < 10 ||
      mobileNumber.length > 10
    )
      errors.mobileNumber = "Number must be 10 digit";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSave = () => {
    if (validateForm()) {
      const contact = {
        id: contactId,
        imageUri: image,
        fullName,
        phoneNumber: mobileNumber,
        landlineNumber,
        isFavourite: isFavourite,
      };
      console.log(contact);
      editContact(db, contact);
      setFullName("");
      setMobileNumber("");
      setLandlineNumber("");
      setIsFavourite(0);
      setImage(null);
      setErrors({});
      navigation.navigate("Contacts List");
    }
  };
  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    //console.log(result);
    if (!result.canceled) {
      const imageObject = result.assets[0]; // Access the first object in assets
      const imageUri = imageObject.uri; // Extract the URI from the object
      console.log("Image URI:", imageUri);
      setImage(imageUri);
    }
  };

  const handleIsFavourite = () => {
    setIsFavourite((prev) => (prev === 1 ? 0 : 1));
  };

  if (hasGalleryPermission === false) {
    return <Text>No permission granted</Text>;
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.favouriteIconContainer}>
        <View>
          <TouchableOpacity activeOpacity={0.5} onPress={handleIsFavourite}>
            <FontAwesome
              name="star"
              size={24}
              color={isFavourite === 1 ? "blue" : "#a6a6a6"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.formContainer}>
          <TouchableOpacity onPress={pickImage} activeOpacity={0.8}>
            <View style={styles.imageUploader}>
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={[styles.avatar, { width: "100%", height: 80 }]}
                />
              ) : (
                <MaterialCommunityIcons
                  name="file-image-plus-outline"
                  size={40}
                  color="#0066ff"
                />
              )}
            </View>
          </TouchableOpacity>

          <View style={styles.field}>
            <Octicons name="person" size={45} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Full name"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>
          {errors.fullName ? (
            <Text style={{ color: "red" }}>*{errors.fullName}</Text>
          ) : null}

          <View style={styles.field}>
            <Feather name="phone" size={35} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Mobile number"
              keyboardType="numeric"
              value={mobileNumber}
              onChangeText={setMobileNumber}
            />
          </View>
          {errors.mobileNumber ? (
            <Text style={{ color: "red" }}>*{errors.mobileNumber}</Text>
          ) : null}
          <View style={styles.field}>
            <Entypo name="landline" size={35} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Landline number"
              keyboardType="numeric"
              value={landlineNumber}
              onChangeText={setLandlineNumber}
            />
            {errors.landlineNumber ? (
              <Text style={{ color: "red" }}>{errors.landlineNumber}</Text>
            ) : null}
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonTitle}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  field: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#005ce6",
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    borderColor: "black",
    marginBottom: 10,
    width: 310,
    marginLeft: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#1a75ff",
    padding: 10,
    width: 100,
    backgroundColor: "#1a75ff",
  },
  buttonTitle: {
    color: "white",
    fontWeight: "bold",
  },
  imageUploader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
    width: 100,
    height: 100,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: "#1a75ff",
    backgroundColor: "#e6f0ff",
    elevation: 3,
  },
  error: {
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 60,
  },
  favouriteIconContainer: {
    backgroundColor: "white",
    alignItems: "flex-end",
    margin: 15,
  },
  mainContainer: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default EditContact;
