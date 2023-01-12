const memberService = require('../services/memberService');

const getAllMembers = (req, res) => {
  try {
    const allMembers = memberService.getAllMembers();
    res.send({ status: 'OK', data: allMembers });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

module.exports = { getAllMembers };
