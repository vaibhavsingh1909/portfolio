import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'case-unlocked';

// SHA-256 of the case-study password — the password itself never ships in the
// bundle. To change it: printf %s "new-password" | shasum -a 256
const PASSWORD_HASH = 'a712d4865a6b485465463b5efd2ead01250837e2df2f5b94ab359a0b8dccf590';

export function isCaseUnlocked() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

async function sha256Hex(text) {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

async function tryUnlock(password) {
  if (!window.crypto?.subtle) return false;
  const ok = (await sha256Hex(password.trim())) === PASSWORD_HASH;
  if (ok) {
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* still unlocked for this render */
    }
  }
  return ok;
}

function LockForm({ onUnlock }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [checking, setChecking] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const submit = async (event) => {
    event.preventDefault();
    if (!password.trim() || checking) return;
    setChecking(true);
    const ok = await tryUnlock(password);
    setChecking(false);
    if (ok) {
      onUnlock();
    } else {
      setError('That password isn’t right — check the one shared in the resume.');
      inputRef.current?.select();
    }
  };

  return (
    <form className="case-lock-form" onSubmit={submit}>
      <label className="case-lock-label" htmlFor="case-lock-password">
        Password
      </label>
      <div className="case-lock-row">
        <input
          id="case-lock-password"
          ref={inputRef}
          type="password"
          value={password}
          autoComplete="off"
          onChange={(event) => {
            setPassword(event.target.value);
            setError('');
          }}
        />
        <button type="submit" disabled={checking}>
          {checking ? 'Checking…' : 'Unlock'}
        </button>
      </div>
      {error && (
        <p className="case-lock-error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}

// Modal shown when the locked work card's CTA is clicked on the home page.
export function CaseLockDialog({ open, onClose, onUnlock }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="case-lock-overlay" onClick={onClose}>
      <div
        className="case-lock-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-lock-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="case-lock-glyph" aria-hidden="true">🔒</div>
        <h3 id="case-lock-title">This case study is locked</h3>
        <p>
          It covers work at my current company and is under NDA. Please enter the password
          shared in my resume to continue.
        </p>
        <LockForm onUnlock={onUnlock} />
        <button type="button" className="case-lock-dismiss" onClick={onClose}>
          Not now
        </button>
      </div>
    </div>
  );
}

// Full-page gate for anyone hitting the case-study URL directly.
export function CaseLockScreen({ onUnlock }) {
  return (
    <div className="case-lock-page">
      <div className="case-lock-card">
        <div className="case-lock-glyph" aria-hidden="true">🔒</div>
        <h3>This case study is locked</h3>
        <p>
          It covers work at my current company and is under NDA. Please enter the password
          shared in my resume to continue.
        </p>
        <LockForm onUnlock={onUnlock} />
        <a className="case-lock-back" href="#/">← Back to all work</a>
      </div>
    </div>
  );
}
