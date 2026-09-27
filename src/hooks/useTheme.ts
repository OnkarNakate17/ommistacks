import { useEffect } from 'react'

export type Theme = 'dark'

export function useTheme() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

  return {
    theme: 'dark' as const,
    toggleTheme: () => {},
  }
}