import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  {
    first: 'Isaac',
    last: 'DeMello',
    address: '250 Aloha Ln.',
    telephone: '808-118-9999',
    email: 'idemello@hawaii.edu',
  },
  {
    first: 'Peyton',
    last: 'Manning',
    address: '1800 Football Dr',
    telephone: '102-956-1000',
    email: 'peyton@football.com',
  },
  { first: 'Barack',
    last: 'Obama',
    address: '251 Aloha ln',
    telephone: '808-101-9119',
    email: 'barack@imtheprez.com',
  },
  { first: 'Papa',
    last: 'John',
    address: '252 Aloha ln',
    telephone: '808-808-8080',
    email: 'papaj@ppj.com',
  },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
