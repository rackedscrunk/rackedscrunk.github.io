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
   KEY-BY-KEY HACKERTYPER MODE
-------------------------------------------------- */

// Build one giant hacker text stream
const hackerStream = hackerLines.join(" ") + " ";
let index = 0;

// Return ONE character at a time
function typeNextChar() {
  const char = hackerStream[index];
  index++;

  // Loop when reaching the end
  if (index >= hackerStream.length) index = 0;

  return char;
}

/* --------------------------------------------------
   KEY BLACKLIST + SHORTCUT WHITELIST
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

  // Add ONE character
  addText(typeNextChar());
});

// Initial render
render();
