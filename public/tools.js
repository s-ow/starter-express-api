const fragment = new URLSearchParams(window.location.hash.slice(1));
const [accessToken, tokenType] = [
  fragment.get("access_token"),
  fragment.get("token_type"),
];


let secretsUser = `${tokenType} ${accessToken}`;
// Obtenir les informations de l'utilisateur
fetch("https://discord.com/api/users/@me", {
  headers: {
    authorization: `${tokenType} ${accessToken}`,
  },
})
  .then((result) => result.json())
  .then((userResponse) => {
    const { username, discriminator, avatar, id } = userResponse;

    if (username == undefined) {
      window.location.href = "/login";
    } else {
      console.log("connecté");
    }

    document.getElementById(
      "avatar"
    ).src = `https://cdn.discordapp.com/avatars/${id}/${avatar}.jpg`;

    document.getElementById("name").innerText = ` ${username}#${discriminator}`;

    // Obtenir la liste des serveurs de l'utilisateur
    fetch("https://discord.com/api/users/@me/guilds", {
      headers: {
        authorization: `${tokenType} ${accessToken}`,
      },
    })
      .then((guildsResponse) => guildsResponse.json())
      .then((guilds) => {
        // Vérifier si l'utilisateur est membre du serveur spécifique
        const serverIdToCheck = "1130980115535372449"; // Remplacez par l'ID du serveur que vous voulez vérifier
        const isMemberOfServer = guilds.some(
          (guild) => guild.id === serverIdToCheck
        );

        if (isMemberOfServer) {
          console.log("L'utilisateur est membre de SKY.");
        } else {
          console.log("L'utilisateur n'est pas membre de SKY.");
          window.location.href = "/login";
        }
      })
      .catch((error) => {
        console.error(
          "Erreur lors de l'obtention de la liste des serveurs :",
          error
        );
      });

    // ...
  })
  .catch((error) => {
    console.error(
      "Erreur lors de l'obtention des informations de l'utilisateur :",
      error
    );
    // Gérez les erreurs ici
  });















const submenuParents = document.querySelectorAll(".submenu-parent");

submenuParents.forEach((parent) => {
  parent.addEventListener("click", () => {
    submenuParents.forEach((item) => {
      if (item !== parent) {
        item.classList.remove("active");
      }
    });
    parent.classList.toggle("active");
  });
});

const closebut = document.querySelectorAll(".closemenu");

closebut.forEach((close) => {
  close.addEventListener("click", () => {
    closebut.forEach((item) => {
      if (item !== close) {
        item.classList.remove("active");
      }
    });
    close.classList.toggle("active");
  });
});

const menu = document.querySelector(".menu");
const toggleButton = document.getElementById("closemenu");
const footer = document.querySelector(".footer");
const main = document.querySelector(".main");

toggleButton.addEventListener("click", () => {
  if (menu.style.display === "block" || menu.style.display == "") {
    menu.style.display = "none";
    menu.style.position = "relative";
    footer.style.marginLeft = "0px";
    main.style.marginLeft = "0px";
    main.style.transition = "0.8s ease-in-out";
    footer.style.transition = "0.8s ease-in-out";
  } else {
    menu.style.display = "block";
    menu.style.position = "absolute";
    footer.style.marginLeft = "200px";
    main.style.marginLeft = "200px";
    main.style.transition = "0.1s ease-in-out";
    footer.style.transition = "0.1s ease-in-out";
  }
});
