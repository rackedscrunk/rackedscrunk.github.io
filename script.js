// --------------------------------------------------
// BASIC HELPERS
// --------------------------------------------------
function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function timestamp() {
  const now = new Date();
  return (
    String(now.getHours()).padStart(2, "0") +
    ":" +
    String(now.getMinutes()).padStart(2, "0") +
    ":" +
    String(now.getSeconds()).padStart(2, "0")
  );
  
}

// --------------------------------------------------
// STATUS TEXT CYCLER
// --------------------------------------------------
const statusText = document.getElementById("statusText");
const statusStates = ["ESTABLISHING...", "HANDSHAKING...", "TUNNELING...", "LINKED // ENCRYPTED"];
let statusIndex = 0;

setInterval(() => {
  statusIndex = (statusIndex + 1) % statusStates.length;
  statusText.textContent = statusStates[statusIndex];
}, 2200);

// --------------------------------------------------
// TERMINAL + LOG
// --------------------------------------------------
const terminalBody = document.getElementById("terminalBody");
const terminalForm = document.getElementById("terminalForm");
const terminalInput = document.getElementById("terminalInput");
const logBody = document.getElementById("logBody");

function appendTerminalLine(text) {
  const line = document.createElement("div");
  line.className = "terminal-line";
  line.textContent = text;
  terminalBody.appendChild(line);
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function appendTerminalBanner(text) {
  const banner = document.createElement("div");
  banner.className = "terminal-banner";
  banner.textContent = text;
  terminalBody.appendChild(banner);
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function appendLogLine(text) {
  const line = document.createElement("div");
  line.className = "log-line";
  line.textContent = `[${timestamp()}] ${text}`;
  logBody.appendChild(line);
  logBody.scrollTop = logBody.scrollHeight;
}

// --------------------------------------------------
// TERMINAL COMMANDS
// --------------------------------------------------
function handleCommand(cmdRaw) {
  const cmd = cmdRaw.trim().toLowerCase();
  if (!cmd) return;

  appendTerminalLine(`dedsec@node:~$ ${cmdRaw}`);

  switch (cmd) {
    case "help":
  appendTerminalLine("available commands:");
  appendTerminalLine("  help        - shows commands");
  appendTerminalLine("  clear       - clear terminal output");
  appendTerminalLine("  clearlog    - clear event log");
  appendTerminalLine("  scan        - scan network grid");
  appendTerminalLine("  trace       - simulate trace event");
  appendTerminalLine("  sysinfo     - system information dump");
  appendTerminalLine("  uptime      - show node uptime");
  appendTerminalLine("  whoami      - display operator identity");
  appendTerminalLine("  motd        - message of the day");
  appendTerminalLine("  netstat     - list active connections");
  appendTerminalLine("  spoof       - spoof MAC address");
  appendTerminalLine("  ping        - simulate ping");
  appendTerminalLine("  decrypt     - fake decryption sequence");
  break;

    case "clear":
      terminalBody.innerHTML = "";
      break;

    case "scan":
      appendTerminalLine("initiating passive scan...");
      appendLogLine("network scan requested by user");
      randomizeNodes();
      break;

    case "trace":
      appendTerminalLine("WARNING: trace detected. rerouting...");
      appendLogLine("trace event simulated");
      flashDanger();
      break;

             case "sysinfo":
      appendTerminalLine("system: ctOS node v3.9");
      appendTerminalLine("kernel: CENTRAL-OS 1.14");
      appendTerminalLine("cpu: quantum-lite 4‑core @ 6.1ghz");
      appendTerminalLine("memory: 8192mb virtual");
      appendTerminalLine("gpu: ???? 2.0");
      appendLogLine("system info requested");
      break;

    case "uptime":
      appendTerminalLine("node uptime: " + Math.floor(rand(1200, 99999)) + " seconds");
      appendLogLine("uptime checked");
      break;

    case "whoami":
      appendTerminalLine("identity: ???");
      appendTerminalLine("access level: BLUME-ADMIN");
      appendLogLine("identity queried");
      break;

    case "motd":
      appendTerminalLine("message of the day:");
      appendTerminalLine("  stay unseen. stay free.");
      appendLogLine("motd displayed");
      break;

    case "netstat":
  appendTerminalLine("active connections:");
  appendTerminalLine(`  ???.???.?.??.???  ->  localhost`);
  appendTerminalLine("  10.0.0.12:443   ->  ctOS uplink");
  appendTerminalLine("  192.168.0.5:22  ->  ghostshell");
  appendLogLine(`netstat executed (local IP ${localIP})`);
  break;

    case "spoof":
      appendTerminalLine("spoofing MAC address...");
      appendLogLine("MAC spoof initiated");
      terminalUnlock("MAC SPOOFED");
      break;

    case "ping":
      appendTerminalLine("pinging ctOS uplink...");
      appendTerminalLine("response: " + Math.floor(rand(12, 120)) + "ms");
      appendTerminalLine("response: " + Math.floor(rand(12, 120)) + "ms");
      appendTerminalLine("response: " + Math.floor(rand(12, 120)) + "ms");
      appendLogLine("ping executed");
      break;

    case "decrypt":
      appendTerminalLine("starting decryption...");
      appendLogLine("decryption module started");
      terminalUnlock("DECRYPTION COMPLETE");
      break;

    case "fortune":
      const fortunes = [
        "the system watches those who watch it.",
        "every lock has a key. every key has a flaw.",
        "trust no signal.",
        "the quietest node is the deadliest."
      ];
      appendTerminalLine(fortunes[Math.floor(Math.random() * fortunes.length)]);
      appendLogLine("fortune generated");
      break;

    case "glitch":
      flashDanger();
      appendTerminalLine("visual distortion injected.");
      appendLogLine("glitch effect triggered");
      break;

    case "clearlog":
      logBody.innerHTML = "";
      appendTerminalLine("event log cleared.");
      appendLogLine("log cleared by operator");
      break;

    case "dedsec":
    case "wake up":
    case "who is tyler":
      flashDanger();
      appendTerminalBanner(">>> WAKE UP, TYLER <<<");
      appendTerminalLine("the system sees you.");
      appendTerminalLine("the node remembers.");
      appendLogLine("unauthorized identity handshake detected");
      break;



    default:
      appendTerminalLine(`unknown command: ${cmd}`);
      appendTerminalLine("type 'help' for available commands");
      break;
  }
}

terminalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = terminalInput.value;
  handleCommand(value);
  terminalInput.value = "";
});

