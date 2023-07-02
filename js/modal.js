(() => {
    const refs = {
      openModalBtn: document.querySelector(".buttonsoluciones"),
      closeModalBtn: document.querySelector(".modal_close"),
      modal: document.querySelector(".modal"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("modal--show");
    }
  })();