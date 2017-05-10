import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalButton = $('.modal__close');
        this.events();
    }

    events() {
        // clicking open modal button
        this.openModalButton.click(this.openModal.bind(this));

        // clicking X to close modal
        this.closeModalButton.click(this.closeModal.bind(this));

        // press any keyboard key to close
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    // keyCode 27 is for esc button
    keyPressHandler(e) {
        if (e.keyCode === 27) {
            this.closeModal();
        }
    }

    openModal() {
        this.modal.addClass('modal--is-visible');
        return false;

    }

    closeModal() {
        this.modal.removeClass('modal--is-visible');
    }
}

export default Modal;