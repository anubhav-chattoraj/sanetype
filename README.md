# About Sanetype

Sanetype is an input method for Indic scripts (currently implemented for 
Devanagari and Bengali). 

## List of Keys
* [Bengali](http://anubhav-chattoraj.github.io/sanetype/bengali/#keys)
* [Devanagari](http://anubhav-chattoraj.github.io/sanetype/#keys)

# Linux

## Input methods

The currently implemented input methods are:
* `hi-sanetype`: Devanagari input. 
   Can be found in the **Hindi** language section of IBus/SCIM.
* `bn-sanetype`: Bengali/Assamese input. 
   Can be found in the **Bengali** language section of IBus/SCIM.

## Installation requirements

* [m17n](http://www.nongnu.org/m17n/)
* IBus, SCIM, or another 
  [input method framework](http://fedoraproject.org/wiki/I18N/InputMethods)
  that supports m17n.

These are preinstalled in most mainstream linux distros. If they're missing,
install them.

## Installation instructions

The first few instructions are **common** for IBus and SCIM.

1. Find the directory where m17n is installed (generally `/usr/share/m17n` or
   `/usr/local/share/m17n`).

2. Copy the contents of the `linux` folder into this directory. 
   This can be done by opening a terminal in the `Sanetype` folder and executing

   `sudo cp -R linux/* m17ndir/`
    
   Replace `m17ndir` with the path of the directory from step 1.

3. Restart IBus/SCIM and right-click the IBus/SCIM icon on the taskbar.

For **IBus**, 

1. Go to *Preferences* → *Input methods*.

2. If the *customize active input methods* checkbox in unchecked, check it.

3. Expand the *Select an input method* dropdown menu.

4. The languages might be grayed out. This is normal.
   Click the arrow next to the relevant language. 
   (See the *Input methods* subsection of this README.)

5. Select the `sanetype (m17n)` option.

6. Click the *Add* button on the right-hand side of the Input Methods window.

7. Click the *Close* button on the bottom right corner.

Now Sanetype input can be toggled by enabling/disabling IBus. 
(Shortcuts for these actions can be set in *Preferences* → 
*Input methods* → *General*.)

For **SCIM**, 

1. Go to *SCIM Setup* → *IMEngine* → *Global Setup*.

2. Click the arrow next to the relevant language. 
   (See the *Input methods* subsection of this README.)

3. Enable the `sanetype (m17n)` input method by checking the *Enable* checkbox 
   to its right.

   (Optionally: Disable other input methods/languages to reduce clutter in your SCIM menu.)

4. Click the *OK* button on the bottom right corner.

Now Sanetype input can be toggled by enabling/disabling SCIM. 
(Shortcuts for these actions can be set in 
*Scim Setup* → *FrontEnd* → *Global Setup*.) 

# Windows

At present, there is no version for Windows. 
Use the web-based implementations instead.

# Web-based implementations

* [Bengali](http://anubhav-chattoraj.github.io/sanetype/bengali/)
* [Devanagari](http://anubhav-chattoraj.github.io/sanetype/)