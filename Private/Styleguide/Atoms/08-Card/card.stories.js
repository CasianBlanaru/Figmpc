import cardSolid from './card-solid.html';
import cardContact from './card-contact.html';
import cardServices from './card-services.html';
import cardServicesNew from './card-services-new.html';

export default {
  title: 'Atoms/Card',
};

export const CardSolid = () => cardSolid;
export const CardContact = () => cardContact;

export const CardServices = () => `
  <div class="p-8 bg-gray-400">
    ${cardServices}
  </div>
`;

export const CardServicesNew = () => cardServicesNew;