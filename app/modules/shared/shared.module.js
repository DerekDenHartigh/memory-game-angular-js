import ListComponent from './list/list.component.js';
import ModalComponent from './modal/modal.component.js';

angular.module('shared', [])

.component('list', new ListComponent())
.component('modal', new ModalComponent());