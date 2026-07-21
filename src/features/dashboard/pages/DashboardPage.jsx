const navItems = ['Dashboard', 'Students', 'Teachers', 'Tests', 'Homework', 'Notice', 'Analytics', 'Settings'];

const DashboardPage = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Inter, sans-serif', background: '#f3f4f6', color: '#111827' }}>
      <aside style={{ width: 240, background: '#111827', color: '#fff', padding: '24px 16px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 32, fontSize: 20, fontWeight: 700 }}>Logo</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {navItems.map((item) => (
            <button
              key={item}
              style={{
                textAlign: 'left',
                width: '100%',
                padding: '12px 14px',
                borderRadius: 8,
                border: 'none',
                background: 'transparent',
                color: '#d1d5db',
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 500,
                transition: 'background 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = '#1f2937')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              {item}
            </button>
          ))}
        </div>
      </aside>

      <main style={{ flex: 1, padding: '24px 32px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 14, color: '#6b7280' }}>Navbar</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>
              A
            </div>
            <div style={{ fontSize: 14, color: '#111827', fontWeight: 600 }}>Avatar ▾</div>
          </div>
        </header>

        <section style={{ background: '#fff', borderRadius: 20, padding: '32px', minHeight: 'calc(100vh - 120px)', boxShadow: '0 10px 30px rgba(15,23,42,0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>Dashboard</div>
          </div>
          <div style={{ fontSize: 32, fontWeight: 800, color: '#111827', marginBottom: 8 }}>Welcome to EduPulse AI</div>
          <p style={{ fontSize: 16, color: '#4b5563', maxWidth: 640, lineHeight: 1.7 }}>
            Your student and classroom analytics hub. Use the sidebar to explore students, teachers, assignments, notices, analytics, and settings.
          </p>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
