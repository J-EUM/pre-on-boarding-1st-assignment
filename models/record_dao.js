const pool = require("./common");

const createRecord = async (id, weight) => {
  await pool.query(
    `INSERT INTO records (user_id,weight) VALUES (?,?);
    `,
    [id, weight]
  );
};

const getRecordIdByUserId = async (id) => {
  return await pool.query(
    `SELECT id FROM records 
     WHERE user_id = ?
     ORDER BY created_at DESC LIMIT 1;
    `,
    [id]
  );
};

const createRecordData = async (recordId, typeData) => {
  await pool.query(
    `INSERT INTO record_data (record_id,record_type_id,data) 
     VALUES (?,?,?);
    `,
    [recordId, typeData.type_id, typeData.data]
  );
};

module.exports = {
  createRecord,
  getRecordIdByUserId,
  createRecordData,
};
