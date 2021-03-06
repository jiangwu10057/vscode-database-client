import * as vscode from "vscode";
import { ComplectionChain, ComplectionContext } from "../complectionContext";

export class TableCreateChain implements ComplectionChain {

    private tableKeywordList: string[] = ["AUTO_INCREMENT", "NULL", "NOT", "PRIMARY", "CURRENT_TIME", "REFERENCES",
        "DEFAULT", "COMMENT", "UNIQUE", "KEY", "FOREIGN", "CASCADE", "RESTRICT", "UNSIGNED", "CURRENT_TIMESTAMP"];
    private tableKeywordComplectionItems: vscode.CompletionItem[] = [];

    constructor() {

        this.tableKeywordList.forEach((keyword) => {
            const keywordComplectionItem = new vscode.CompletionItem(keyword + " ");
            keywordComplectionItem.kind = vscode.CompletionItemKind.Keyword;
            this.tableKeywordComplectionItems.push(keywordComplectionItem);
        });
    }

    public getComplection(complectionContext: ComplectionContext): vscode.CompletionItem[] {
        const sql = complectionContext.currentSql;
        if (sql && sql.match(/CREATE TABLE/ig)) {
            return this.tableKeywordComplectionItems;
        }
        return null;
    }

    public stop(): boolean {
        return false;
    }

}
