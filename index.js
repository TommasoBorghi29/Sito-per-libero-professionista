document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".menu-laterale button");
    const contenuti = document.querySelectorAll(".area-contenuto > div");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const id = button.getAttribute("data-id");
  
        // Rimuove la classe "contenuto-attivo" da tutti i contenuti
        contenuti.forEach(contenuto => {
          contenuto.classList.remove("contenuto-attivo");
        });
  
        // Aggiunge la classe "contenuto-attivo" al contenuto selezionato
        document.getElementById(id).classList.add("contenuto-attivo");
  
        // Gestione della classe "attivo" per i bottoni del menu
        buttons.forEach(btn => btn.classList.remove("attivo"));
        button.classList.add("attivo");
      });
    });
  });
  