const pool = require("./common");

const errorHandler = () => {
    const err = new Error('INVALID_DATA_INPUT');
    err.statusCode = 500; 
    throw err;
};

const userCheck = async (mobile_number) => {
    const [[user]] = await pool.query(` 
    SELECT * FROM users WHERE mobile_number = ?;`
    , [mobile_number])
    return user; 
  
}

const createUser = async (name, birthday, height, mobile_number) => {
    try{
        return await pool.query(`    
            INSERT INTO users (
                name,
                birthday,
                height,
                mobile_number
            ) VALUES (?, ?, ?, ?);`,
            [name, birthday, height, mobile_number]);
    } catch (err) {
        errorHandler();
    }
};

module.exports = {
    createUser,
    userCheck
}

