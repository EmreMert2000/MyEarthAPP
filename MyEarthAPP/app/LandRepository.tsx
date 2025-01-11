import * as SQLite from "expo-sqlite";


const db = SQLite.openDatabase("land_database.db");

class LandRepository {
 
  static initialize() {
    db.transaction((tx: { executeSql: (arg0: string) => void; }) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS lands (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          size TEXT,
          soilType TEXT
        )`
      );
    });
  }

  /**
   * Tüm arazileri getirir.
   * @param callback - Arazileri döndürmek için kullanılan callback.
   */
  static getAllLands(callback: (lands: any[]) => void) {
    db.transaction((tx: { executeSql: (arg0: string, arg1: never[], arg2: (_: any, resultSet: any) => void) => void; }) => {
      tx.executeSql(
        `SELECT * FROM lands`,
        [],
        (_, resultSet) => {
          const lands = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            lands.push(resultSet.rows.item(i));
          }
          callback(lands);
        }
      );
    });
  }

  /**
   * Yeni bir arazi ekler.
   * @param name - Arazi adı.
   * @param size - Arazi boyutu.
   * @param soilType - Arazi toprak türü.
   * @param callback - İşlem tamamlandığında çağrılan callback.
   */
  static addLand(name: string, size: string, soilType: string, callback: () => void) {
    db.transaction((tx: { executeSql: (arg0: string, arg1: string[], arg2: () => void) => void; }) => {
      tx.executeSql(
        `INSERT INTO lands (name, size, soilType) VALUES (?, ?, ?)`,
        [name, size, soilType],
        () => callback()
      );
    });
  }

  /**
   * Belirli bir araziyi siler.
   * @param id - Silinecek arazinin ID'si.
   * @param callback - İşlem tamamlandığında çağrılan callback.
   */
  static deleteLand(id: number, callback: () => void) {
    db.transaction((tx: { executeSql: (arg0: string, arg1: number[], arg2: () => void) => void; }) => {
      tx.executeSql(
        `DELETE FROM lands WHERE id = ?`,
        [id],
        () => callback()
      );
    });
  }
}

export default LandRepository;
