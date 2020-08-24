const { TestOpportunityBookable } = require('./TestOpportunityBookable');
const { createCriteria } = require('./criteriaUtils');

/**
 * @typedef {import('../types/Criteria').OfferConstraint} OfferConstraint
 */

/**
 * @type {OfferConstraint}
 */
function onlyFreeBookableOffers(offer) {
  return offer.price === 0;
}

/**
 * Implements https://openactive.io/test-interface#TestOpportunityBookableFree
 */
const TestOpportunityBookableFree = createCriteria(
  'TestOpportunityBookableFree',
  [],
  [
    [
      'Only free bookable Offers',
      onlyFreeBookableOffers,
    ],
  ],
  TestOpportunityBookable,
);

module.exports = {
  TestOpportunityBookableFree,
};
