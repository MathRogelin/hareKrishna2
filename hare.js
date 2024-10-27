document.addEventListener("DOMContentLoaded", () => {
    const cabecalho = document.querySelector("header");

    const renderizacao = () => {
        if (window.innerWidth <= 1106) {
            cabecalho.innerHTML = `
                <a href="#home" id="link_principal"><img src="Css/Image/Iskconlogo.png" alt="" width="10px"></a>
                <input type="checkbox" id="checkboxBars" style="display: none;">
                <label for="checkboxBars" style="color: #fff;">
                    <i class="fa-solid fa-bars"></i>
                </label>
                <nav style="display: none; font-size:13px;">
                    <a href="#sObre">Sobre</a>
                    <a href="#eVentos">Eventos</a>
                    <a href="#loCalizacao">Localização</a>
                    <a href="#gAleria">Galeria</a>
                </nav>
            `;
            
            const burguer = document.querySelector("#checkboxBars");
            const navbar = document.querySelector("nav");
            const links = document.querySelectorAll("nav a")

            // Adiciona o evento de mudança ao checkbox
            burguer.addEventListener("change", () => {
                if (burguer.checked) {
                    navbar.style.display = "flex"
                    navbar.style.backgroundColor = "#9b1919"
                    navbar.style.padding = "20px"
                    navbar.style.position = "absolute"
                    navbar.style.top = "100px"
                    navbar.style.zIndex = "2"
                    navbar.style.borderRadius = "20px"
                    console.log("abriu nav");
                } else {
                    navbar.style.display = "none";
                    console.log("fecho nav");
                }
            })
            links.forEach(link =>{
                link.addEventListener("click", ()=>{
                    navbar.style.display = 'none';
                })
            })

            const gale = document.querySelectorAll(".galeria img")

            gale.forEach((foto,index) =>{
                foto.addEventListener("click", ()=>{
                    console.log(`Foto ${index + 1} clicada`)
                    window.open(`foto.html?img=${encodeURIComponent(foto.src)}`, "_blank")
                })
            })

        } else if (window.innerWidth > 1106) {
            cabecalho.innerHTML = `
                <a href="#home" id="link_principal"><img src="Css/Image/Iskconlogo.png" alt="" width="10px"></a>
                <nav>
                    <a href="#sObre">Sobre</a>
                    <a href="#eVentos">Eventos</a>
                    <a href="#loCalizacao">Localização</a>
                    <a href="#gAleria">Galeria</a>
                </nav>
            `;
        }
    }

    renderizacao();
    window.addEventListener("resize", renderizacao);
});
