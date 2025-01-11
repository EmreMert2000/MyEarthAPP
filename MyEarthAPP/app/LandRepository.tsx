import * as SQLite from "expo-sqlite";

class LandRepository {
    db: Promise<SQLite.SQLiteDatabase>;
  static deleteLand(id: number, arg1: () => void) {
      throw new Error('Method not implemented.');
  }
  static addLand(name: string, size: string, soilType: string, arg3: () => void) {
      throw new Error('Method not implemented.');
  }
  static getAllLands(arg0: (data: any) => void) {
      throw new Error('Method not implemented.');
  }
  static initialize() {
      throw new Error('Method not implemented.');
  }
    ;

  constructor() {
    this.db = SQLite.openDatabase("land_database.db");
  }

  /**
   * Veritabanını başlatır ve tabloyu oluşturur.
   */
  async initialize(): Promise<void> {
    await (await this.db).execAsync(`
      CREATE TABLE IF NOT EXISTS lands (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        size TEXT NOT NULL,
        soilType TEXT NOT NULL
      );
    `);
    console.log("Database and table initialized");
  }

  /**
   * Tüm arazileri getirir.
   * @returns - Araziler listesi
   */
  async getAllLands(): Promise<any[]> {
    const allRows = await (await this.db).getAllAsync("SELECT * FROM lands");
    return allRows;
  }

  /**
   * Tek bir araziyi getirir.
   * @param id - Arazinin ID'si
   * @returns - Arazi objesi
   */
  async getLandById(id: number): Promise<any | null> {
    const firstRow = await (await this.db).getFirstAsync(
      "SELECT * FROM lands WHERE id = ?",
      id
    );
    return firstRow;
  }

  /**
   * Yeni bir arazi ekler.
   * @param name - Arazi adı
   * @param size - Arazi boyutu
   * @param soilType - Arazi toprak türü
   * @returns - Eklenen arazinin ID'si
   */
  async addLand(name: string, size: string, soilType: string): Promise<number> {
    const result = await (await this.db).runAsync(
      "INSERT INTO lands (name, size, soilType) VALUES (?, ?, ?)",
      name,
      size,
      soilType
    );
    return result.lastInsertRowId; // Eklenen satırın ID'sini döner
  }

  /**
   * Belirli bir araziyi günceller.
   * @param id - Güncellenecek arazinin ID'si
   * @param name - Yeni arazi adı
   * @param size - Yeni arazi boyutu
   * @param soilType - Yeni arazi toprak türü
   * @returns - Güncellenen satır sayısı
   */
  async updateLand(
    id: number,
    name: string,
    size: string,
    soilType: string
  ): Promise<number> {
    const result = await (await this.db).runAsync(
      "UPDATE lands SET name = ?, size = ?, soilType = ? WHERE id = ?",
      name,
      size,
      soilType,
      id
    );
    return result.changes; // Güncellenen satır sayısını döner
  }

  /**
   * Belirli bir araziyi siler.
   * @param id - Silinecek arazinin ID'si
   * @returns - Silinen satır sayısı
   */
  async deleteLand(id: number): Promise<number> {
    const result = await (await this.db).runAsync(
      "DELETE FROM lands WHERE id = ?",
      id
    );
    return result.changes; // Silinen satır sayısını döner
  }
}

export default LandRepository;
