function banerSidebar() {

    const currentDir = window.location.origin;

    return `	    <section>
                    <header class="major">
						<h2>Люди читають:</h2>
					</header>
					<div class="mini-posts">
						<article>
							<a href="${currentDir}/assets/articles/git/improving-git/improving-git.html" class="image"><img
									src="${currentDir}/assets/articles/git/improving-git/improving-git.png" alt="" /></a>
							<a href="./assets/articles/git/improving-git/improving-git.html">
								<h3>Покращуємо процес роботи з Git</h3>
							</a>
							<p>Розповідаємо як краще працювати з комітами, які секрети можна застосовувати.</p>
						</article>
						<article>
							<a href="${currentDir}/assets/articles/bootstrap/bootstrap-responsive/bootstrap-responsive.html"
								class="image"><img src="${currentDir}/assets/articles/bootstrap/bootstrap-responsive/1.png"
									alt="" /></a>
							<a href="./assets/articles/bootstrap/bootstrap-responsive/bootstrap-responsive.html">
								<h3>Використання Bootstrap для адаптивної верстки</h3>
							</a>
							<p>Заощаджує час на розробку, витрачайте час тільки на прописування потрібних класів.</p>
						</article>
						<!-- <article>
							<a href="./assets/articles/node/node-need/node-need.html" class="image"><img
									src="./assets/articles/node/node-need/node-need.png" alt="" /></a>
							<a href="./assets/articles/node/node-need/node-need.html">
								<h3>Коли застосовують Node.js?</h3>
							</a>
							<p>Web-додаток, побудований з Node.js, буде легким та продуктивним рішенням.</p>
						</article> -->
						<article>
							<a href="https://itvdn.com/ua/landing/free-for-ukraine?utm_source=web-developer_free_for_ukraine"
								target="_blank" class="image"><img src="${currentDir}/images/itvdn.png" alt="screen" /></a>
							<a href="https://itvdn.com/ua/landing/free-for-ukraine?utm_source=web-developer_free_for_ukraine"
								target="_blank">
								<h3>Вивчайте програмування безкоштовно</h3>
							</a>
							<p>Відкриваємо доступ до бази IT відео курсів з Python, FrontEnd, JavaScript, C# та C++,
								Java, QA, мобільній розробці на
								Android та iOS та інших.</p>
							<a href="https://itvdn.com/ua/landing/free-for-ukraine?utm_source=web-developer_free_for_ukraine"
								class="button big" target="_blank">Перейти</a>
						</article>
						<article>
							<a href="https://edu.cbsystematics.com/ua?utm_source=web-developer_banner"
								target="_blank" class="image"><img src="${currentDir}/images/cyberbionic.png" alt="screen" /></a>
							<a href="https://edu.cbsystematics.com/ua?utm_source=web-developer_banner"
								target="_blank">
								<h3>Додаткова знижка 10% за промокодом WEBDEV10</h3>
							</a>
							<p>Вивчай програмування у групі з ментором і асистентом - практичні завдання, фідбек, курсові проєкти, стажування та
							працевлаштування.</p>
							<a href="https://edu.cbsystematics.com/ua?utm_source=web-developer_banner"
								class="button big" target="_blank">Перейти</a>
						</article>
					</div>
                    </section>
`;
}

const bannerContainer = document.querySelector("#baner-sidebar");
bannerContainer.innerHTML = banerSidebar();