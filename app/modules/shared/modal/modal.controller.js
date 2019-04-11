class ModalController {
  constructor($sce) {
    // localize variables
    this.$sce = $sce; // string character escape service from angular
  }

  $onChanges() { // Rather than on init, this runs whenever the data changes
      if (this.modalContent) { // this is just making sure modal content isn't empty
          this.trustedHTML = this.$sce.trustAsHtml(this.modalContent); // since it isn't, we wrap it as trusted HTML
          return;
      }

  }
}

ModalController.$inject = ['$sce'];

export default ModalController;