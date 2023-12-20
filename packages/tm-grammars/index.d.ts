export type GrammarCategory = 'frontend' | 'backend' | 'common' | 'data' | 'other'

export interface GrammarInfo {
  name: string
  displayName?: string
  category?: GrammarCategory
  scopeName: string
  source: string
  alias?: string[]
  licenseUrl?: string
  license?: string
  sha?: string
  embedded?: string[]
}

const grammars: GrammarInfo[]

export default grammars
