function componentHeader() {
  const currentDir = window.location.origin;

  return `  				<header id="header">
					<a href="https://www.instagram.com/dmitry_beresten" class="logo"><strong>Розробив</strong> Дмитро
						Берестень</a>
					<ul class="icons">
						<li><a href="https://t.me/dmitryberesten" class="icon brands fa-telegram"><span
									class="label">Telegram</span></a></li>
						<li><a href="https://www.facebook.com/berestendmitry" class="icon brands fa-facebook-f"><span
									class="label">Facebook</span></a></li>
						<li><a href="https://www.youtube.com/channel/UCcJ-4Dm1BnjFPxCWxpVzFyg"
								class="icon brands fa-youtube"><span class="label">YouTube</span></a></li>
						<li><a href="https://www.instagram.com/dmitry_beresten" class="icon brands fa-instagram"><span
									class="label">Instagram</span></a></li>
						<li><a href="https://www.linkedin.com/in/dmytrii-beresten" class="icon brands fa-linkedin"><span
									class="label">LinkedIn</span></a></li>
					</ul>
				</header>

`;
}

const headerContainer = document.querySelector("#component-header");
headerContainer.innerHTML = componentHeader();
