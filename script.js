document.getElementById('deleteForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const nombre = document.getElementById('nombre').value;
    const motivo = document.getElementById('motivo').value;
  
    console.log("Enviando datos a Supabase...");
    console.log({ email, nombre, motivo });
  
    setTimeout(() => {
      window.location.href = "confirmation.html";
    }, 1000);
  });
  