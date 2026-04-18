/* ═══════════════════════════════════════════════════════════════
   doubts.js  –  Swarajya Vidya · "Have a Doubt?" Module
   Fully self-contained IIFE; persists to localStorage.
   Features:
     • Live word counter + char counter + estimated read time
     • Writing-quality progress bar (completeness indicator)
     • Tag picker (multi-select toggleable chips)
     • Form validation → enabled submit only when valid
     • LocalStorage persistence for all doubts + upvotes
     • Community wall: search, sort (newest/popular/oldest),
       category filter, load-more (pagination)
     • Upvote (one per session stored in localStorage)
     • Copy-to-clipboard for sharing individual doubts
     • Live stats bar (total, answered*, today)
     • "New" badge for doubts < 5 min old
   * "answered" is set for doubts with ≥ 3 upvotes (community score)
   ═══════════════════════════════════════════════════════════════ */

(function () {
    'use strict';

    /* ─── Constants ──────────────────────────────────────────── */
    const STORAGE_KEY  = 'sv_doubts_v3';
    const UPVOTES_KEY  = 'sv_doubt_upvotes_v3';
    const PAGE_SIZE    = 6;
    const MAX_WORDS    = 120;   // soft guide; chars capped at 600 by HTML
    const WARN_CHARS   = 500;
    const AVG_WPM      = 200;   // reading speed

    /* ─── State ───────────────────────────────────────────────── */
    let doubts        = [];
    let upvotedIds    = new Set();
    let selectedTags  = new Set();
    let visibleCount  = PAGE_SIZE;
    let currentSearch = '';
    let currentSort   = 'newest';
    let currentCat    = 'all';

    /* ─── DOM Refs ────────────────────────────────────────────── */
    const $  = id => document.getElementById(id);
    const qs = sel => document.querySelector(sel);

    const nameInput    = $('doubt-name');
    const catSelect    = $('doubt-category');
    const textArea     = $('doubt-text');
    const wordCount    = $('doubt-word-count');
    const charCount    = $('doubt-char-count');
    const readTime     = $('doubt-read-time');
    const qualityFill  = $('doubt-quality-fill');
    const qualityLabel = $('doubt-quality-label');
    const tagPicker    = $('doubt-tag-picker');
    const tagPreview   = $('doubt-selected-tags-preview');
    const submitBtn    = $('doubt-submit-btn');
    const btnText      = $('doubt-btn-text');
    const btnSpinner   = $('doubt-btn-spinner');
    const toast        = $('doubt-toast');
    const wall         = $('doubt-wall');
    const emptyMsg     = $('doubt-empty');
    const searchInput  = $('doubt-search');
    const sortSelect   = $('doubt-sort');
    const filterCat    = $('doubt-filter-cat');
    const loadMore     = $('doubt-load-more');
    const statTotal    = $('stat-total');
    const statAnswered = $('stat-answered');
    const statToday    = $('stat-today');

    /* ─── Utils ───────────────────────────────────────────────── */
    function countWords(str) {
        return str.trim().split(/\s+/).filter(Boolean).length;
    }

    function timeAgo(ts) {
        const diff = (Date.now() - ts) / 1000;
        if (diff < 60)    return 'just now';
        if (diff < 3600)  return `${Math.floor(diff / 60)}m ago`;
        if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
        return `${Math.floor(diff / 86400)}d ago`;
    }

    function isNew(ts) {
        return (Date.now() - ts) < 5 * 60 * 1000; // 5 minutes
    }

    function isToday(ts) {
        const d = new Date(ts);
        const n = new Date();
        return d.getDate() === n.getDate() &&
               d.getMonth() === n.getMonth() &&
               d.getFullYear() === n.getFullYear();
    }

    function genId() {
        return 'dbt_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
    }

    /* ─── Persistence ─────────────────────────────────────────── */
    function load() {
        try {
            doubts     = JSON.parse(localStorage.getItem(STORAGE_KEY))  || [];
            upvotedIds = new Set(JSON.parse(localStorage.getItem(UPVOTES_KEY)) || []);
        } catch (_) {
            doubts = []; upvotedIds = new Set();
        }
    }

    function save() {
        localStorage.setItem(STORAGE_KEY,  JSON.stringify(doubts));
        localStorage.setItem(UPVOTES_KEY,  JSON.stringify([...upvotedIds]));
    }

    /* ─── Word / Char Counter & Quality Meter ─────────────────── */
    function updateCounters() {
        const raw   = textArea.value;
        const chars = raw.length;
        const words = countWords(raw);
        const secs  = Math.ceil((words / AVG_WPM) * 60);

        // Word count chip
        wordCount.textContent = `${words} word${words !== 1 ? 's' : ''}`;
        wordCount.classList.toggle('warn',  words > MAX_WORDS * 0.75 && words <= MAX_WORDS);
        wordCount.classList.toggle('limit', words > MAX_WORDS);

        // Char count chip
        charCount.textContent = `${chars} / 600 chars`;
        charCount.classList.remove('warn', 'limit');
        if (chars >= 600)        charCount.classList.add('limit');
        else if (chars >= WARN_CHARS) charCount.classList.add('warn');

        // Read-time chip (show only if ≥ 20 words)
        if (words >= 20) {
            readTime.classList.remove('hidden');
            readTime.textContent = secs < 60
                ? `~${secs} sec read`
                : `~${Math.ceil(secs / 60)} min read`;
        } else {
            readTime.classList.add('hidden');
        }

        // Quality bar
        const nameOk  = nameInput.value.trim().length >= 2;
        const catOk   = catSelect.value !== '';
        const textOk  = raw.trim().length >= 20;
        const goodLen = words >= 10;

        let score = 0;
        if (nameOk)  score += 25;
        if (catOk)   score += 25;
        if (textOk)  score += 25;
        if (goodLen) score += 25;
        if (selectedTags.size > 0) score = Math.min(100, score + 10);

        qualityFill.style.width  = score + '%';
        qualityFill.style.background = score < 40
            ? '#e74c3c'
            : score < 70
                ? 'var(--saffron)'
                : 'var(--india-green)';

        if (score === 0)       qualityLabel.textContent = 'Start typing…';
        else if (score < 40)   qualityLabel.textContent = 'Getting started';
        else if (score < 70)   qualityLabel.textContent = 'Looking good!';
        else if (score < 100)  qualityLabel.textContent = 'Almost perfect';
        else                   qualityLabel.textContent = '✓ Ready to post';

        qualityLabel.style.color = score >= 100
            ? 'var(--india-green)'
            : score >= 70
                ? 'var(--saffron)'
                : 'var(--leather)';

        validateForm();
    }

    function validateForm() {
        const ok = nameInput.value.trim().length >= 2
            && catSelect.value !== ''
            && textArea.value.trim().length >= 20;
        submitBtn.disabled = !ok;
    }

    /* ─── Tag Picker ──────────────────────────────────────────── */
    function initTagPicker() {
        tagPicker.querySelectorAll('.doubt-tag-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tag = btn.dataset.tag;
                if (selectedTags.has(tag)) {
                    selectedTags.delete(tag);
                    btn.classList.remove('selected');
                } else {
                    selectedTags.add(tag);
                    btn.classList.add('selected');
                }
                tagPreview.textContent = selectedTags.size
                    ? [...selectedTags].join(' · ')
                    : 'No tags selected.';
                updateCounters();
            });
        });
    }

    /* ─── Submission ──────────────────────────────────────────── */
    function handleSubmit() {
        const name  = nameInput.value.trim();
        const cat   = catSelect.value;
        const text  = textArea.value.trim();
        if (!name || !cat || text.length < 20) return;

        submitBtn.disabled  = true;
        btnText.classList.add('hidden');
        btnSpinner.classList.remove('hidden');

        // Simulate brief async delay
        setTimeout(() => {
            const doubt = {
                id:        genId(),
                name,
                category:  cat,
                text,
                tags:      [...selectedTags],
                upvotes:   0,
                timestamp: Date.now()
            };

            doubts.unshift(doubt);
            save();

            // Reset form
            nameInput.value  = '';
            catSelect.value  = '';
            textArea.value   = '';
            selectedTags.clear();
            tagPicker.querySelectorAll('.doubt-tag-btn').forEach(b => b.classList.remove('selected'));
            tagPreview.textContent = 'No tags selected.';
            updateCounters();

            btnText.classList.remove('hidden');
            btnSpinner.classList.add('hidden');
            submitBtn.disabled = true;

            showToast('✅ Your doubt has been posted to the community wall!', 'success');
            visibleCount = PAGE_SIZE;
            renderWall();
            updateStats();
        }, 600);
    }

    /* ─── Toast ───────────────────────────────────────────────── */
    function showToast(msg, type = 'success') {
        toast.textContent = msg;
        toast.classList.remove('hidden', 'bg-green-100', 'bg-red-100', 'text-green-800', 'text-red-800');
        if (type === 'success') {
            toast.style.background = 'rgba(19, 136, 8, 0.1)';
            toast.style.color = 'var(--india-green)';
            toast.style.border = '1px solid rgba(19, 136, 8, 0.25)';
        } else {
            toast.style.background = 'rgba(231, 76, 60, 0.1)';
            toast.style.color = '#c0392b';
            toast.style.border = '1px solid rgba(231, 76, 60, 0.25)';
        }
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 4000);
    }

    /* ─── Stats Bar ───────────────────────────────────────────── */
    function updateStats() {
        const total    = doubts.length;
        const answered = doubts.filter(d => d.upvotes >= 3).length;
        const today    = doubts.filter(d => isToday(d.timestamp)).length;
        statTotal.textContent    = `📜 ${total} Doubt${total !== 1 ? 's' : ''}`;
        statAnswered.textContent = `✅ ${answered} Answered`;
        statToday.textContent    = `🕐 ${today} Today`;
    }

    /* ─── Wall Rendering ──────────────────────────────────────── */
    function getFiltered() {
        let list = [...doubts];

        // Category filter
        if (currentCat !== 'all') {
            list = list.filter(d => d.category === currentCat);
        }

        // Search filter
        if (currentSearch) {
            const q = currentSearch.toLowerCase();
            list = list.filter(d =>
                d.text.toLowerCase().includes(q) ||
                d.name.toLowerCase().includes(q) ||
                d.category.toLowerCase().includes(q) ||
                (d.tags || []).some(t => t.toLowerCase().includes(q))
            );
        }

        // Sort
        if (currentSort === 'newest')  list.sort((a, b) => b.timestamp - a.timestamp);
        if (currentSort === 'oldest')  list.sort((a, b) => a.timestamp - b.timestamp);
        if (currentSort === 'popular') list.sort((a, b) => b.upvotes - a.upvotes);

        return list;
    }

    function renderWall() {
        const filtered = getFiltered();
        const slice    = filtered.slice(0, visibleCount);

        if (filtered.length === 0) {
            wall.innerHTML = '';
            if (doubts.length === 0) {
                wall.innerHTML = `<div class="text-center py-16 italic text-leather/30 text-lg">
                    Be the first to post a doubt… every great republic starts with a question.
                </div>`;
            } else {
                emptyMsg.classList.remove('hidden');
            }
            loadMore.classList.add('hidden');
            return;
        }

        emptyMsg.classList.add('hidden');
        wall.innerHTML = slice.map(d => buildCard(d)).join('');

        // Load more
        if (filtered.length > visibleCount) {
            loadMore.classList.remove('hidden');
            loadMore.textContent = `Load More Doubts (${filtered.length - visibleCount} remaining) ↓`;
        } else {
            loadMore.classList.add('hidden');
        }

        // Attach card event listeners
        wall.querySelectorAll('.doubt-upvote-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                toggleUpvote(id, btn);
            });
        });

        wall.querySelectorAll('.doubt-copy-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id   = btn.dataset.id;
                const doubt = doubts.find(d => d.id === id);
                if (!doubt) return;
                const text = `[${doubt.category}] ${doubt.name} asks: "${doubt.text}" — Swarajya Vidya`;
                navigator.clipboard.writeText(text).then(() => {
                    btn.textContent = '✅ Copied!';
                    setTimeout(() => { btn.textContent = '🔗 Copy'; }, 2000);
                }).catch(() => {
                    btn.textContent = 'Copy failed';
                });
            });
        });
    }

    function buildCard(d) {
        const upvoted  = upvotedIds.has(d.id);
        const answered = d.upvotes >= 3;
        const newPost  = isNew(d.timestamp);
        const tagsHtml = (d.tags || []).map(t =>
            `<span class="doubt-tag-pill">${t}</span>`
        ).join('');

        const badgesHtml = [
            newPost  ? `<span class="doubt-new-badge">New</span>` : '',
            answered ? `<span class="doubt-answered-badge">✅ Answered</span>` : ''
        ].join('');

        return `
        <div class="doubt-card" id="card-${d.id}">
            <div class="doubt-card-header">
                <div class="doubt-card-meta">
                    <span class="doubt-card-name">${escHtml(d.name)}</span>
                    <span class="doubt-cat-badge">${escHtml(d.category)}</span>
                    <span class="doubt-card-time">${timeAgo(d.timestamp)}</span>
                    ${badgesHtml}
                </div>
            </div>
            <p class="doubt-card-body">${escHtml(d.text)}</p>
            ${tagsHtml ? `<div class="doubt-card-tags">${tagsHtml}</div>` : ''}
            <div class="doubt-card-footer">
                <button class="doubt-upvote-btn ${upvoted ? 'upvoted' : ''}" data-id="${d.id}" aria-label="Upvote">
                    ${upvoted ? '▲' : '△'} ${d.upvotes} Upvote${d.upvotes !== 1 ? 's' : ''}
                </button>
                <button class="doubt-copy-btn" data-id="${d.id}" aria-label="Copy doubt">🔗 Copy</button>
            </div>
        </div>`;
    }

    function escHtml(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    /* ─── Upvoting ────────────────────────────────────────────── */
    function toggleUpvote(id, btn) {
        const doubt = doubts.find(d => d.id === id);
        if (!doubt) return;

        if (upvotedIds.has(id)) {
            upvotedIds.delete(id);
            doubt.upvotes = Math.max(0, doubt.upvotes - 1);
            btn.classList.remove('upvoted');
            btn.innerHTML = `△ ${doubt.upvotes} Upvote${doubt.upvotes !== 1 ? 's' : ''}`;
        } else {
            upvotedIds.add(id);
            doubt.upvotes++;
            btn.classList.add('upvoted');
            btn.innerHTML = `▲ ${doubt.upvotes} Upvote${doubt.upvotes !== 1 ? 's' : ''}`;
        }

        save();
        updateStats();

        // Re-render only if sorted by popular to reorder correctly
        if (currentSort === 'popular') renderWall();
    }

    /* ─── Event Wiring ────────────────────────────────────────── */
    function initEvents() {
        // Live counters
        textArea.addEventListener('input', updateCounters);
        nameInput.addEventListener('input', updateCounters);
        catSelect.addEventListener('change', updateCounters);

        // Submit
        submitBtn.addEventListener('click', handleSubmit);

        // Enter in name field
        nameInput.addEventListener('keydown', e => {
            if (e.key === 'Enter') { e.preventDefault(); textArea.focus(); }
        });

        // Search
        searchInput.addEventListener('input', () => {
            currentSearch = searchInput.value.trim();
            visibleCount  = PAGE_SIZE;
            renderWall();
        });

        // Sort
        sortSelect.addEventListener('change', () => {
            currentSort  = sortSelect.value;
            visibleCount = PAGE_SIZE;
            renderWall();
        });

        // Category filter
        filterCat.addEventListener('change', () => {
            currentCat   = filterCat.value;
            visibleCount = PAGE_SIZE;
            renderWall();
        });

        // Load more
        loadMore.addEventListener('click', () => {
            visibleCount += PAGE_SIZE;
            renderWall();
        });
    }

    /* ─── Bootstrap ───────────────────────────────────────────── */
    function init() {
        load();
        initTagPicker();
        initEvents();
        updateCounters();
        renderWall();
        updateStats();

        // Auto-refresh timestamps every 60s
        setInterval(() => renderWall(), 60_000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
