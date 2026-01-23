Blume Access Point

CURRENT VERSION (1.0.0-WIP)
expect some bugs and newer releases

A cyberpunk‑themed interactive terminal inspired by ctOS, DedSec tooling, and underground operator consoles.
Blume Access Point runs entirely in the browser or as a standalone Android APK, offering a fully self‑contained simulation of a network intrusion node.

The interface includes:

    A dynamic terminal with custom commands

    A live event log

    A network map grid

    Unlockable “modules” (RFID, NFC, BadUSB, etc.)

    Overlays, modals, progress bars, and easter eggs

    A fully offline experience — no servers, no tracking, no dependencies

Features

    Interactive Terminal  
    Type commands to trigger scans, spoofing, decryption, system info, and more.

    Hacker Modules  
    Fictional tools like RFID cloning, NFC emulation, signal jamming, and bruteforce sequences.

    Network Grid  
    A visual map of randomized nodes and links that react to scans.

    Event Log  
    Every action leaves a timestamped audit trail.

    Unlock Animations  
    Terminal banners, overlays, modals, and progress bars for maximum immersion.

    Easter Eggs  
    Hidden commands that reveal deeper system behavior.

How to Use (Browser Version)

You can run Blume Access Point directly in your browser — no installation required.
1. Open the site
The interface loads instantly since everything is local.
2. Use the Terminal

Click the terminal input and type commands such as:

    help — list all commands

    scan — refresh the network grid

    netstat — view active connections

    spoof — MAC spoof simulation

    decrypt — run a decryption sequence

    fortune — random cyberpunk quote

    clearlog — wipe the event log

The terminal supports dozens of commands, each with unique output and animations.
3. Activate Modules

Click the tool buttons (RFID, NFC, BadUSB, etc.) to trigger unlock sequences with progress bars and logs.
4. Explore

Try unusual commands — some trigger hidden behavior.

How to Use (Android APK Version) 

Blume Access Point can also run as a standalone Android app.
1. Download the APK

Go to the Releases section of this repository and download the latest APK file.
2. Install

On your Android device:

    Open the APK

    Allow installation from your browser or file manager

    Launch the app

No permissions are required — the app runs fully offline.
3. Experience the Fullscreen Version

The APK version offers:

    Faster animations

    Smoother terminal input

    A native fullscreen experience

    Better performance than mobile browsers

Everything works exactly like the browser version, but feels more like a real operator console.
Project Structure
index.html      → main UI
style.css       → cyberpunk theme + animations
script.js       → terminal logic, modules, unlocks, map grid
(not added yet) assets/         → (optional) icons, images, fonts

Build It Yourself (Optional)
If you dont trust my apks (even though you should) you can just download the repo code as a zip and then compile it yourself

If you want the 2ND EASIEST METHOD
Download the website onto your phone via browser
most new phones have a feature where you can download sites and it shows on your homescreen
