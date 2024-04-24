export const getContacts = async (db) => {
    try {
      const contacts = [];
      await new Promise((resolve, reject) => {
        db.transaction(
          (tx) => {
            tx.executeSql(
              "SELECT * FROM Contacts",
              [],
              (_, results) => {
                for (let i = 0; i < results.rows.length; i++) {
                  contacts.push(results.rows.item(i));
                }
                resolve();
              },
              (_, error) => {
                console.error("Failed to execute query:", error);
                reject(error);
              }
            );
          },
          (error) => {
            console.error("Transaction error:", error);
            reject(error);
          }
        );
      });
      console.log("Retrieved contacts:", contacts);
      return contacts;
    } catch (error) {
      console.error("Failed to get Contacts from database:", error);
      throw error;
    }
  };


export const addContacts = async (db) => {
    const values = [
      "path_to_image",
      "Aman Gaur",
      "1234567890",
      "123456"
    ];
  
    try {
      await db.transaction(async (tx) => {
        await tx.executeSql("INSERT INTO Contacts (imageUri, fullName, phoneNumber, landlineNumber) VALUES (?, ?, ?, ?);", values);
        console.log("Insert successful");
      });
    } catch (error) {
      console.error("Failed to insert data:", error);
    }
  };