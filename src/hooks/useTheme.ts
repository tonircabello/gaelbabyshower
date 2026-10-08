import { useCallback, useState } from 'react'

export type Theme = 'light' | 'dark'

// index.html sets data-theme before first paint, so the DOM is the source of truth.
const readTheme = (): Theme => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme)

  const toggle = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage can be blocked (private mode); the choice then only lasts for this visit.
    }
    setTheme(next)
  }, [theme])

  return { theme, toggle }
}