// --------------------------------------------------
// MAP GRID
// --------------------------------------------------
const mapGrid = document.getElementById("mapGrid");
let nodes = [];

function createNodes(count = 10) {
  nodes.forEach((n) => n.el.remove());
  nodes = [];

  const rect = mapGrid.getBoundingClientRect();
  for (let i = 0; i < count; i++) {
    const node = document.createElement("div");
    node.className = "map-node";
    const x = rand(10, rect.width - 10);
    const y = rand(10, rect.height - 10);
    node.style.left = `${x}px`;
    node.style.top = `${y}px`;
    mapGrid.appendChild(node);
    nodes.push({ el: node, x, y });
  }

  for (let i = 0; i < nodes.length - 1; i++) {
    const a = nodes[i];
    const b = nodes[i + 1];
    const link = document.createElement("div");
    link.className = "map-link";

    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

    link.style.left = `${a.x}px`;
    link.style.top = `${a.y}px`;
    link.style.width = `${length}px`;
    link.style.transform = `rotate(${angle}deg)`;

    mapGrid.appendChild(link);
  }
}

function randomizeNodes() {
  createNodes(Math.floor(rand(6, 14)));
  nodes.forEach((n) => {
    n.el.classList.remove("active");
    if (Math.random() > 0.6) {
      n.el.classList.add("active");
    }
  });
}

// --------------------------------------------------
// DANGER FLASH (TRACE)
// --------------------------------------------------
function flashDanger() {
  document.body.classList.add("danger");
  setTimeout(() => document.body.classList.remove("danger"), 400);
}

// --------------------------------------------------
// UNLOCK SYSTEM (OVERLAY, MODAL, TERMINAL)
// --------------------------------------------------

// Create overlay
const overlay = document.createElement("div");
overlay.className = "overlay";
overlay.innerHTML = `<div class="overlay-text"></div>`;
document.body.appendChild(overlay);

function showOverlay(text) {
  overlay.querySelector(".overlay-text").textContent = text;
  overlay.classList.add("active");

  setTimeout(() => {
    overlay.classList.remove("active");
  }, 1400);
}

// Create modal
const modal = document.createElement("div");
modal.className = "modal";
modal.innerHTML = `
  <div class="modal-title">// MODULE UNLOCK</div>
  <div class="modal-body"></div>
  <div class="progress-bar"><div class="progress-fill"></div></div>
`;
document.body.appendChild(modal);

function showModal(text) {
  modal.querySelector(".modal-body").textContent = text;
  modal.classList.add("active");

  const fill = modal.querySelector(".progress-fill");
  fill.style.width = "0%";
  setTimeout(() => (fill.style.width = "100%"), 50);

  setTimeout(() => {
    modal.classList.remove("active");
  }, 1400);
}

// Terminal unlock
function terminalUnlock(text) {
  appendTerminalBanner(text);
  appendTerminalLine("processing...");

  const bar = document.createElement("div");
  bar.className = "progress-bar";
  bar.innerHTML = `<div class="progress-fill"></div>`;
  terminalBody.appendChild(bar);

  // Start the bar animation
  const fill = bar.querySelector(".progress-fill");
  fill.style.width = "0%";
  setTimeout(() => {
    fill.style.width = "100%";
  }, 50);

  // After bar finishes, print completion message
  setTimeout(() => {
    appendTerminalLine("process complete");
  }, 1300);
}

// --------------------------------------------------
// HACKER MODULES
// --------------------------------------------------
const toolButtons = document.querySelectorAll(".tool-btn");

const toolActions = {
  rfid: () => {
    appendLogLine("RFID module triggered");
    terminalUnlock("RFID MODULE UNLOCKED");
  },

  nfc: () => {
    appendLogLine("NFC emulation module triggered");
    showModal("EMULATING NFC TAG...");
  },

  badusb: () => {
    appendLogLine("BadUSB module armed");
    showOverlay("BADUSB ARMED");
  },

  jam: () => {
    appendLogLine("Signal jammer activated");
    showOverlay("SIGNAL JAMMER ACTIVE");
  },

  freq: () => {
    appendLogLine("Frequency scan started");
    showModal("SCANNING FREQUENCIES...");
  },

  bruteforce: () => {
    appendLogLine("Bruteforce module started");
    terminalUnlock("BRUTEFORCE ENGAGED");
  },
};

toolButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;
    if (toolActions[action]) toolActions[action]();
  });
});

// --------------------------------------------------
// INIT
// --------------------------------------------------
window.addEventListener("load", () => {
  createNodes();
  appendTerminalLine("session online. type 'help' to begin.");
  terminalInput.focus();
});
