import * as vscode from 'vscode'

export function showBeginnerQuestion() {
   vscode.window
      .showInformationMessage(
         'Would you call yourself a TypeScript beginner? If you are, we\'ll show you tips that are helpful when you\'re first learning TypeScript.',
         'Yes',
         'No',
      )
      .then((res) => {
         if (!res)
            return

         vscode.workspace
            .getConfiguration('typeScriptWizard')
            .update(
               'hideBasicTips',
               res === 'No',
               vscode.ConfigurationTarget.Global,
            )
      })
}
