# Fix: "node / npm / pnpm is not recognized"

Node.js is not installed or not in your system PATH. Follow these steps:

---

## Step 1: Install Node.js (Windows)

1. **Download Node.js** (LTS recommended):
   - Go to: **https://nodejs.org**
   - Download the **LTS** version (e.g. "20.x.x LTS")
   - Run the installer (`.msi`)

2. **During installation:**
   - Check the option **"Add to PATH"** (usually checked by default)
   - Complete the installation

3. **Restart your terminal** (or restart Cursor):
   - Close the current PowerShell/terminal window
   - Open a new terminal
   - Or in Cursor: close the terminal panel and open a new one (Ctrl+` or Terminal → New Terminal)

---

## Step 2: Verify installation

In a **new** terminal, run:

```powershell
node --version
npm --version
```

You should see version numbers (e.g. `v20.10.0` and `10.2.0`).

---

## Step 3: Run the project

From the project folder:

```powershell
cd C:\Users\vicky\OneDrive\Desktop\S9
npm install
npm run dev
```

Then open **http://localhost:3000** in your browser.

---

## If Node is installed but still not recognized

1. **Find where Node is installed** (e.g. `C:\Program Files\nodejs\`).
2. **Add it to PATH for this session** (PowerShell):

   ```powershell
   $env:Path += ";C:\Program Files\nodejs\"
   node --version
   ```

3. **To add permanently:**  
   - Press Windows key, type "Environment Variables"  
   - Open "Edit the system environment variables"  
   - Click "Environment Variables"  
   - Under "User variables" or "System variables", select "Path" → "Edit"  
   - Add: `C:\Program Files\nodejs\`  
   - OK and restart the terminal

---

## Optional: Install pnpm

After Node works, you can use pnpm:

```powershell
npm install -g pnpm
pnpm dev
```
