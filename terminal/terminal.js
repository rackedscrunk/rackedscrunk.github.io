const screen = document.getElementById("terminalScreen");

const hackerLines = [
  "init_ctOS_kernel();",
  "load_payload('dedsec_override');",
  "establish_backdoor(192.168.0.1);",
  "decrypt_stream(0xA9F3);",
  "inject_packet('ghostshell');",
  "override_security_protocol();",
  "compile_exploit('blume_core');",
  "scan_for_nodes();",
  "connect_tunnel('encrypted');",
  "trace_mask.enable();",
  "firewall_bypass();",
  "upload_payload_chunk();",
  "system.log('breach successful');",
  "ctOS.kernel.extend();",
  "dedsec.stream.inject();"
];

let buffer = "";
let cursorVisible = true;

function addText(text) {
  buffer += text;
  render();
}

function render() {
  screen.innerHTML = buffer + `<span class="cursor">█</span>`;
  screen.scrollTop = screen.scrollHeight;
}

/* --------------------------------------------------
   FIX 1: LONGER, FULL-WIDTH HACKER LINES
-------------------------------------------------- */
function randomChunk() {
  const line = hackerLines[Math.floor(Math.random() * hackerLines.length)];

  // Repeat the line to ensure it's long enough
  const extended = (line + " ").repeat(20);

  // Random length between 30–60 chars
  const length = Math.floor(Math.random() * 30) + 30;

  return extended.slice(0, length) + "\n";
}

/* --------------------------------------------------
   FIX 2: KEY BLACKLIST + ALLOW BROWSER SHORTCUTS
-------------------------------------------------- */

// Keys that should NOT trigger hacker typing
const blacklist = [
  "Shift",
  "Control",
  "Alt",
  "Meta",
  "CapsLock",
  "Tab",
  "Escape",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
];

// Allow browser shortcuts like Ctrl+Shift+R, Ctrl+R, Cmd+R
function isBrowserShortcut(e) {
  return (
    (e.ctrlKey && e.shiftKey) ||   // Ctrl+Shift+anything
    (e.ctrlKey && e.key === "r") || // Ctrl+R
    e.metaKey                       // Cmd on Mac
  );
}

document.addEventListener("keydown", (e) => {
  // Allow browser shortcuts
  if (isBrowserShortcut(e)) return;

  // Ignore blacklisted keys
  if (blacklist.includes(e.key)) return;

  // Prevent actual typing
  e.preventDefault();

  // Add random hacker text
  addText(randomChunk());
});

// Initial render
render();
