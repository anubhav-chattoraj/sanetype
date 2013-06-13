_ __TODO__: Translate this page into Hindi._

_Yell at me if it's past August 2013 and this README is still monolingual._

# What is this?

An [m17n](http://www.nongnu.org/m17n/) input method for the Devanagari script, 
used to write Hindi, Marathi, and a few other languages.

Inspired by the [BolNagri](http://indlinux.org/wiki/index.php/BolNagri) keyboard
layout.

# Requirements

This input method should work with IBus and SCIM, the two most widely-used 
[input method frameworks](http://fedoraproject.org/wiki/I18N/InputMethods)
on Linux.

It may also work with other input method frameworks that support m17n, and on
other operating systems that support those frameworks.

# Input

Input is (mostly) phonetic. See the wiki page for examples.

# Installation

Find the directory where m17n is installed (generally `/usr/share/m17n` or
`/usr/local/share/m17n`).

Copy `hi-sanetype.mim` into this directory.

__For SCIM__: At the end of `mdb.dir` file in this directory, add
    
    (input-method hi sanetype "hi-sanetype.mim")

Restart IBus/SCIM. 

You can now add the `Hindi - sanetype(m17n)` input method to IBus from the 
Preferences dialog, and to SCIM from the IMEngine Global Setup.