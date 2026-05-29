// Shared modal + card rendering logic. Requires recipes-data.js to be loaded first.

(function() {
	'use strict';

	function esc(s) {
		return String(s == null ? '' : s)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');
	}

	let carouselState = { index: 0, images: [] };

	function renderCarousel(images) {
		if (!images || !images.length) return '';
		return `
			<div class="recipe_carousel" id="recipeCarousel">
				<div class="carousel_header">
					<span class="carousel_label">Photos</span>
					<button class="carousel_toggle" id="carouselToggle" type="button" onclick="toggleCarousel()">Hide</button>
				</div>
				<div class="carousel_body">
					<button class="carousel_nav prev" type="button" onclick="carouselPrev()" aria-label="Previous">&lsaquo;</button>
					<img class="carousel_image" id="carouselImage" src="${esc(images[0])}" alt="">
					<button class="carousel_nav next" type="button" onclick="carouselNext()" aria-label="Next">&rsaquo;</button>
				</div>
				<div class="carousel_counter" id="carouselCounter">1 / ${images.length}</div>
			</div>`;
	}

	function updateCarousel() {
		const img = document.getElementById('carouselImage');
		const counter = document.getElementById('carouselCounter');
		if (img) img.src = carouselState.images[carouselState.index];
		if (counter) counter.textContent = (carouselState.index + 1) + ' / ' + carouselState.images.length;
	}

	window.carouselPrev = function() {
		const n = carouselState.images.length;
		if (!n) return;
		carouselState.index = (carouselState.index - 1 + n) % n;
		updateCarousel();
	};

	window.carouselNext = function() {
		const n = carouselState.images.length;
		if (!n) return;
		carouselState.index = (carouselState.index + 1) % n;
		updateCarousel();
	};

	window.toggleCarousel = function() {
		const wrap = document.getElementById('recipeCarousel');
		const btn = document.getElementById('carouselToggle');
		if (!wrap) return;
		const collapsed = wrap.classList.toggle('collapsed');
		if (btn) btn.textContent = collapsed ? 'Show' : 'Hide';
	};

	function renderSection(section) {
		const tag = section.type === 'ol' ? 'ol' : 'ul';
		const heading = section.heading ? `<h4>${esc(section.heading)}</h4>` : '';
		const items = section.items.map(i => `<li>${esc(i)}</li>`).join('');
		return `${heading}<${tag}>${items}</${tag}>`;
	}

	function renderRecipeBody(slug) {
		const recipe = RECIPES[slug];
		if (!recipe) return '';
		let html = '';
		html += renderCarousel(recipe.images);
		if (recipe.intro) {
			html += `<p>${esc(recipe.intro)}</p>`;
		}
		if (recipe.link) {
			html += `<p><a href="${esc(recipe.link.href)}" target="_blank" onclick="event.stopPropagation()">${esc(recipe.link.text)}</a></p>`;
		}
		if (recipe.scalable) {
			html += renderScalableMacaron();
		}
		if (recipe.sections) {
			html += recipe.sections.map(renderSection).join('');
		}
		return html;
	}

	function renderScalableMacaron() {
		return `
			<p><strong>Total Egg Whites (g): </strong>
			<input type="number" id="totalEggWhites" value="1000" min="1" class="scale_input" onchange="scaleRecipe()" oninput="scaleRecipe()" onclick="event.stopPropagation()">
			</p>
			<h4>Macaron Paste</h4>
			<ul>
				<li><span id="paste_ew">500</span>g (<span id="paste_ew_oz">17.6</span>oz) egg whites</li>
				<li><span id="powder_sugar">1250</span>g (<span id="powder_sugar_oz">44.1</span>oz) powder sugar</li>
				<li><span id="almond_flour">1300</span>g (<span id="almond_flour_oz">45.9</span>oz) almond flour</li>
			</ul>
			<h4>Italian Meringue</h4>
			<ul>
				<li><span id="meringue_ew">500</span>g (<span id="meringue_ew_oz">17.6</span>oz) egg whites</li>
				<li><span id="water">300</span>g (<span id="water_oz">10.6</span>oz) water</li>
				<li><span id="sugar_bowl">150</span>g (<span id="sugar_bowl_oz">5.3</span>oz) granulated sugar (in a bowl)</li>
				<li><span id="sugar_syrup">1150</span>g (<span id="sugar_syrup_oz">40.6</span>oz) granulated sugar (for the syrup)</li>
			</ul>`;
	}

	function renderCard(slug) {
		const recipe = RECIPES[slug];
		if (!recipe) return '';
		const tag = recipe.tag ? `<div class="card_tag">${esc(recipe.tag)}</div>` : '';
		return `
			<div class="recipe_card" data-recipe-id="${esc(slug)}" onclick="openRecipeById(this.dataset.recipeId)">
				<div class="card_color_bar ${esc(recipe.color)}"></div>
				<div class="card_header">
					<h3>${esc(recipe.title)}</h3>
					${tag}
				</div>
			</div>`;
	}

	function renderGrid(slugs) {
		return `<div class="card_grid">${slugs.map(renderCard).join('')}</div>`;
	}

	function renderBreadTab() {
		return renderGrid(RECIPE_ORDER.bread);
	}

	function renderDessertTab() {
		return renderGrid(RECIPE_ORDER.dessert);
	}

	function renderSavoryTab() {
		const subcats = RECIPE_ORDER.savory;
		let html = '';
		let first = true;
		for (const name of Object.keys(subcats)) {
			const cls = first ? 'savory_subcat_heading first' : 'savory_subcat_heading';
			html += `<h2 class="${cls}">${esc(name)}</h2>`;
			html += renderGrid(subcats[name]);
			first = false;
		}
		return html;
	}

	function ensureModal() {
		if (document.getElementById('recipeModal')) return;
		const modal = document.createElement('div');
		modal.className = 'modal_overlay';
		modal.id = 'recipeModal';
		modal.setAttribute('onclick', 'closeModal(event)');
		modal.innerHTML = `
			<div class="modal_content" onclick="event.stopPropagation()">
				<button class="modal_close" onclick="closeModal()">&times;</button>
				<div id="modal_body"></div>
			</div>`;
		document.body.appendChild(modal);
	}

	window.openRecipeById = function(id) {
		const recipe = RECIPES[id];
		if (!recipe) return;
		ensureModal();
		carouselState = {
			index: 0,
			images: (recipe.images || []).slice(),
		};
		const modalBody = document.getElementById('modal_body');
		const colorBar = `<div class="card_color_bar ${esc(recipe.color)}" style="margin:-40px -40px 25px -40px; border-radius:20px 20px 0 0; height:6px;"></div>`;
		const tag = recipe.tag ? `<div class="card_tag">${esc(recipe.tag)}</div>` : '';
		const header = `<h3>${esc(recipe.title)}</h3>${tag}`;
		modalBody.innerHTML = colorBar + header + renderRecipeBody(id);
		document.getElementById('recipeModal').classList.add('show');
		document.body.style.overflow = 'hidden';
		if (recipe.scalable && typeof scaleRecipe === 'function') scaleRecipe();
	};

	window.closeModal = function(event) {
		const modal = document.getElementById('recipeModal');
		if (!modal) return;
		if (event && event.target !== modal && event.type === 'click') return;
		modal.classList.remove('show');
		document.body.style.overflow = '';
	};

	window.scaleRecipe = function() {
		const input = document.getElementById('totalEggWhites');
		if (!input) return;
		const total = parseFloat(input.value);
		if (!total || total <= 0) return;
		const ratio = total / 200;
		const vals = {
			paste_ew: 100 * ratio,
			powder_sugar: 250 * ratio,
			almond_flour: 260 * ratio,
			meringue_ew: 100 * ratio,
			water: 60 * ratio,
			sugar_bowl: 30 * ratio,
			sugar_syrup: 230 * ratio,
		};
		for (const key in vals) {
			const g = Math.round(vals[key]);
			const oz = (vals[key] / 28.3495).toFixed(1);
			const gEl = document.getElementById(key);
			const ozEl = document.getElementById(key + '_oz');
			if (gEl) gEl.textContent = g;
			if (ozEl) ozEl.textContent = oz;
		}
	};

	window.showTab = function(tab, btn) {
		const tabs = document.querySelectorAll('.tab_content');
		const buttons = document.querySelectorAll('.tab_btn');
		for (let i = 0; i < tabs.length; i++) tabs[i].classList.remove('active_content');
		for (let i = 0; i < buttons.length; i++) buttons[i].classList.remove('active_tab');
		const el = document.getElementById('tab_' + tab);
		if (el) el.classList.add('active_content');
		if (btn) btn.classList.add('active_tab');
	};

	function init() {
		const bread = document.getElementById('tab_bread');
		if (bread) bread.innerHTML = renderBreadTab();
		const dessert = document.getElementById('tab_dessert');
		if (dessert) dessert.innerHTML = renderDessertTab();
		const savory = document.getElementById('tab_savory');
		if (savory) savory.innerHTML = renderSavoryTab();
		ensureModal();
	}

	document.addEventListener('keydown', function(e) {
		if (e.key === 'Escape') window.closeModal();
	});

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();