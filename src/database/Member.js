const DB = require('./db.json');

const getAllMembers = () => {
  try {
    return DB.members;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

module.exports = { getAllMembers };
