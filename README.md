# Installation

Find the directory where m17n is installed (generally `/usr/share/m17n` or
`/usr/local/share/m17n`).

Copy `hi-sanetype` into this directory.

__For SCIM__: At the end of `mdb.dir` file in this directory, add
    
    (input-method hi sanetype "hi-sanetype.mim")

Restart ibus/SCIM.