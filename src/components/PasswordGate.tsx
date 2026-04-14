import { useState, useEffect } from 'react';

export default function PasswordGate({ children }: { children: any }) {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);

  // 🔑 check bij laden of user al unlocked is
  useEffect(() => {
    const unlocked = localStorage.getItem('portfolio_unlocked');
    if (unlocked === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === 'greenlight') {
      setIsUnlocked(true);

      // 🔑 opslaan
      localStorage.setItem('portfolio_unlocked', 'true');
    } else {
      setError(true);
    }
  };

  if (isUnlocked) return <>{children}</>;

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 bg-[#befc28]/10 rounded-full flex items-center justify-center mb-8 border border-[#befc28]/20">
        <span className="text-[#befc28] text-2xl">🔒</span>
      </div>

      <h2 className="text-3xl font-bold mb-2 tracking-tight">
        Geautoriseerde Toegang
      </h2>

      <p className="text-white/40 mb-8 max-w-xs">
        Voer het wachtwoord in om de beveiligde case-studies te bekijken.
      </p>

      <form onSubmit={handleCheck} className="w-full max-w-sm space-y-4">
        <input
          type="password"
          placeholder="Wachtwoord"
          className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-[#befc28] outline-none transition-all text-center"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-[#befc28] text-black font-bold p-4 rounded-2xl hover:shadow-[0_0_30px_rgba(190,252,40,0.3)] transition-all">
          Toegang Ontgrendelen
        </button>

        {error && (
          <p className="text-red-400 text-sm">
            Toegang geweigerd. Probeer het opnieuw.
          </p>
        )}
      </form>
    </div>
  );
}