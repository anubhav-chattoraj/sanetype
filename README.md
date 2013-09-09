# What is this?

An input mechanism for the Devanagari script, used to write Hindi, Marathi, 
Nepali, and a few other languages. 

[Live demo here](http://anubhav-chattoraj.github.io/sanetype/).

# Installation

## Linux

This software requires IBus, SCIM, or another 
[input method framework](http://fedoraproject.org/wiki/I18N/InputMethods)
that supports [m17n](http://www.nongnu.org/m17n/)

Find the directory where m17n is installed (generally `/usr/share/m17n` or
`/usr/local/share/m17n`).

Copy the contents of the `linux` folder into this directory. This can be done by
opening a terminal in the `Sanetype` folder and executing

    sudo cp -R linux/* m17ndir/
    
Here, `m17ndir` is the directory where m17n is installed. 

Restart IBus/SCIM. 

You can now add the `Hindi - sanetype(m17n)` input method to IBus from the 
Preferences dialog, or to SCIM from the IMEngine Global Setup.

## Windows

At present, there is no version for Windows. Use the 
[live demo](http://anubhav-chattoraj.github.io/Sanetype/) instead.