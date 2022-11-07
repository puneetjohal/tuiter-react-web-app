import React from "react";

const NavigationSidebar = (
  {
    active = 'explore'
  }
) => {
  return (
    <div className="list-group">
      <a className="list-group-item">Tuiter</a>
      <a href="/tuiter" className={
        `list-group-item ${active === 'home' ? 'active' : ''}`
      }>
        <i className="bi bi-house-fill me-2"></i>
        Home
      </a>
      <a href="/tuiter/explore" className={
        `list-group-item ${active === 'explore' ? 'active' : ''}`
      }>
        <i className="bi bi-hash me-2"></i>
        Explore
      </a>
      <a href="/" className={
        `list-group-item ${active === 'labs' ? 'active' : ''}`
      }>
        <i className="bi bi-asterisk me-2"></i>
        Labs
      </a>
      <a className={
        `list-group-item ${active === 'notifications' ? 'active' : ''}`
      }>
        <i className="bi bi-bell me-2"></i>
        Notifications
      </a>
      <a className={
        `list-group-item ${active === 'messages' ? 'active' : ''}`
      }>
        <i className="bi bi-envelope me-2"></i>
        Messages
      </a>
      <a className={
        `list-group-item ${active === 'bookmarks' ? 'active' : ''}`
      }>
        <i className="bi bi-bookmark me-2"></i>
        Bookmarks
      </a>
      <a className={
        `list-group-item ${active === 'lists' ? 'active' : ''}`
      }>
        <i className="bi bi-card-list me-2"></i>
        Lists
      </a>
      <a className={
        `list-group-item ${active === 'profile' ? 'active' : ''}`
      }>
        <i className="bi bi-person me-2"></i>
        Profile
      </a>
      <a className={
        `list-group-item ${active === 'more' ? 'active' : ''}`
      }>
        <i className="bi bi-three-dots me-2"></i>
        More
      </a>
    </div>
  );
};

export default NavigationSidebar;