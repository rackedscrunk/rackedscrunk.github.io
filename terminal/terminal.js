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

function randomChunk() {
  const line = hackerLines[Math.floor(Math.random() * hackerLines.length)];
  const length = Math.floor(Math.random() * 10) + 3;
  return line.slice(0, length) + "\n";
}

document.addEventListener("keydown", (e) => {
  // Prevent actual typing
  e.preventDefault();

  // Add random hacker text
  addText(randomChunk());
});

// Initial render
render();
