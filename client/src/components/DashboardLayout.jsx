import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

/**
 * Shared shell for every role dashboard (Student / Faculty / Admin).
 * Pass a `role` config object so each dashboard keeps its own accent
 * color, nav items, and identity while sharing one visual language.
 *
 * Props:
 *  - role: { label, initials, accent (css var name), navItems: [{key,label,icon}] }
 *  - activeKey, onNavClick
 *  - user: { name, subtitle }
 *  - children
 */
function DashboardLayout({ role, activeKey, onNavClick, user, children }) {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`dash-shell accent-${role.accent}`}>
      <aside className={`dash-sidebar ${collapsed ? "collapsed" : ""}`}>
        <div className="dash-brand">
          <span className="dash-brand-mark">SC</span>
          {!collapsed && <span className="dash-brand-name">Smart Campus</span>}
        </div>

        <div className="dash-role-badge">
          <span className="dash-role-initials">{role.initials}</span>
          {!collapsed && (
            <div>
              <p className="dash-role-label">{role.label}</p>
              <p className="dash-role-sub">Portal</p>
            </div>
          )}
        </div>

        <nav className="dash-nav">
          {role.navItems.map((item) => (
            <button
              key={item.key}
              className={`dash-nav-item ${activeKey === item.key ? "active" : ""}`}
              onClick={() => onNavClick && onNavClick(item.key)}
              title={item.label}
            >
              <span className="dash-nav-icon">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <button className="dash-collapse-btn" onClick={() => setCollapsed((c) => !c)}>
          {collapsed ? "»" : "« Collapse"}
        </button>

        <button
          className="dash-logout-btn"
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/");
          }}
        >
          ⏻ {!collapsed && "Sign Out"}
        </button>
      </aside>

      <div className="dash-main">
        <header className="dash-topbar">
          <div className="dash-search">
            <span>🔍</span>
            <input type="text" placeholder="Search across Smart Campus..." />
          </div>
          <div className="dash-topbar-actions">
            <button className="dash-icon-btn" title="Notifications">🔔</button>
            <div className="dash-user">
              <div className="dash-avatar">{user?.initials || "U"}</div>
              <div className="dash-user-info">
                <p className="dash-user-name">{user?.name}</p>
                <p className="dash-user-sub">{user?.subtitle}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="dash-content">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;