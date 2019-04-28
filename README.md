# copy-file-name

Copies the name of the currently active file to the clipboard.

## Features

* `Ctrl-Alt-f` / `Cmd-Alt-f` - copies the name of currently active file **without extension**
* `Ctrl-Alt-e` / `Cmd-Alt-e` - copies the name of currently active file **with extension**

![Commands](images/copy-file-name-commands.png)

## Dependencies

The extension uses the [node-copy-paste](https://www.npmjs.com/package/copy-paste) module which provides the clipboard access by wrapping `pbcopy/pbpaste` (for OSX), `xclip` (for Linux and OpenBSD), and `clip` (for Windows).

`xclip` has to be [manually installed](https://www.cyberciti.biz/faq/xclip-linux-insert-files-command-output-intoclipboard/) on Linux distributions which are not bundling it (e.g. Linux Mint 19). 

## Known Issues

- 

## Release Notes

### 1.1.0

* The Copy commands are included in the editor title and Explorer context menus 

### 1.0.0

* Initial release

# License

[MIT](LICENSE) &copy; Viktor Nemes
