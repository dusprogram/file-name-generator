// File types configuration
const fileTypes = [
  { ext: "html", icon: "bx bxl-html5", color: "#e34c26" },
  { ext: "css", icon: "bx bxl-css3", color: "#264de4" },
  { ext: "js", icon: "bx bxl-javascript", color: "#f7df1e" },
  { ext: "py", icon: "bx bxl-python", color: "#3776ab" },
  { ext: "jpg", icon: "bx bx-image", color: "#ff9900" },
  { ext: "png", icon: "bx bx-image", color: "#00c853" },
  { ext: "svg", icon: "bx bx-shape-square", color: "#ff4081" },
];

// Initialize saved file names from local storage
let savedFileNames = JSON.parse(localStorage.getItem("fileNames")) || [];

function formatFileName(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  const icon = type === "success" ? "bx-check" : "bx-x";
  toast.innerHTML = `
      <i class='bx ${icon}'></i>
      <span>${message}</span>
  `;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}

async function copyToClipboard(text, button) {
  try {
    await navigator.clipboard.writeText(text);
    button.classList.add("copied");
    const originalContent = button.innerHTML;
    button.innerHTML = `
          <i class='bx bx-check'></i>
          <span>Copied!</span>
      `;
    showToast(`Copied: ${text}`);
    setTimeout(() => {
      button.classList.remove("copied");
      button.innerHTML = originalContent;
    }, 2000);
  } catch (err) {
    showToast("Failed to copy text", "error");
  }
}

function createFileCard(fileName, fileType) {
  const fullFileName = `${fileName}.${fileType.ext}`;
  return `
      <div class="file-card">
          <div class="file-info">
              <div class="file-icon" style="color: ${fileType.color}">
                  <i class='${fileType.icon}'></i>
              </div>
              <span class="file-name">${fullFileName}</span>
          </div>
          <button class="copy-btn" onclick="copyToClipboard('${fullFileName}', this)">
              <i class='bx bx-copy'></i>
              <span>Copy</span>
          </button>
      </div>
  `;
}

function createQuickFiles() {
  return `
      <div class="quick-files">
          <h3><i class='bx bx-coffee'></i>Quick Files</h3>
          <div class="quick-files-grid">
              <div class="file-card">
                  <div class="file-info">
                      <div class="file-icon" style="color: #e34c26">
                          <i class='bx bxl-html5'></i>
                      </div>
                      <span class="file-name">index.html</span>
                  </div>
                  <button class="copy-btn" onclick="copyToClipboard('index.html', this)">
                      <i class='bx bx-copy'></i>
                      <span>Copy</span>
                  </button>
              </div>
              <div class="file-card">
                  <div class="file-info">
                      <div class="file-icon" style="color: #264de4">
                          <i class='bx bxl-css3'></i>
                      </div>
                      <span class="file-name">style.css</span>
                  </div>
                  <button class="copy-btn" onclick="copyToClipboard('style.css', this)">
                      <i class='bx bx-copy'></i>
                      <span>Copy</span>
                  </button>
              </div>
              <div class="file-card">
                  <div class="file-info">
                      <div class="file-icon" style="color: #f7df1e">
                          <i class='bx bxl-javascript'></i>
                      </div>
                      <span class="file-name">script.js</span>
                  </div>
                  <button class="copy-btn" onclick="copyToClipboard('script.js', this)">
                      <i class='bx bx-copy'></i>
                      <span>Copy</span>
                  </button>
              </div>
          </div>
      </div>
  `;
}

function generateFiles() {
  const input = document.getElementById("fileName").value.trim();
  if (!input) {
    showToast("Please enter a file name!", "error");
    return;
  }

  const formattedName = formatFileName(input);

  // Save to local storage if not already present
  if (!savedFileNames.includes(formattedName)) {
    savedFileNames.push(formattedName);
    localStorage.setItem("fileNames", JSON.stringify(savedFileNames));
  }

  const container = document.getElementById("filesContainer");
  container.style.display = "block";

  // Generate content for all saved files
  let allContent = "";
  savedFileNames.forEach((fileName) => {
    let content = '<div class="files-grid">';
    fileTypes.forEach((fileType) => {
      content += createFileCard(fileName, fileType);
    });
    content += "</div>";
    allContent += content;
  });

  // Add quick files section
  allContent += createQuickFiles();

  container.innerHTML = allContent;
  document.getElementById("fileName").value = "";
  showToast("Files generated successfully!");
}

function clearAll() {
  const input = document.getElementById("fileName");
  const container = document.getElementById("filesContainer");

  input.value = "";
  container.style.display = "none";
  container.innerHTML = "";

  // Clear local storage
  localStorage.removeItem("fileNames");
  savedFileNames = [];

  showToast("All cleared!");
}

// Load saved files when page loads
document.addEventListener("DOMContentLoaded", () => {
  if (savedFileNames.length > 0) {
    const container = document.getElementById("filesContainer");
    container.style.display = "block";

    let allContent = "";
    savedFileNames.forEach((fileName) => {
      let content = '<div class="files-grid">';
      fileTypes.forEach((fileType) => {
        content += createFileCard(fileName, fileType);
      });
      content += "</div>";
      allContent += content;
    });

    allContent += createQuickFiles();
    container.innerHTML = allContent;
  }
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "Enter") {
    generateFiles();
  } else if (e.ctrlKey && e.key === "l") {
    clearAll();
  }
});

// Input enter key handler
document.getElementById("fileName").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    generateFiles();
  }
});

// Button hover effects
const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "translateY(-2px)";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.transform = "translateY(0)";
  });
});
