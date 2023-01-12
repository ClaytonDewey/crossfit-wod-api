const { v4: uuid } = require('uuid');
const Member = require('../database/Member');

const getAllMembers = () => {
  try {
    const allMembers = Member.getAllMembers();
    return allMembers;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllMembers };
