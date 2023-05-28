import vscode from 'vscode'

export function getCurrentLanguage(): 'en' | 'de' {
   const config = vscode.workspace.getConfiguration('typeScriptWizard')
   const currentLang: 'en' | 'de' = config.get('language') || 'en'
   return currentLang
}
