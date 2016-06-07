'use strict';
// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';
import * as copyPaste from 'copy-paste';
import * as path from 'path';


let pasteAndShowMessage= function(fileName: string) {
    copyPaste.copy(fileName);
    vscode.window.setStatusBarMessage(`The filename "${fileName}" was copied to the clipboard.`, 3000);
}


export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('copy-file-name.copyFileName', () => {
        var fullPath = vscode.window.activeTextEditor.document.fileName;
        var extName = path.extname(fullPath);
        var fileName = path.basename(fullPath, extName);
        pasteAndShowMessage(fileName);
    });

    context.subscriptions.push(disposable);
    
    disposable = vscode.commands.registerCommand('copy-file-name.copyFileNameWithExtension', () => {

        var fullPath = vscode.window.activeTextEditor.document.fileName;
        var fileName = path.basename(fullPath);
        pasteAndShowMessage(fileName);
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}