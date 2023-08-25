function componentHeader() {
  const currentDir = window.location.origin;

  return `  				<header id="header">
					<a href="https://www.instagram.com/dmitry_beresten" class="logo" target="_blank"><strong>Розробив</strong> Дмитро Берестень
						</a>
					<ul class="icons">
						<li><a href="https://t.me/web_developer_in_ua" class="icon brands fa-telegram" target="_blank"><span
									class="label">Telegram</span></a></li>
						<li><a href="https://www.facebook.com/berestendmitry" class="icon brands fa-facebook-f" target="_blank"><span
									class="label">Facebook</span></a></li>
						<li><a href="https://www.youtube.com/channel/UCcJ-4Dm1BnjFPxCWxpVzFyg"
								class="icon brands fa-youtube" target="_blank"><span class="label">YouTube</span></a></li>
						<li><a href="https://www.instagram.com/dmitry_beresten" class="icon brands fa-instagram" target="_blank"><span
									class="label">Instagram</span></a></li>
						<li><a href="https://lnkd.in/ehHgMDV9" class="icon brands fa-linkedin" target="_blank"><span
									class="label">LinkedIn</span></a></li>
					</ul>
				</header>

`;
}

const headerContainer = document.querySelector("#component-header");
headerContainer.innerHTML = componentHeader();
