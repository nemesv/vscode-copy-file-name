'use strict';
// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';
import * as copyPaste from 'copy-paste';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('copy-file-name.copyFileName', () => {

        var fullPath = vscode.window.activeTextEditor.document.fileName;
        var extName = path.extname(fullPath);
        var fileName = path.basename(fullPath, extName);
        copyPaste.copy(fileName);
        vscode.window.showInformationMessage(`The filename "${fileName}" was copied to the clipboard.`);
    });

    context.subscriptions.push(disposable);
    
    disposable = vscode.commands.registerCommand('copy-file-name.copyFileNameWithExtension', () => {

        var fullPath = vscode.window.activeTextEditor.document.fileName;
        var fileName = path.basename(fullPath);
        copyPaste.copy(fileName);
        vscode.window.showInformationMessage(`The filename "${fileName}" was copied to the clipboard.`);
    });

    context.subscriptions.push(disposable);
    
    disposable = vscode.commands.registerCommand('copy-file-name.copyFullPath', () => {

        var fullPath = vscode.window.activeTextEditor.document.fileName;
        var fileName = fullPath;
        copyPaste.copy(fileName);
        vscode.window.showInformationMessage(`The filename "${fileName}" was copied to the clipboard.`);
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}