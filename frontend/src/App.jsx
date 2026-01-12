function App() {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
        overflowY: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -3,
        }}
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.65)",
          zIndex: -2,
        }}
      />

      
      <div className="spider s1">
        <div className="thread" />
        <img src="/spider.png" alt="spider" />
      </div>

      <div className="spider s2">
        <div className="thread" />
        <img src="/spider.png" alt="spider" />
      </div>

      <div className="spider s3">
        <div className="thread" />
        <img src="/spider.png" alt="spider" />
      </div>

      <div className="spider s4">
        <div className="thread" />
        <img src="/spider.png" alt="spider" />
      </div>

      
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          alignItems: "flex-start",
          color: "#fff",
          padding: "40px",
          gap: "60px",
        }}
      >
        
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "40px",
          }}
        >
          <img src="/logo.png" alt="AceTest Logo" style={{ width: "260px" }} />
        </div>

        
        <div
          style={{
            width: "420px",
            marginTop: "260px",
            padding: "28px",
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(12px)",
            borderRadius: "20px",
            boxShadow: "0 0 40px rgba(0,0,0,0.8)",
            flexShrink: 0,
          }}
        >
          {[
            "AI-based performance analysis to identify strengths and weaknesses",
            "Personalized study schedules based on your academic level",
            "Adaptive planning for school, UG, and PG students",
            "Efficient studying by focusing on high-impact topics",
            "Consistent exam preparation with intelligent guidance",
          ].map((point, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "16px",
                fontSize: "1.15rem",
                lineHeight: "1.8",
              }}
            >
              <img src="/skull-bullet.png" className="bullet-icon" />
              <span style={{ marginLeft: "14px" }}>{point}</span>
            </div>
          ))}

          <button className="cta-btn">Let’s AceTest</button>
        </div>

        {/* RIGHT CONTENT */}
        <div style={{ maxWidth: "900px", marginTop: "200px" }}>
          <h1 className="hero-line">
            Forget the stress, beat the rest, and pass every quest with{" "}
            <span className="ace-glow">Ace</span>
            <span className="test-glow">Test</span>
          </h1>

          <p style={{ fontSize: "1.25rem", lineHeight: "1.85", opacity: 0.95 }}>
            AceTest is an AI-powered study planning platform built to help students
            take full control of their academic journey. Instead of following
            generic timetables, AceTest analyzes your subjects, previous exam
            performance, and current study habits to understand how you learn.
            Using this insight, it creates a personalized and adaptive study plan
            that focuses on improving weak areas while strengthening strong ones.
            Whether you are a school student, an undergraduate, or a postgraduate,
            AceTest helps you study smarter, stay consistent, and approach exams
            with confidence.
          </p>
        </div>
      </div>

      
      <style>{`
        body {
          overflow-x: hidden;
        }

        /* HERO */
        .hero-line {
          font-size: 3.6rem;
          font-weight: 800;
          margin-bottom: 1.8rem;
          margin-top: -40px;
          color: #fff;
          text-shadow: 0 0 20px rgba(255,255,255,0.8);
        }

        .ace-glow {
          color: #ff1e1e;
          text-shadow: 0 0 20px red;
        }

        .test-glow {
          color: #000;
          text-shadow: 0 0 20px black;
        }

        /* CTA */
        .cta-btn {
          margin-top: 30px;
          width: 100%;
          padding: 16px 0;
          font-size: 1.1rem;
          font-weight: bold;
          border: none;
          border-radius: 14px;
          color: #fff;
          cursor: pointer;
          animation: colorShift 3s infinite;
        }

        @keyframes colorShift {
          0% { background: #ff1e1e; }
          50% { background: #000; }
          100% { background: #ff1e1e; }
        }

        /* BULLET */
        .bullet-icon {
          width: 32px;
          height: 32px;
          margin-top: 6px;
          filter: drop-shadow(0 0 6px red);
          animation: skullPulse 2s infinite;
        }

        @keyframes skullPulse {
          50% { transform: scale(1.25); }
        }

        
        .spider {
          position: fixed;
          top: -140px;
          z-index: 10;
          pointer-events: none;
          animation: spiderDrop 4s ease-in-out infinite;
        }

        .spider img {
          width: 60px;
        }

        .thread {
          width: 2px;
          height: 120px;
          margin: 0 auto;
          background: linear-gradient(to bottom, #aaa, transparent);
        }

        .s1 { left: 15%; animation-delay: 0s; }
        .s2 { left: 35%; animation-delay: 0.8s; }
        .s3 { left: 55%; animation-delay: 1.6s; }
        .s4 { left: 75%; animation-delay: 2.4s; }

        @keyframes spiderDrop {
          0% { transform: translateY(0); }
          50% { transform: translateY(280px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default App;
