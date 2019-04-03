// get router from express
const router = require('express').Router();

module.exports = (param) => {
  const { AHData } = param;
  router.get('/', async (req, res, next) => {
    // UNCOMMENT TO SET AUTH HEADER TO VIEW PAGE.
    //res.setHeader('ah-staff-auth', 'H9WE5R3G9708H532WT4H09785');
    const authToken = res.getHeader('ah-staff-auth');
    console.log(authToken)
    if (authToken == null || authToken != 'H9WE5R3G9708H532WT4H09785') {
      return res.render('contacts/error', {
        finance: false,
        models: false,
        home: false,
      });
    } else {
      if (authToken == 'H9WE5R3G9708H532WT4H09785') {
        const contactList = await AHData.getAllContacts();
        return res.render('contacts', {
          contactList,
          finance: false,
          models: false,
          home: false,
        });
      }
      
    }
  });

  return router;
}