<h1>🛠 React Admin Panel – CMS (Posts, Pages, Media, Auth)</h1>

<p>This is the <strong>React Admin Panel</strong> for the Mini CMS project.  
It connects to the Laravel backend using JWT authentication and provides full CMS management:</p>

<ul>
  <li>✔ Login & Logout (JWT)</li>
  <li>✔ Dashboard</li>
  <li>✔ Posts (List, Create, Edit, Delete)</li>
  <li>✔ Pages (List, Create, Edit, Delete)</li>
  <li>✔ Media Manager (File Upload)</li>
  <li>✔ Axios API Integration</li>
  <li>✔ Redux Toolkit (Auth, Posts, Pages)</li>
  <li>✔ Protected Routes</li>
  <li>✔ Tailwind CSS UI</li>
</ul>

<hr>

<h2>🚀 Features Implemented</h2>

<h3>🔐 Authentication</h3>
<ul>
  <li>Login using email/password</li>
  <li>Stores JWT token in localStorage</li>
  <li>Fetches authenticated user using <code>/api/me</code></li>
  <li>Logout removes token + redirects to login</li>
  <li>Protected routes: only logged-in users can access the dashboard</li>
</ul>

<h3>📝 Posts Module</h3>
<ul>
  <li>Posts Listing Table</li>
  <li>Create new post</li>
  <li>Edit post</li>
  <li>Delete post</li>
  <li>Image Upload (featured image)</li>
  <li>Publish/Unpublish (optional)</li>
</ul>

<h3>📄 Pages Module</h3>
<ul>
  <li>Pages Listing</li>
  <li>Create Page</li>
  <li>Edit Page</li>
  <li>Delete Page</li>
  <li>SEO fields (title, description)</li>
  <li>Slug auto-generation</li>
</ul>

<h3>🖼 Media Manager</h3>
<ul>
  <li>Upload any media file</li>
  <li>Preview uploaded images</li>
  <li>Returns file URL/path from backend</li>
</ul>

<hr>

<h2>📦 Tech Stack</h2>
<ul>
  <li><strong>React 19</strong></li>
  <li><strong>Redux Toolkit</strong> for state management</li>
  <li><strong>React Router DOM</strong> v6</li>
  <li><strong>Axios</strong> for APIs</li>
  <li><strong>Tailwind CSS</strong> for UI</li>
  <li><strong>Vite</strong> for fast dev server</li>
</ul>

<hr>

<h2>📂 Folder Structure</h2>

<pre><code>
admin/
│── src/
│   ├── api/         # Axios API functions
│   ├── components/  # UI Components
│   ├── features/    # Redux slices
│   ├── pages/       # Admin pages (Posts, Pages, Login, Dashboard)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│── package.json
│── vite.config.js
│── README.md
</code></pre>

<hr>

<h2>🛠 Installation & Setup</h2>

<h3>1️⃣ Clone repository</h3>
<pre><code>git clone https://github.com/gautamgupta05/admin
cd admin
</code></pre>

<h3>2️⃣ Install dependencies</h3>
<pre><code>npm install
</code></pre>

<h3>3️⃣ Start development server</h3>
<pre><code>npm run dev
</code></pre>

<h3>4️⃣ Configure Backend API URL</h3>
<p>Inside <code>src/api/axios.js</code>:</p>

<pre><code>export const api = axios.create({
  baseURL: "http://localhost:8000/api",
});
</code></pre>

<hr>

<h2>🔐 Authentication Flow</h2>

<ol>
  <li>User logs in via <code>/api/login</code></li>
  <li>Token saved in localStorage</li>
  <li>Token added to all Axios requests</li>
  <li>Protected routes check auth state</li>
  <li>Logout clears auth + redirects to login</li>
</ol>

<hr>

<h2>📺 Screens Implemented</h2>

<h3>1. Login Page</h3>
<p>User enters email/password → receives token → redirected to Dashboard.</p>

<h3>2. Dashboard</h3>
<ul>
  <li>Quick links to Posts, Pages, Media</li>
  <li>User greeting</li>
</ul>

<h3>3. Posts Module</h3>
<ul>
  <li>Table with Title, Date, Status</li>
  <li>Create/Edit form with:</li>
  <ul>
    <li>Title</li>
    <li>Excerpt</li>
    <li>Content</li>
    <li>Featured Image Upload</li>
  </ul>
</ul>

<h3>4. Pages Module</h3>
<ul>
  <li>List pages with title + slug</li>
  <li>Create/Edit page with:</li>
  <ul>
    <li>Title</li>
    <li>Slug</li>
    <li>Content</li>
    <li>Meta title</li>
    <li>Meta description</li>
  </ul>
</ul>

<h3>5. Media Manager</h3>
<ul>
  <li>Upload image / file</li>
  <li>Preview uploaded file</li>
  <li>Stores file in <code>/storage/app/public/media</code></li>
</ul>

<h3>6. Logout</h3>
<ul>
  <li>Removes token</li>
  <li>Redirects to login page</li>
</ul>

<hr>

<h2>🧪 API Reference</h2>

<table>
  <tr><th>Feature</th><th>Endpoint</th></tr>
  <tr><td>Login</td><td><code>POST /api/login</code></td></tr>
  <tr><td>Me</td><td><code>GET /api/me</code></td></tr>
  <tr><td>Posts</td><td><code>/api/posts</code></td></tr>
  <tr><td>Pages</td><td><code>/api/pages</code></td></tr>
  <tr><td>Media Upload</td><td><code>POST /api/media/upload</code></td></tr>
</table>

<hr>

<h2>🎨 UI & Styling</h2>
<ul>
  <li>Fully styled using Tailwind CSS</li>
  <li>Clean, responsive admin dashboard</li>
  <li>Forms + tables + buttons consistent theme</li>
</ul>

<hr>

<h2>📜 Assignment Requirements Coverage</h2>

<p><strong>All required features are implemented:</strong></p>

<ul>
  <li>✔ Auth (Login/Logout)</li>
  <li>✔ Dashboard</li>
  <li>✔ Posts CRUD</li>
  <li>✔ Pages CRUD</li>
  <li>✔ Media Manager</li>
  <li>✔ Admin Panel UI</li>
  <li>✔ Protected routes</li>
</ul>

<hr>

<h2>📜 License</h2>
<p>This project is created for the Mini CMS assignment.</p>
