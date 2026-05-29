// Global search: injects a search bar into #header on every page, builds a
// combined index of recipes + gallery sections, and routes clicks accordingly.
// Requires: gallery-index.js. Optional but recommended: recipes-data.js,
// recipes-modal.js (so recipe results can open a modal on any page).

(function() {
	'use strict';

	function esc(s) {
		return String(s == null ? '' : s)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');
	}

	function buildIndex() {
		const entries = [];

		if (typeof RECIPES !== 'undefined') {
			for (const slug of Object.keys(RECIPES)) {
				const r = RECIPES[slug];
				const haystack = [
					r.title,
					r.tag || '',
					r.intro || '',
					(r.sections || []).map(s =>
						(s.heading || '') + ' ' + (s.items || []).join(' ')
					).join(' '),
				].join(' ').toLowerCase();
				entries.push({
					kind: 'recipe',
					slug,
					name: r.title,
					tag: r.tag,
					badge: 'Recipe',
					badgeClass: 'badge_recipe',
					haystack,
				});
			}
		}

		if (typeof GALLERY_SECTIONS !== 'undefined') {
			for (const s of GALLERY_SECTIONS) {
				entries.push({
					kind: 'gallery',
					name: s.name,
					page: s.page,
					anchor: s.anchor,
					badge: s.category,
					badgeClass: 'badge_' + s.category.toLowerCase(),
					haystack: s.name.toLowerCase(),
				});
			}
		}

		return entries;
	}

	function rankEntry(entry, query) {
		const name = entry.name.toLowerCase();
		if (name === query) return 0;
		if (name.startsWith(query)) return 1;
		if (name.includes(query)) return 2;
		if (entry.haystack.includes(query)) return 3;
		return -1;
	}

	function search(entries, query) {
		const q = query.trim().toLowerCase();
		if (!q) return [];
		const scored = [];
		for (const e of entries) {
			const r = rankEntry(e, q);
			if (r >= 0) scored.push({ entry: e, rank: r });
		}
		scored.sort((a, b) => a.rank - b.rank || a.entry.name.localeCompare(b.entry.name));
		return scored.slice(0, 12).map(s => s.entry);
	}

	function renderResults(results) {
		if (!results.length) {
			return '<div class="search_no_results">No matches.</div>';
		}
		return results.map((r, i) => `
			<div class="search_result_item" data-index="${i}">
				<span class="search_result_name">${esc(r.name)}${r.tag ? ' <span style="color:#888;font-weight:normal">— ' + esc(r.tag) + '</span>' : ''}</span>
				<span class="search_result_badge ${esc(r.badgeClass)}">${esc(r.badge)}</span>
			</div>`).join('');
	}

	function injectSearchBar() {
		const header = document.getElementById('header');
		if (!header) return null;
		const container = document.createElement('div');
		container.className = 'search_container';
		container.innerHTML = `
			<input type="search" class="search_input" id="globalSearchInput" placeholder="Search recipes & galleries…" autocomplete="off">
			<div class="search_results" id="globalSearchResults"></div>`;
		header.appendChild(container);
		return container;
	}

	function navigateToEntry(entry) {
		if (entry.kind === 'recipe') {
			if (typeof window.openRecipeById === 'function') {
				window.openRecipeById(entry.slug);
			} else {
				window.location.href = 'recipes.html';
			}
			return;
		}
		if (entry.kind === 'gallery') {
			const here = window.location.pathname.split('/').pop();
			const target = entry.anchor ? entry.page + '#' + entry.anchor : entry.page;
			if (here === entry.page && entry.anchor) {
				const el = document.getElementById(entry.anchor);
				if (el) {
					window.location.hash = entry.anchor;
					el.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			} else {
				window.location.href = target;
			}
		}
	}

	function init() {
		const container = injectSearchBar();
		if (!container) return;
		const input = document.getElementById('globalSearchInput');
		const resultsEl = document.getElementById('globalSearchResults');
		const index = buildIndex();
		let currentResults = [];
		let activeIdx = -1;

		function update() {
			currentResults = search(index, input.value);
			activeIdx = currentResults.length ? 0 : -1;
			resultsEl.innerHTML = renderResults(currentResults);
			resultsEl.classList.toggle('show', input.value.trim().length > 0);
			highlightActive();
		}

		function highlightActive() {
			const items = resultsEl.querySelectorAll('.search_result_item');
			items.forEach((el, i) => {
				el.classList.toggle('active', i === activeIdx);
			});
		}

		function close() {
			resultsEl.classList.remove('show');
		}

		input.addEventListener('input', update);
		input.addEventListener('focus', function() {
			if (input.value.trim()) {
				resultsEl.classList.add('show');
			}
		});
		input.addEventListener('keydown', function(e) {
			if (e.key === 'ArrowDown') {
				e.preventDefault();
				if (currentResults.length) {
					activeIdx = (activeIdx + 1) % currentResults.length;
					highlightActive();
				}
			} else if (e.key === 'ArrowUp') {
				e.preventDefault();
				if (currentResults.length) {
					activeIdx = (activeIdx - 1 + currentResults.length) % currentResults.length;
					highlightActive();
				}
			} else if (e.key === 'Enter') {
				e.preventDefault();
				if (activeIdx >= 0 && currentResults[activeIdx]) {
					navigateToEntry(currentResults[activeIdx]);
					close();
				}
			} else if (e.key === 'Escape') {
				close();
				input.blur();
			}
		});

		resultsEl.addEventListener('click', function(e) {
			const item = e.target.closest('.search_result_item');
			if (!item) return;
			const idx = parseInt(item.dataset.index, 10);
			if (currentResults[idx]) {
				navigateToEntry(currentResults[idx]);
				close();
			}
		});

		document.addEventListener('click', function(e) {
			if (!container.contains(e.target)) close();
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();