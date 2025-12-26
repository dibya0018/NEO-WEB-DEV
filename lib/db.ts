import Database from "better-sqlite3"
import path from "path"
import fs from "fs"

// Resolve the SQLite database file in /data
const dbPath = path.join(process.cwd(), "data", "website.db")

// Ensure data directory exists
const dataDir = path.dirname(dbPath)
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

// Create a singleton database connection
let db: ReturnType<typeof Database>
try {
  db = new Database(dbPath)
  console.log("Database connected:", dbPath)
  
  // Initialize tables if they don't already exist
  db.exec(`
    CREATE TABLE IF NOT EXISTS page_views (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      path TEXT NOT NULL,
      user_agent TEXT,
      ip_hash TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views(created_at);
    CREATE INDEX IF NOT EXISTS idx_page_views_path ON page_views(path);

    CREATE TABLE IF NOT EXISTS testimonials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      youtube_id TEXT NOT NULL,
      url TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS doctors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      specialty TEXT NOT NULL,
      image_path TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS admin_credentials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `)
  console.log("Database tables initialized")

  // Initialize admin credentials table and data
  try {
    // Check if admin_credentials table exists and has correct structure
    const tableExists = db.prepare(`
      SELECT name FROM sqlite_master 
      WHERE type='table' AND name='admin_credentials'
    `).get()

    if (tableExists) {
      // Check table structure
      const tableInfo = db.prepare("PRAGMA table_info(admin_credentials)").all() as Array<{ name: string }>
      const columnNames = tableInfo.map(col => col.name)
      const hasEmail = columnNames.includes("email")
      const hasPassword = columnNames.includes("password")

      // If table exists but missing columns, recreate it
      if (!hasEmail || !hasPassword) {
        console.log("Recreating admin_credentials table with correct schema...")
        db.exec(`
          DROP TABLE IF EXISTS admin_credentials;
          CREATE TABLE admin_credentials (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
          );
        `)
      }
    }

    // Insert default credentials if table is empty
    const existingAdmin = db.prepare("SELECT id FROM admin_credentials LIMIT 1").get()
    if (!existingAdmin) {
      db.prepare(
        "INSERT INTO admin_credentials (email, password) VALUES (?, ?)"
      ).run("neotruenorthhospitals@gmail.com", "TrueNorth@160324")
      console.log("Default admin credentials initialized")
    }
  } catch (initError) {
    console.warn("Error initializing admin credentials:", initError)
  }

  // Migration: Handle column name mismatches and add missing columns
  try {
    // Check if testimonials table exists
    const tableExists = db.prepare(`
      SELECT name FROM sqlite_master 
      WHERE type='table' AND name='testimonials'
    `).get()
    
    if (tableExists) {
      const tableInfo = db.prepare("PRAGMA table_info(testimonials)").all() as Array<{ name: string; type: string; notnull: number }>
      const columnNames = tableInfo.map(col => col.name)
      const hasYoutubeId = columnNames.includes("youtube_id")
      const hasYoutubeUrl = columnNames.includes("youtube_url")
      const hasUrl = columnNames.includes("url")
      
      console.log("Testimonials table columns:", columnNames)
      
      // If table has youtube_url instead of youtube_id, migrate it
      if (hasYoutubeUrl && !hasYoutubeId) {
        console.log("Migrating youtube_url to youtube_id...")
        // SQLite doesn't support RENAME COLUMN directly, so we need to recreate the table
        const hasUrlInOld = columnNames.includes("url")
        
        db.exec(`
          CREATE TABLE testimonials_new (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            youtube_id TEXT NOT NULL,
            url TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
          );
        `)
        
        // Migrate data
        if (hasUrlInOld) {
          db.exec(`
            INSERT INTO testimonials_new (id, youtube_id, url, created_at)
            SELECT id, youtube_url, COALESCE(url, 'https://www.youtube.com/watch?v=' || youtube_url), created_at
            FROM testimonials;
          `)
        } else {
          db.exec(`
            INSERT INTO testimonials_new (id, youtube_id, url, created_at)
            SELECT id, youtube_url, 'https://www.youtube.com/watch?v=' || youtube_url, created_at
            FROM testimonials;
          `)
        }
        
        db.exec(`
          DROP TABLE testimonials;
          ALTER TABLE testimonials_new RENAME TO testimonials;
        `)
        console.log("Migration completed: youtube_url -> youtube_id")
      } else if (!hasYoutubeId && !hasYoutubeUrl) {
        // Table exists but has neither column - add youtube_id
        console.log("Adding youtube_id column...")
        db.exec("ALTER TABLE testimonials ADD COLUMN youtube_id TEXT NOT NULL DEFAULT ''")
      }
      
      // Add url column if it doesn't exist
      if (!hasUrl) {
        console.log("Adding url column to testimonials table...")
        db.exec("ALTER TABLE testimonials ADD COLUMN url TEXT")
        // Set default URL for existing rows
        const tableInfoAfter = db.prepare("PRAGMA table_info(testimonials)").all() as Array<{ name: string }>
        const hasYoutubeIdAfter = tableInfoAfter.some(col => col.name === "youtube_id")
        const hasYoutubeUrlAfter = tableInfoAfter.some(col => col.name === "youtube_url")
        
        if (hasYoutubeIdAfter) {
          const existingRows = db.prepare("SELECT id, youtube_id FROM testimonials WHERE url IS NULL OR url = ''").all() as Array<{ id: number; youtube_id: string }>
          for (const row of existingRows) {
            if (row.youtube_id) {
              db.prepare("UPDATE testimonials SET url = ? WHERE id = ?").run(
                `https://www.youtube.com/watch?v=${row.youtube_id}`,
                row.id
              )
            }
          }
        } else if (hasYoutubeUrlAfter) {
          const existingRows = db.prepare("SELECT id, youtube_url FROM testimonials WHERE url IS NULL OR url = ''").all() as Array<{ id: number; youtube_url: string }>
          for (const row of existingRows) {
            if (row.youtube_url) {
              db.prepare("UPDATE testimonials SET url = ? WHERE id = ?").run(
                `https://www.youtube.com/watch?v=${row.youtube_url}`,
                row.id
              )
            }
          }
        }
      }
    }
  } catch (migrationError) {
    console.error("Migration error:", migrationError)
    // Don't throw - let the app continue, but log the error
  }
} catch (error) {
  console.error("Failed to initialize database:", error)
  throw error
}

export { db }







