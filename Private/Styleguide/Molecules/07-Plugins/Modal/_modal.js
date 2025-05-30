//
// Modal
// @https://getbootstrap.com/docs/5.2/getting-started/javascript/#using-bootstrap-as-a-module
//

import { Modal } from '../../../../../../node_modules/bootstrap/dist/js/bootstrap.esm';

function modalInit() {
  Array.from(document.querySelectorAll('.modal')).forEach(node => new Modal(node));
}

export default {};

export const ModalInit = modalInit;
