const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

const getAllMembers = () => {
  try {
    return DB.members;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneMember = (memberId) => {
  try {
    const member = DB.members.filter((member) => member.id === memberId);
    if (!member) {
      throw {
        status: 400,
        message: `Can't find member with the id '${memberId}'`,
      };
    }
    return member;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewMember = (newMember) => {
  try {
    const isAlreadyAdded =
      DB.members.findIndex((member) => (member.name = newMember.name)) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Member with the name '${newMember.name}' already exists`,
      };
    }
    DB.members.push(newMember);
    saveToDatabase(DB);
    return newMember;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = { getAllMembers, getOneMember, createNewMember };
