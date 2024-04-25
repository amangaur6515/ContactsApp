import * as SQLite from "expo-sqlite";

//Connection is initialised globally
const db = SQLite.openDatabase("ContactsAppDb");

/**
 * If you have a existing database this is where you would import it,
 * otherwise this is where you would create tables and seed DB.
 */
export function initDatabase(db) {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS Contacts2 (id INTEGER PRIMARY KEY AUTOINCREMENT, imageUri TEXT,fullName TEXT,phoneNumber TEXT, landlineNumber Text, isFavourite INTEGER DEFAULT 0);",
        [],
        () => {
          console.log("database initialized successfully");
        },
        (error) => {
          console.error("Failed to initialize database:", error);
        }
      );
    });
  }
  

export default db;