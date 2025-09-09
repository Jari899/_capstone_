import React from 'react'

const NotFound = () => {
  return (
    <div className="notfound-container" style={{ textAlign: "center", padding: "2rem" }}>
      <h2>404 - Page Not Found</h2>
      <p>
        Oops! We couldn’t find that page.<br />
        Explore our elegant collection of Italian women’s high heels!
      </p>
      <img
        src="https://images.unsplash.com/photo-1596892003083-4280deaf4275?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGlnaCUyMGhlZWxzfGVufDB8fDB8fHww"
        alt="Italian High Heels"
        style={{ maxWidth: "100%", height: "auto", marginTop: "1rem" }}
      />
    </div>
  )
}

export default NotFound