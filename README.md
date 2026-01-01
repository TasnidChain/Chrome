[new content]
# NurGuard Chrome Extension 🛡️

**Protect Your Light. Guard Your Focus.**

NurGuard is a faith-aligned digital protection Chrome extension designed to help users avoid harmful content, reduce distractions, and practice intentional digital discipline.

This repository contains the **core enforcement layer** of NurGuard: real website blocking using Chrome's Declarative Net Request API.

---

## ✨ What This Extension Does (MVP)

* Blocks access to harmful websites (pornographic, dating, gambling, extreme distraction)
* Redirects blocked requests to a calm interruption page
* Works locally (no tracking, no spying)
* No login required
* No data leaves the browser

This is **real enforcement**, not UI-only.

---

## 📁 File Structure

```
nurguard-extension/
├── manifest.json        # Chrome extension config
├── background.js        # Rule registration logic
├── rules.json           # Blocking rules (categories)
├── block.html           # Interruption / reflection page
├── block.css            # Styling for block page
├── icon.png             # Extension icon
```

---

## 🚀 How to Install (Developer Mode)

1. Open Chrome
2. Go to: `chrome://extensions`
3. Enable **Developer mode** (top right)
4. Click **Load unpacked**
5. Select the `nurguard-extension/` folder

The shield icon should now appear in your toolbar.

---

## 🔒 Blocking Categories (Current)

The following categories are enforced via `rules.json`:

### 1. Pornographic Content

* Adult video sites
* Explicit image hosts
* Keyword-based adult domains

### 2. Dating & Hookup Apps

* Swipe-based dating platforms
* Casual relationship sites

### 3. Gambling

* Online casinos
* Sports betting platforms

### 4. Extreme Distractions (Configurable)

* Short-form infinite scroll sites
* Clickbait-heavy platforms

> Categories are **expandable** and can be toggled in future app versions.

---

## 🧠 Interruption Philosophy

When a site is blocked, NurGuard does **not shame** the user.

Instead, the block page:

* Pauses the moment
* Encourages reflection
* Reminds the user of intention (niyyah)

This aligns with Islamic digital wellness principles.

---

## 🛑 Preventing Easy Disable (Important)

Chrome extensions **cannot fully prevent removal** by design.

However, NurGuard mitigates this by:

* Using DeclarativeNetRequest (harder to bypass)
* No in-page overrides
* No temporary allow buttons
* No whitelist in MVP

Future versions will include:

* Companion app enforcement
* Password-protected disable
* Accountability partner alerts

---

## 🧪 Development Notes

* Built using Manifest V3
* No background spying
* No analytics
* No cookies
* No remote config (yet)

This repo is intentionally **simple and auditable**.

---

## 🗺️ Roadmap (Not in MVP)

* Category toggles
* Focus windows enforcement
* Sync with NurGuard app
* Mobile protection
* Accountability features

---

## 🤲 Trust & Transparency

NurGuard exists to **serve**, not exploit.

This repository is public so users can verify:

* What is blocked
* How it is enforced
* What data is (not) collected

---

## License

MIT (subject to future update)

---

**Built with intention. Shipped with discipline.**
